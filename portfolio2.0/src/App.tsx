import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { ProjectPage } from "./Pages/ProjectPage";
import { ProjectInterface } from "./Components/ProjectList";
import Express from "./icons/smallicons/Express.svg";
import Mongo from "./icons/smallicons/Mongo.svg";
import Node from "./icons/smallicons/Node.svg";
import Python from "./icons/smallicons/Python.svg";
import ReactIcon from "./icons/smallicons/React.svg";
import Tensorflow from "./icons/smallicons/Tensorflow.svg";
import Kvitter from "./images/kvitter-square.png";
import Figma from "./icons/smallicons/Figma-logo.svg";
import GAN from "./images/GAN.png";
import Paradox from "./images/Paradox.jpg";
import Freshman from "./images/mottagning.png";

const projectList: ProjectInterface[] = [
  {
    title: "GAN Art",
    description:
      "A deeplearning project where I researched the possibility of training a neural network to generate artworks on its own. ",
    image: GAN,
    tools: [Python, Tensorflow],
    toolNames: "Python, Tensorflow",
    code: "https://www.kaggle.com/isaklarsson/gan-art-generator",
    subject: "Deep learning",
  },
  {
    title: "360° Feedback",
    description:
      "For this project, me and 4 friends teamed up to create an employee evaluation system for international game dev studio Paradox Arctic which would result in hours of time saved per employee.",
    image: Paradox,
    tools: [Mongo, Express, ReactIcon, Node],
    toolNames: "MongoDB, Express, React, Node",
  },
  {
    title: "Kvitter",
    description:
      "A concept developed during the course Hot Team at Umeå Institude of Design. Our idea was to create a concept where kids could learn about birds while simultaneously benefiting the bird-life in Umeå",
    image: Kvitter,
    tools: [Figma],
    toolNames: "Figma, Adobe suite",
  },
  {
    title: "Freshman app",
    description:
      "An app to help the newcomers at the Interaction & Design programme keep track of the events during the intro period.",
    image: Freshman,
    tools: [ReactIcon],
    toolNames: "React",
  },
];

export const ProjectContext = React.createContext(projectList);

function App() {
  return (
    <div className="App">
      <ProjectContext.Provider value={projectList}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<ProjectPage />} />
        </Routes>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
