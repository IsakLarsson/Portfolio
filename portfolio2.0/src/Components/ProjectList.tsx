import React from "react";
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

interface ProjectListProps {}

export const ProjectList: React.FC<ProjectListProps> = ({}) => {
  interface Project {
    title: string;
    description: string;
    image: string;
    tools: string[];
  }
  const projectList: Project[] = [
    {
      title: "GAN Art",
      description:
        "A deeplearning project where I researched the possibility of training a neural network to generate artworks on its own. ",
      image: GAN,
      tools: [Python, Tensorflow],
    },
    {
      title: "360° Feedback",
      description:
        "For this project, me and 4 friends teamed up to create an employee evaluation system for international game dev studio Paradox Arctic resulting in hours of time saved per employee.",
      image: Paradox,
      tools: [Mongo, Express, ReactIcon, Node],
    },
    {
      title: "Freshman app",
      description:
        "An app to help the newcomers at the Interaction & Design programme keep track of the events during the intro period.",
      image: Freshman,
      tools: [ReactIcon],
    },
  ];

  return (
    <>
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};
