import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  z-index: 1;

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%);
    z-index: 2;
  } */
`;

export const HeroBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ImageBG = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #1f1f1f;
`;

// export const ImageOverlayRadial = styled.div`
//   background: rgb(26, 26, 26);
//   background: -moz-radial-gradient(
//     circle,
//     rgba(26, 26, 26, 0.938813025210084) 0%,
//     rgba(23, 23, 23, 0.9164040616246498) 10%,
//     rgba(0, 0, 0, 0.4290091036414566) 100%
//   );
//   background: -webkit-radial-gradient(
//     circle,
//     rgba(26, 26, 26, 0.938813025210084) 0%,
//     rgba(23, 23, 23, 0.9164040616246498) 10%,
//     rgba(0, 0, 0, 0.4290091036414566) 100%
//   );
//   background: radial-gradient(
//     circle,
//     rgba(26, 26, 26, 0.938813025210084) 0%,
//     rgba(23, 23, 23, 0.9164040616246498) 10%,
//     rgba(0, 0, 0, 0.4290091036414566) 100%
//   );
//   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1a1a",endColorstr="#000000",GradientType=1);

//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
// `;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

export const HeroH1 = styled.h1`
  color: #c8fcea;
  font-size: 110px;
  text-align: center;
  font-weight: 200;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  max-width: 600px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#ffffff";
`;
