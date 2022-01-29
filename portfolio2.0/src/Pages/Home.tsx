import React from "react";
import Hero from "../Sections/Hero/Hero";
import { About } from "../Sections/About/About";
import { Projects } from "../Sections/Projects/Projects";
import Waves from "../images/Waves.png";
import { Experience } from "./../Sections/Experience/Experience";
import { Header } from "./../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-box">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
      <img
        style={{ width: "100%", marginBottom: "-10px" }} //weird margin-bottom fix
        src={Waves}
        alt="Waves"
        className="waves"
      />
    </>
  );
}
