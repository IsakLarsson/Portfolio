import styled from "styled-components";

export const Container = styled.div`
  background-color: royalblue;
  padding: 50px;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 860px;
`;

export const FlexGrid = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
`;

export const Col = styled.div`
  flex: 1;
  background-color: black;
  color: #ffffff;
  height: 100px;
`;

export const Heading = styled.h1`
  color: #00c896;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1p;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 500px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  overflow: hidden;
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;
`;
