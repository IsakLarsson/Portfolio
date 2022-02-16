import React, { useContext } from "react";
import GAN from "../images/GAN.png";
import Paradox from "../images/Paradox.jpg";
import Freshman from "../images/mottagning.png";
import { ProjectCard } from "./ProjectCard";
import Express from "../icons/smallicons/Express.svg";
import Mongo from "../icons/smallicons/Mongo.svg";
import Node from "../icons/smallicons/Node.svg";
import Python from "../icons/smallicons/Python.svg";
import ReactIcon from "../icons/smallicons/React.svg";
import Tensorflow from "../icons/smallicons/Tensorflow.svg";
import Kvitter from "../images/kvitter-square.png";
import Figma from "../icons/smallicons/Figma-logo.svg";
import { ProjectContext } from "./../App";

interface ProjectListProps {}

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tools: string[];
  toolNames: string;
  code?: string;
  subject?: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({}) => {
  const projectList = useContext(ProjectContext);

  return (
    <>
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};
