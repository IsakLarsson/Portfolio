import React from "react";
import "../Sections/Projects/Projects.css";
import { useSpring, animated } from "react-spring";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tools: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tools,
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
          <p>Read more</p>
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
