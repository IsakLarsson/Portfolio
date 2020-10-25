import React, { useState } from "react";
import Background from "../../images/BGJPEG.jpg";
import Arrowdown from "../../images/Arrow down.svg";
import {
  HeroContainer,
  HeroBG,
  ImageBG,
  ImageOverlayRadial,
  ImageOverlay,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { Button, Arrow } from "../ButtonElements";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer className="heroContainer">
      <HeroBG>
        <ImageBG src={Background} />
        {/* <ImageOverlayRadial /> */}
      </HeroBG>

      <HeroContent className="heroContent">
        <HeroH1>ISAK LARSSON</HeroH1>
        <HeroP>
          An aspiring developer who likes to engage in both frontend and backend
          development,{" "}
        </HeroP>
        <HeroP>allow me to </HeroP>
        <HeroBtnWrapper id="buttonwrapper">
          <Button to="about" primary={true}>
            Introduce myself!{" "}
          </Button>
          <Arrow onMouseEnter={hover} onMouseLeave={hover}>
            <img src={Arrowdown} />
          </Arrow>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
