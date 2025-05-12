import React from "react";
import AttendancePage from "./pages/attendance/AttendancePage"; 
import StatusIcon from "./components/attendance/StatusIcon";

function App() {
  return (
    <div className="App">
      <AttendancePage />
      <StatusIcon status="onTime" />
      <StatusIcon status="late" />
      <StatusIcon status="before" />
      <StatusIcon status="after" />
    </div>
  );
}

export default App;
