import React from "react";
import Hero from "../Sections/Hero/Hero";
import { About } from "../Sections/About/About";
import { Projects } from "../Sections/Projects/Projects";
import Waves from "../images/Waves.png";

export default function Home() {
  return (
    <>
      <div className="main-box">
        <Hero />
        <About />
        <Projects />
      </div>
      <img
        style={{ width: "100%" }}
        src={Waves}
        alt="Waves"
        className="waves"
      />
    </>
  );
}
