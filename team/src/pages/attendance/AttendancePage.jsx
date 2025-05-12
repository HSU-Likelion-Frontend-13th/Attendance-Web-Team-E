import React, { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";


import CurrentTime from "../../components/attendance/CurrentTime";
import ClassInfo from "../../components/attendance/ClassInfo";
import StatusTitle from "../../components/attendance/StatusTitle";
import StatusIcon from "../../components/attendance/StatusIcon";
import AttendanceButton from "../../components/attendance/AttendanceButton";



export default function AttendancePage() {
  const [params]=useSearchParams();
  const courseCode=params.get("courseCode"); 


    const [now, setNow]=useState(new Date()); //현재시간 받기
    const [status, setStatus]=useState("before"); //출석 상태 

    const courseTimes={
      A: { start: "10:30", end: "12:00" },
      D: { start: "13:30", end: "15:00" },
      B: { start: "16:00", end: "19:00" },
    };

    const getAttendanceStatus = ( now,startTime="10:30",endTime="12:00")=>{
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

   useEffect(() => {
        const timer = setInterval(() => {
            const current = new Date(); 
            setNow(current); //현재시간 설정
             const { start, end } = courseTimes[courseCode] || courseTimes["A"];
            setStatus(getAttendanceStatus(current,start,end)); //출석 상태 설정

        },1000); //1초마다 업데이트 해줌
        
        return () => {
    clearInterval(timer);
  };
}, [courseCode]);


   return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/*중앙*/}
      <div style={{ textAlign: "center" }}>
       
        <StatusIcon status={status} />
        <StatusTitle status={status} />
        <AttendanceButton
          status={status}
          onClick={() => alert("✅ 출석이 처리되었습니다!")}
        />
      </div>

      {/*하단*/}
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#555" }}>
        <ClassInfo course={courseCode} />

        <CurrentTime now={now} />
      </div>
    </div>
  );
}