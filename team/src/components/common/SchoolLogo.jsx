import React from "react";
import styled from "styled-components";
import School from "../../assets/School.png";

const Logo = styled.img`
  width: 487px;
  height: 147px;
  margin-bottom: 50px;
`;

const SchoolLogo = () => {
  return <Logo src={School} alt="School Logo" />;
};

export default SchoolLogo;