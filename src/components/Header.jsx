import React from "react";
import styled from "styled-components";

const HeaderHambMenu = styled.div`
  width: 1440px;
  height: 64px;
`;
const HeaderWrapper = styled.div``;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderHambMenu></HeaderHambMenu>
      <hr />
    </HeaderWrapper>
  );
};

export default Header;
