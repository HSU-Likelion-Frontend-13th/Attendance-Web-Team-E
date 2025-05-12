import React from "react";
import { useNavigate } from "react-router-dom";
import hsuIcon from "../img/hsu.png";


export default function GotoAttendance() {
  const navigate = useNavigate();
    let Icon1 = hsuIcon;
  const handleClick = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let courseCode = null;

    if ((hour === 10 && minute >= 30) || hour === 11) {
      courseCode = "A";
    } else if ((hour === 13 && minute >= 30) || hour === 14) {
      courseCode = "D";
    } else if (hour >= 16 && hour < 21) {
      courseCode = "B";
    }

    if (courseCode) {
      navigate(`/attendance?courseCode=${courseCode}`);
    } else {
      alert("지금은 출석할 수 있는 시간이 아닙니다.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px",
        fontFamily: "sans-serif",
      }}
    >
       <img src={Icon1} alt="HSU Logo" style={{ width: "300px" }} />

      <h2>출석체크 페이지</h2>
      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        출석하러 가기
      </button>

      <div style={{ marginTop: "40px", fontSize: "14px", color: "#888" }}>
        정시 기준 초과 시간<br />
        00분~05분 이내 : <b>정상 출석</b><br />
        05분~10분 이내 : <b>지각</b><br />
        10분 초과 : <b>결석</b>
      </div>
    </div>
  );
}
