import React from "react";
import styled from "styled-components";
import Font from "../fonts/Suisse Int'l UltraLight.otf";

const WrapperOfBody = styled.div``;
const WrapperOfBodyOfH = styled.div`
  padding-top: 39.24px;
  padding-left: 20px;
  width: 1080px;
  height: 294.96px;
`;
const HeaderOfBody = styled.h1``;
const ParagraphOfBody = styled.p``;
const WrapperOfBodyOfP = styled.div`
  width: 501px;
  height: 113.07px;
  padding-left: 20px;
`;
export {
  WrapperOfBody,
  WrapperOfBodyOfH,
  HeaderOfBody,
  ParagraphOfBody,
  WrapperOfBodyOfP,
};

const Body = () => {
  return (
    <WrapperOfBody>
      <WrapperOfBodyOfH>
        <HeaderOfBody>
          Лучше — сайт, который поможет приобрести и не бросить полезные
          привычки. Бесплатные видеотренировки, аудиомедитации, программы и
          статьи для нормализации сна, питания и развития осознанности.
        </HeaderOfBody>
      </WrapperOfBodyOfH>
      <WrapperOfBodyOfP>
        <ParagraphOfBody>
          Наши эксперты подготовили 16 курсов и более 70 статей в 6 категориях:
          Фитнес, Питание, Осознанность, Сон, Отдых, Психология и Образ жизни.
          Занимайтесь в комфортном темпе.
        </ParagraphOfBody>
      </WrapperOfBodyOfP>
    </WrapperOfBody>
  );
};

export default Body;
