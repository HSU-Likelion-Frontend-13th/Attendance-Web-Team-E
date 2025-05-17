import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TimetablePage from './TimetablePage';



export const TableItemContainer = styled.div`
    background-color: rgba(228, 234, 251, 0.8); /* 약간 투명한 배경 */
    backdrop-filter: blur(10px); /* 배경 블러 처리 */
    height: 100vh; /* 화면 높이를 100%로 설정 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0; /* 내부 여백 제거 */
    margin: 0; /* 외부 여백 제거 */
    overflow: hidden; /* 스크롤 방지 */
`;

export const TimeItemContainer = styled.div`
    position: absolute;
    top: 360px;
    background-color: white;
    height: 582px;
    padding: 20px;
    border-radius: 20px 20px 0px 0px;
    border: 2px solid #2162E9;
    justify-content: center;
    align-items: center;
    text-align: center;

  
`;

export const WeekButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: -30px;
    
`;

export const WeekButton = styled.button`
    background-color: ${(props) => (props.active ? '#2162EB' : 'white')};
    color: ${(props) => (props.active ? 'white' : '#2162EB')};
    border: 1px solid #2162EB;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    
   

    &:hover {
        background-color: ${(props) => (props.active ? '#1A4DB8' : '#E4EBFB')};
    }

    &.alert {
        position: relative;
    }

    &.alert::after {
        content: '!';
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: red;
        color: white;
        font-size: 12px;
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`;
export const Time = styled.p`
    font-size: 18px;
    margin-bottom: 100px;
    margin-top: 5px;
    color: #9EA3B2;
`;
const timetableItems = [
    { id: 1, title: "UX/UI 지적 재산권 [A]", time: "10:30 - 12:00", location: "탐구관 502호" },
    { id: 2, title: "AI와 HCI [D]", time: "01:30 - 15:00", location: "탐구관 508호" },
    { id: 3, title: "영어 커뮤니케이션 [B]", time: "16:00 - 19:00", location: "탐구관 502호" },
];

const TableItem = () => {
    const { id } = useParams(); // URL에서 id 가져오기
    const item = timetableItems.find((t) => t.id === parseInt(id)); // id를 기반으로 데이터 검색

    if (!item) {
        return <div>강의 정보를 찾을 수 없습니다.</div>; // 데이터가 없을 경우 처리
    }

    const weeks = Array.from({ length: 17 }, (_, i) => i + 1); // 1주차부터 17주차까지 생성

    return (
       <TableItemContainer>
        <TimetablePage style={{ margin: '0px' }} />
        <TimeItemContainer>
            <Title>{item.title}</Title>
            <Time style={{ paddingBottom: ' 0px' }}>{item.time} | {item.location}</Time>
            
            <WeekButtonContainer>
                {weeks.map((week) => (
                    <>
                        {week === 9 && <div style={{ flexBasis: "100%" }} />} {/* 9주차에서 줄바꿈 */}
                        <WeekButton
                            key={week}
                            active={week >= 1 && week <= 4} // 1주차부터 4주차만 활성화
                            className={week === 2 || week === 5 ? 'alert' : ''} // 2주차와 5주차에 알림 표시
                        >
                            {week}주차
                        </WeekButton>
                    </>
                ))}
            </WeekButtonContainer>
        </TimeItemContainer>
        </TableItemContainer>
    
    );
};

export default TableItem;