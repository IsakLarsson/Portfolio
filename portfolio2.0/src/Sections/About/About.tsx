import React from "react";
import "./About.css";
import Selfie from "../../images/Selfie.png";
import { tools } from "./Tools";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="selfie">
          <img src={Selfie} alt="me irl" />
        </div>
        <div className="about-content">
          <h2>About me</h2>
          <p>
            I am currently a fifth year student at the MSc Interaction
            technology and design programme at Umeå University, Sweden.
            Cornerstones of the programme are UX-design, interactivity and
            accessability but also software development in a wide range of
            different technologies. My main interests are both front-end and
            back-end development as well as AI and UX-design. I'm always curious
            towards new technology and I'm always ready to learn new things.
          </p>
          <h3>Tools</h3>
          <div className="tools-container">
            {tools.map((tool, index) => (
              <div className="tool" key={`tool:${index}`}>
                <img src={tool.icon} alt="icon missing" />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
