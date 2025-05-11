import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
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

const Header = () => {
  return (
    <HeaderContainer>
      <LogoutButton>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;