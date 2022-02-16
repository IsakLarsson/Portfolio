import React, { useContext } from "react";
import Waves from "../images/Waves.png";
import { ProjectHero } from "../Sections/ProjectPage/ProjectHero";
import "../Sections/ProjectPage/ProjectHero.css";
import { ProjectContext } from "./../App";

interface ProjectPageProps {}

export const ProjectPage: React.FC<ProjectPageProps> = ({}) => {
  const projectList = useContext(ProjectContext);

  return (
    <>
      <ProjectHero
        title={projectList[0].title}
        description={projectList[0].description}
        subject={projectList[0].subject}
        toolNames={projectList[0].toolNames}
        code={projectList[0].code}
        image={projectList[0].image}
        tools={projectList[0].tools}
      />
      <img
        style={{ width: "100%", marginBottom: "-10px" }} //weird margin-bottom fix
        src={Waves}
        alt="Waves"
        className="waves"
      />
    </>
  );
};
