import React from 'react';
import styled from 'styled-components';
import LionLogo from '../../components/common/LionLogo';
import * as S from '../../components/common/Button.style';
import SchoolLogo from '../../components/common/SchoolLogo';
import { useNavigate } from 'react-router-dom';

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
  top: 40px; /* 상단에서 40px 떨어짐 */
  right: 40px; /* 오른쪽에서 40px 떨어짐 */
  background: none;
  border: none;
  color: #777c89;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const handleTimePage = () => {
    navigate('/time');
  };

  const handleGotoAttendance = () => {
    navigate('/goto-attendance');
  };

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <MainContainer>
      <LionLogo />
      <SchoolLogo />
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      <S.Button onClick={handleGotoAttendance}>출석체크</S.Button>
      <S.Button onClick={handleTimePage}>오늘의 시간표</S.Button>
    </MainContainer>
  );
};

export default MainPage;