import React from "react";
import "../Sections/Projects/Projects.css";
import Paradox from "../images/Paradox.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  imageOrientation: "left" | "right";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageOrientation,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={Paradox} alt="Paradox logo" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Read more</p>
      </div>
    </div>
  );
};
