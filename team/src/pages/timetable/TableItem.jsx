import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TimetablePage from './TimetablePage';

export const TableItemContainer = styled.div`
    background-color: rgb(228, 234, 251);
    width: 100%;

`;

export const TimeItemContainer = styled.div`
    position: absolute;
    top: 460px;
    background-color: white;
    width: 100%;
    height: 50%;
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
`;

export const WeekButton = styled.button`
    background-color: ${(props) => (props.active ? '#2162EB' : 'white')};
    color: ${(props) => (props.active ? 'white' : '#2162EB')};
    border: 1px solid #2162EB;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

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
            <TimetablePage />
            <TimeItemContainer>
                <h1>{item.title}</h1>
                <p>{item.time}</p>
                <p>{item.location}</p>

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