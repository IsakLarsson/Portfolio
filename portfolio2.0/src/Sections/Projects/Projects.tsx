import React from "react";
import "./Projects.css";
import { ProjectList } from "./../../Components/ProjectList";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="project-section">
      <div style={{ textAlign: "center", padding: "0 2rem" }}>
        <h2>These are some of my projects</h2>
      </div>
      <div className="project-container">
        <ProjectList />
      </div>
    </section>
  );
};
