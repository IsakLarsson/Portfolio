import React from "react";
import Background from "../../images/BGJPEG.jpg";
import Arrowdown from "../../images/Arrow down.svg";
import {
  HeroContainer,
  HeroBG,
  ImageBG,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import { Link } from "react-scroll";
import "./Hero.css";

var ReactRotatingText = require("react-rotating-text");

export const HeroSection = () => {
  return (
    <section className="landingPage">
      <HeroContainer className="heroContainer" id="landingPage">
        <HeroBG>
          <ImageBG src={Background} />
        </HeroBG>

        <HeroContent className="heroContent">
          <HeroH1>ISAK LARSSON</HeroH1>
          <HeroP>
            Developer from Sweden who wants to make technology feel more human
            and likes to engage in{" "}
          </HeroP>
          <ReactRotatingText
            className="rotatingText"
            items={[
              "Front-end",
              "Back-end",
              "UI Design",
              "UX Design",
              "Machine Learning",
            ]}
          />

          {/* <HeroP>allow me to </HeroP> */}
          <div className="buttonWrapper">
            <Link to="AboutPage" smooth className="introduce">
              <h1 className="introduce">Get to know me!</h1>
            </Link>
            <div className="arrow">
              <Link to="AboutPage" smooth>
                <img src={Arrowdown} alt="Scroll down" />
              </Link>
            </div>
          </div>
        </HeroContent>
      </HeroContainer>
    </section>
  );
};
