import React from 'react'
import Lion from "../../assets/Lion.svg"
import styled from "styled-components";


export const Logo = styled.img`
    position: absolute;
    top: 10px;
    left: 20px;
    width: 155px;
    height: 79px;
    align-self: flex-start;
   
`;

const LionLogo = () => {
  return (
    <div>
      <Logo src={Lion} alt='Lion'></Logo>
    </div>
  )
}

export default LionLogo
