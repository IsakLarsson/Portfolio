import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column2,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <div>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <SubTitle>Subtitle</SubTitle>
                <BtnWrap></BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap></ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
