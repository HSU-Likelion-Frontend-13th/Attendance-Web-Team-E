import { Routes, Route } from "react-router-dom";
import GotoAttendance from "./pages/attendance/GotoAttendance"; // 경로 수정됨
import AttendancePage from "./pages/attendance/AttendancePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GotoAttendance />} />
      <Route path="/attendance" element={<AttendancePage />} />
    </Routes>
  );
}

export default App;
