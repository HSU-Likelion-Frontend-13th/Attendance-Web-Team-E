import React from 'react';
import styled from 'styled-components';
import LionLogo from '../../components/common/LionLogo';
import School from "../../assets/School.png";
import Pf1 from "../../assets/Pf1.png";
import Pf2 from "../../assets/Pf2.png";
import { useNavigate } from 'react-router-dom';


export const TableContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative; /* 자식 요소의 absolute 위치를 기준으로 설정 */
`;

export const Logo = styled.img`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 155px;
    height: 79px;
`;

export const Label = styled.div`
    position: absolute;
    top: 100px;
    display: block;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`;

export const TableBoxContainer = styled.div`
    padding-top: 100px;
`;

export const TableBox = styled.div`
    position: relative;
    width: 600px;
    height: 100px;
    border: 2px solid #2162EB;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    &:hover {
        background-color: #e4ebfb;
        cursor: pointer;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const Profile = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 150px;
  
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const Subtitle = styled.div`
    font-size: 20px;
    color: #777c89;
    margin-top: 10px;
`;

const TimetablePage = () => {
    
    const timetableItems = [
        {
            id: 1,
            title: "UX/UX 지적 재산권 [A]",
            time: "10:30 - 12:00",
            location: "탐구관 502호",
            profile: Pf1,
        },
        {
            id: 2,
            title: "AI와 HCI [D]",
            time: "01:30 - 15:00",
            location: "탐구관 508호",
            profile: Pf1,
        },
        {
            id: 3,
            title: "영어 커뮤니케이션 [B]",
            time: "16:00 - 19:00",
            location: "탐구관 502호",
            profile: Pf2,
        },
    ];

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/timetable/${id}`);
    };

    return (
        <TableContainer>
            <LionLogo />
            <Logo src={School} alt="School" />
            <Label>오늘의 시간표</Label>

            <TableBoxContainer>
                {timetableItems.map((item) => (
                    <TableBox key={item.id} item={item} onClick={() => handleClick(item.id)}>
                        <ContentContainer>
                            <Profile src={item.profile} alt={`${item.title} Profile`} />
                            <TextContainer>
                                <Title>{item.title}</Title>
                                <Subtitle>{item.time} | {item.location}</Subtitle>
                            </TextContainer>
                        </ContentContainer>
                    </TableBox>
                ))}
            </TableBoxContainer>
        </TableContainer>
    );
};

export default TimetablePage;