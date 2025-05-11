import React from 'react'
import * as S from "../../components/common/Button.style"
import styled from 'styled-components';
import LionLogo from "../../components/common/LionLogo";
import SchoolLogo from '../../components/common/SchoolLogo';
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
   
  return (

    <TimePageContainer>
        <LionLogo />
        <SchoolLogo />
      <S.Button>시간표 보기</S.Button>
      </TimePageContainer>
  )
}

export default TimePage
