import React from "react";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/InfoSection/index.js";
import Projects from "../components/ProjectSection/index.js";
import Contact from "../components/ContactSection/index.js";
import Footer from "../components/FooterSection";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
