import React, { useContext } from "react";
import Waves from "../images/Waves.png";
import { ProjectHero } from "../Sections/ProjectPage/ProjectHero";
import "../Sections/ProjectPage/ProjectPage.css";
import { ProjectContext } from "../App";
import { ProjectTextBlock } from "../Components/ProjectTextBlock";

interface GANPageProps {}

export const GANPage: React.FC<GANPageProps> = ({}) => {
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

      <div className="project-page-container">
        <div className="project-inner">
          <ProjectTextBlock
            title="Background"
            description="I had read about the possibilities of an AI generating its own artwork, which was an idea that excited me.."
          />
          <ProjectTextBlock
            title="Description"
            description="The project was to create a GAN that could generate art based on art from other previous artworks."
          />
        </div>
      </div>

      <img
        style={{ width: "100%", marginBottom: "-10px" }} //weird margin-bottom fix
        src={Waves}
        alt="Waves"
        className="waves"
      />
    </>
  );
};
