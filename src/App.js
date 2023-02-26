import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Body from "./components/Body";
import Article from "./components/Article";
const WrapperOfAll = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <WrapperOfAll>
      <Header></Header>
      <Body></Body>
      <Article></Article>
    </WrapperOfAll>
  );
}

export default App;
