import React from "react";
import AttendanceButton from "../../components/attendance/AttendanceButton";
import CurrentTime from "../../components/attendance/CurrentTime";
import ClassInfo from "../../components/attendance/ClassInfo";
import StatusTitle from "../../components/attendance/StatusTitle";
import StatusIcon from "../../components/attendance/StatusIcon";
import StatusDescription from "../../components/attendance/StatusDescription";





export default function AttendancePage() {
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