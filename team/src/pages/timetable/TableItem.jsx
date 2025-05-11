import React from 'react'
import { useParams } from 'react-router-dom'
import TimetablePage from './TimetablePage'
import styled from 'styled-components';



export const TableItemContainer = styled.div`
    background-color:rgb(228, 234, 251);
    width: 100%;
    height: 100vh;

`;
export const TimeItemContainer = styled.div`
    display: flex;
    background-color: white;
    `;

    const timetableItems = [
        { id: 1, title: "UX/UX 지적 재산권 [A]", time: "10:30 - 12:00", location: "탐구관 502호" },
        { id: 2, title: "AI와 HCI [D]", time: "01:30 - 15:00", location: "탐구관 508호" },
        { id: 3, title: "영어 커뮤니케이션 [B]", time: "16:00 - 19:00", location: "탐구관 502호" },
    ];

const TableItem = () => {
    const { id } = useParams();
    const item = timetableItems.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>강의 정보를 찾을 수 없습니다.</div>;
    }

  return (
    <TableItemContainer>
        <TimetablePage />
            <TimeItemContainer>
            <h1>{item.title}</h1>
            <p>{item.time}</p>
            <p>{item.location}</p>
            </TimeItemContainer>
    </TableItemContainer>
  )
}

export default TableItem
