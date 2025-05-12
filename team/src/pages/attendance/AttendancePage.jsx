import React, { useEffect,useState } from "react";
import AttendanceButton from "../../components/attendance/AttendanceButton";
import CurrentTime from "../../components/attendance/CurrentTime";
import ClassInfo from "../../components/attendance/ClassInfo";
import StatusTitle from "../../components/attendance/StatusTitle";
import StatusIcon from "../../components/attendance/StatusIcon";
import StatusDescription from "../../components/attendance/StatusDescription";





export default function AttendancePage() {
    const [now, setNow]=useState(new Date()); //현재시간 받기
    const [status, setStatus]=useState("before"); //출석 상태 

    const getAttendanceStatus = ( now,startTime="10:30",endTime="12:00")=>{
        const [startHour, startMinute]= startTime.split(":").map(Number); //시작 시:분
        const [endHour, endMinute]= endTime.split(":").map(Number); //종료 시:분

        const start =new Date(now);
        start.setHours(startHour,startMinute,0); //시작시간 설정

        const end=new Date(now);
        end.setHours(endHour,endMinute,0); //종료시간 설정



        if(now<start){
            return "before"; //수업 전
        if(now>end)
            return "after"; //수업 후
    };

    
        
        



    }



  return (
    <div>
      <h1>AttendancePage 페이지 입니다.</h1>
      <CurrentTime />

      <ClassInfo />

      <StatusDescription />

      <StatusIcon />

      <StatusTitle />

      <AttendanceButton />
    </div>
  );
}