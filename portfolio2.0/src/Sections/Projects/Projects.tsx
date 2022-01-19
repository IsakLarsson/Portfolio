import React from "react";
import "./Projects.css";
import { ProjectCard } from "./../../Components/ProjectCard";
interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <section className="project-section">
      <h2>These are some recent projects</h2>
      <div className="project-container">
        <ProjectCard
          title="Freshman app"
          description="For this project, me and 4 friends teamed up to create an employee evaluation system for international game dev studio Paradox Arctic. The goal of our system was to increase the simplicity of evaluation and the efficiency of the data compilation, resulting in hours of time saved per employee. The system was prototyped through several testing stages and finally developed from scratch using the MERN stack. It was a pretty big project and it provided a great learning opportunity and a great deal of experience   "
          imageOrientation="left"
        />
      </div>
    </section>
  );
};
