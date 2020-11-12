import React from "react";
import "../ProjectSection/Projects.css";

import ProjectItem from "./ProjectItem";
// import { AlumniWeb } from "./projectdata";
import * as projectData from "../ProjectSection/projectdata.json";

export const Projects = () => {
  const alumniImg = require("../../images/alumnwebb.png"); //maybe ugly but the only thing that wanted to work and im tired rn so yea
  const portfolioImg = require("../../images/reactlogo.svg");
  const antitdImg = require("../../images/antitd.png");
  const mottagningImg = require("../../images/mottagning.png");
  const paradoxImg = require("../../images/Paradox.jpg");

  return (
    <section className="projectSection" id="ProjectsPage">
      <div data-aos="fade-up" className="projectsHeader">
        <h1>These are some of my projects</h1>
      </div>
      <div className="projectList">
        <ProjectItem
          imagePlacement="LEFT"
          header={projectData.Paradox.heading}
          description={projectData.Paradox.desc}
          resources={projectData.Paradox.resources}
          img={paradoxImg}
        />
        <ProjectItem
          imagePlacement="RIGHT"
          header={projectData.mottagning.heading}
          description={projectData.mottagning.desc}
          resources={projectData.mottagning.resources}
          img={mottagningImg}
        />

        <ProjectItem
          imagePlacement="LEFT"
          header={projectData.Portfolio.heading}
          description={projectData.Portfolio.desc}
          resources={projectData.Portfolio.resources}
          img={portfolioImg}
        />
        <ProjectItem
          imagePlacement="RIGHT"
          header={projectData.AntiTD.heading}
          description={projectData.AntiTD.desc}
          resources={projectData.AntiTD.resources}
          img={antitdImg}
        />
        <ProjectItem
          imagePlacement="LEFT"
          header={projectData.Alumniweb.heading}
          description={projectData.Alumniweb.desc}
          resources={projectData.Alumniweb.resources}
          img={alumniImg}
        />
      </div>
    </section>
  );
};

export default Projects;
