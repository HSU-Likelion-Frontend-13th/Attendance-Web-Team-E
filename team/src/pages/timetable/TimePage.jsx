import React from 'react'
import * as S from "../../components/common/Button.style"
import styled from 'styled-components';
import LionLogo from "../../components/common/LionLogo";
import SchoolLogo from '../../components/common/SchoolLogo';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

export const TimePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    `;

const TimePage = () => {
  const navigate = useNavigate();
    const handleTablePage = () => {
        navigate('/timetable');
    }
  return (

    <TimePageContainer>
        <LionLogo />
        <SchoolLogo />
        <Header />
      <S.Button onClick={handleTablePage}>시간표 보기</S.Button>
      </TimePageContainer>
  )
}

export default TimePage
