import React, { useState, useEffect } from "react";
import { HeroSection } from "../components/HeroSection";
import InfoSection from "../components/InfoSection/index2";
import Navbar from "../components/Navbar";
import About from "../components/InfoSection/index.js";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <About />
      {/* <InfoSection /> */}
    </div>
  );
};

export default Home;
