import React, { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import CurrentTime from "../../components/attendance/CurrentTime";
import ClassInfo from "../../components/attendance/ClassInfo";
import StatusTitle from "../../components/attendance/StatusTitle";
import StatusIcon from "../../components/attendance/StatusIcon";
import AttendanceButton from "../../components/attendance/AttendanceButton";

import LionLogo from "../../components/common/LionLogo";
import SchoolLogo from "../../components/common/SchoolLogo";



export default function AttendancePage() {
  const [params]=useSearchParams();
  const navigate = useNavigate();
  const courseCode=params.get("courseCode"); 


    const [now, setNow]=useState(new Date()); //현재시간 받기
    const [status, setStatus]=useState("before"); //출석 상태 
    const [attendanceTime, setAttendanceTime] = useState(null);

    const courseTimes={
      A: { start: "10:30", end: "11:00" },
      D: { start: "14:02", end: "15:00" },
      B: { start: "16:00", end: "19:40" },
    };

    const getAttendanceStatus = ( now,startTime,endTime)=>{
      if(!startTime || !endTime) return "noClass"; //수업이 없을 때

        const [startHour, startMinute]= startTime.split(":").map(Number); //시작 시:분
        const [endHour, endMinute]= endTime.split(":").map(Number); //종료 시:분

        const start =new Date(now);
        start.setHours(startHour,startMinute,0); //시작시간 설정

        const end=new Date(now);
        end.setHours(endHour,endMinute,0); //종료시간 설정

        const difference=Math.floor((now-start)/60000); //현재시간과 시작시간의 차이

        if(now<start)
            return "before"; //수업 전
        if(now>end)
            return "after"; //수업 후

        if(difference<=5)
            return "onTime"; //출석 인정되는 시간
        if(difference>5 && difference<=10)
            return "late"; //지각
        return "absent"; //결석
        
    };

     // courseCode 없을 경우 홈으로 이동
  useEffect(() => {
    if (!courseCode) {
      navigate("/"); // 메인 페이지로 리다이렉트
    }
  }, [courseCode, navigate]);



  useEffect(() => {
  const timer = setInterval(() => {
    const current = new Date();
    setNow(current);

    const course = courseTimes[courseCode];
    if (!course) {
      setStatus("noClass");
    } else {
      setStatus(getAttendanceStatus(current, course.start, course.end));
    }

  }, 1000);

  return () => clearInterval(timer);
}, [courseCode]);



    return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "sans-serif",
      height: "100vh",
      position: "relative",
      paddingTop: "60px",
    }}
  >

    <div style={{ position: "absolute", top: "20px", left: "20px" }}>
      <LionLogo />
    </div>

    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
  <SchoolLogo />
</div>


    {/* 중앙 */}
    <div style={{ textAlign: "center" }}>
      <StatusIcon status={status} />
      <StatusTitle status={status} />

      <AttendanceButton
        status={status}
        onClick={() => {
          const time = new Date();
          setAttendanceTime(time);
          if (status === "onTime") {
            alert("출석처리 되었습니다!");
          } else if (status === "late") {
            alert("지각처리 되었습니다!");
          } else if (status === "noClass") {
            window.location.reload();
          } else if (status === "absent") {
            alert("결석처리 되었습니다!");
          }
        }}
      />

      {attendanceTime && (
          <div style={{ marginTop: "8px", color: "#888", fontSize: "20px" }}>
            출석 시간 :{" "}
            {attendanceTime.toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        )}

      <div style={{ marginTop: "16px", fontWeight: "bold", fontSize: "24px" }}>
        <CurrentTime now={now} />
      </div>

      <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
        <ClassInfo course={courseCode} />
      </div>
    </div>


      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          fontSize: "20px",
          color: "#888",
          textAlign: "left",
          lineHeight: "1.6",
        }}
      >
        정시 기준 초과 시간 00분~05분 이내 : <b>정상 출석</b>
        <br />
        05분~10분 이내 : <b>지각</b>
        <br />
        10분 초과 : <b>결석</b>
      </div>
    </div>
  );
}