import React from "react";
import { useNavigate } from "react-router-dom";
import SchoolLogo from "../../components/common/SchoolLogo";
import styled from "styled-components";
import LionLogo from "../../components/common/LionLogo"; // 기존대로 유지

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  color: #777c89;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
`;

const GotoAttendance = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let courseCode = null;

    if ((hour === 10 && minute >= 30) || hour === 12) {
      courseCode = "A";
    } else if ((hour === 13 && minute >= 30) ||hour === 15) {
      courseCode = "D";
    } else if (hour >= 16 && hour < 19) {
      courseCode = "B";
    }

    navigate(`/attendance?courseCode=${courseCode || "none"}`);

  };

  return (
    <MainContainer>
      <LionLogo />
      <LogoutButton onClick={() => alert("로그아웃!")}>로그아웃</LogoutButton>

     
        <SchoolLogo />
       

      <h2 style={{ marginBottom: "20px" }}>출석체크 페이지</h2>

      <button
        onClick={handleClick}
        style={{
          padding: "16px 32px",
          fontSize: "16px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        출석하러 가기
      </button>

      <div style={{
    position: "absolute",
    bottom: "20px",
    left: "20px",
    fontSize: "14px",
    color: "#888",
    textAlign: "left",
  }}
>
  정시 기준 초과 시간 00분~05분 이내 : <b>정상 출석</b>
  <br />
  정시 기준 초과 시간 05분~10분 이내 : <b>지각</b>
  <br />
  정시 기준 초과 시간 10분 초과 : <b>결석</b>
</div>

    </MainContainer>
  );
};

export default GotoAttendance;
