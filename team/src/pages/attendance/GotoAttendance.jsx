// pages/main/GotoAttendance.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const GotoAttendance = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let courseCode = null;

    if ((hour === 10 && minute >= 30) || hour === 11) {
      courseCode = "A";
    } else if ((hour === 13 && minute >= 30) || hour === 14) {
      courseCode = "D";
    } else if (hour >= 16 && hour < 19) {
      courseCode = "B";
    }

    if (courseCode) {
      navigate(`/attendance?courseCode=${courseCode}`);
    } else {
      alert("지금은 출석 가능한 수업 시간이 아닙니다.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>📚 출석 시스템</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "16px 32px",
          fontSize: "16px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        출석하러 가기
      </button>
    </div>
  );
};

export default GotoAttendance;
