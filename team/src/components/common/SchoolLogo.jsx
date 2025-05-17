import React from "react";
import styled from "styled-components";
import School from "../../assets/School.png";

const Logo = styled.img`
  width: 487px;
  height: 147px;
  margin-bottom: 50px;
  background-color: transparent;
  position: relative;  // 'postion'을 'position'으로 수정
  z-index: -1;
`;

const SchoolLogo = () => {
  return <Logo src={School} alt="School Logo" />;
};

export default SchoolLogo;