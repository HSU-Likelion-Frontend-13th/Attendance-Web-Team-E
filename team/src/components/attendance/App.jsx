import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GotoAttendance from "./pages/main/GotoAttendance";
import AttendancePage from "./pages/attendance/AttendancePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GotoAttendance />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
