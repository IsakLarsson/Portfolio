import React, { useEffect, useState } from "react";
import "../ProjectSection/Projects.css";

import ProjectItem from "./ProjectItem";
// import { AlumniWeb } from "./projectdata";
import * as projectData from "../ProjectSection/projectdata.json";

export const Projects = () => {
  const alumniImg = require("../../images/alumnwebb.png"); //maybe ugly but the only thing that wanted to work and im tired rn so yea
  const portfolioImg = require("../../images/reactlogo.svg");
  const antitdImg = require("../../images/antitd.png");
  const oldportfolioImg = require("../../images/oldportfolio.png");
  return (
    <section className="projectSection">
      <div data-aos="fade-up" className="projectsHeader">
        <h1>These are some of my projects</h1>
      </div>
      <div className="projectList">
        <ProjectItem
          imagePlacement="LEFT"
          header={projectData.Alumniweb.heading}
          description={projectData.Alumniweb.desc}
          resources={projectData.Alumniweb.resources}
          img={alumniImg}
        />
        <ProjectItem
          imagePlacement="RIGHT"
          header={projectData.Portfolio.heading}
          description={projectData.Portfolio.desc}
          resources={projectData.Portfolio.resources}
          img={portfolioImg}
        />
        <ProjectItem
          imagePlacement="LEFT"
          header={projectData.AntiTD.heading}
          description={projectData.AntiTD.desc}
          resources={projectData.AntiTD.resources}
          img={antitdImg}
        />
        <ProjectItem
          imagePlacement="RIGHT"
          header={projectData.oldPortfolio.heading}
          description={projectData.oldPortfolio.desc}
          resources={projectData.oldPortfolio.resources}
          img={oldportfolioImg}
        />
      </div>
    </section>
  );
};

export default Projects;
