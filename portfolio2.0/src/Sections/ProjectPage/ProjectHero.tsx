import React from "react";
import GAN from "../../images/GAN.png";
import { CodeButton } from "./../../Components/CodeButton";

import { ProjectInterface } from "./../../Components/ProjectList";

export const ProjectHero: React.FC<ProjectInterface> = ({
  title,
  description,
  code,
  image,
  toolNames,
  subject,
}) => {
  return (
    <div className="hero">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="project-page-container">
        <div className="project-inner">
          <h4>{subject}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="project-page-tools">{toolNames}</p>
          <br />
          {code && <CodeButton link={code} />}
        </div>
      </div>
    </div>
  );
};
