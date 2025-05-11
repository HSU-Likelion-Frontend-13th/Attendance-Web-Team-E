import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #777c89;
  font-size: 16px;
  cursor: pointer;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoutButton>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;