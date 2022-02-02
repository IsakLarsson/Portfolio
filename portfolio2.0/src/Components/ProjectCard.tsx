import React from "react";
import "../Sections/Projects/Projects.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import { ProjectInterface } from "./ProjectList"; //creates dependency but it doesnt matter here

export const ProjectCard: React.FC<ProjectInterface> = ({
  title,
  description,
  image,
  tools,
  code,
}) => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  return (
    <animated.div
      style={{ transform: y.interpolate((v) => `translateY(${v}%`) }}
      className="card"
      onMouseEnter={() => set({ y: 2 })}
      onMouseLeave={() => set({ y: 0 })}
    >
      <div className="card-image">
        <img src={image} alt="Card" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="bottom-div">
          <Link to="#" className="hvr-underline-from-left">
            Read more
          </Link>
          {code ? (
            <a href={code} target="_blank" className="hvr-underline-from-left">
              {" "}
              View code
            </a>
          ) : (
            <></>
          )}

          <div className="tools">
            {tools.map((tool, index) => (
              <img src={tool} alt="." key={`tool:${index}`} />
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};
