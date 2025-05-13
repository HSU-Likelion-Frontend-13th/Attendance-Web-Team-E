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

export const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: block;
    gap: 10px;
    font-size: 20px;
    text-align: left;
    color: #777C89;
  
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
      <DescriptionContainer>
        <div>정시 기준 초과 시간 00분~05분 이내 : 정상 출석</div>
        <div>정시 기준 초과 시간 05분~10분 이내 : 지각</div>
        <div>정시 기준 초과 시간 10분 초과 : 결석</div>
        </DescriptionContainer>
     

      </TimePageContainer>
  )
}

export default TimePage
