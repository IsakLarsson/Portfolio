import React, { useState, useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import InfoSection from "../components/InfoSection/index2";
import Navbar from "../components/Navbar";
import About from "../components/InfoSection/index.js";
import Projects from "../components/ProjectSection/index.js";
import Contact from "../components/ContactSection/index.js";
export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
