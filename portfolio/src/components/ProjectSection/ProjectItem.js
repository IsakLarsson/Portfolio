import React, { useEffect, useState } from "react";

import "../ProjectSection/Projects.css";
/**
 * Hooks for getting window dimensions
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
/**
 * Hooks for getting window dimensions
 */
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

/**
 * Project item to be displayed individually on a page
 * @param {Header, description image for project and image palcement -left or right} props
 */
const ProjectItem = (props) => {
  const { width } = useWindowDimensions();

  if (props.imagePlacement === "LEFT") {
    return (
      <div data-aos="fade-up" className="projectContainer">
        <div className="projectImageWrapper">
          <img src={props.img} alt="oops, something went wrong" />
        </div>
        <div className="projectDescriptionContainer">
          <h1>{props.header}</h1>
          <p className="descriptionText">{props.description}</p>
          <div className="resources">
            {props.resources.map((resource) => (
              <p>{resource}</p>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (width < 860) {
    return (
      <div data-aos="fade-up" className="projectContainer">
        <div className="projectImageWrapper">
          <img src={props.img} alt="oops, something went wrong" />
        </div>
        <div className="projectDescriptionContainer">
          <h1>{props.header}</h1>
          <p className="descriptionText">{props.description}</p>
          <div className="resources">
            {props.resources.map((resource) => (
              <p>{resource}</p>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div data-aos="fade-up" className="projectContainer">
        <div className="projectDescriptionContainer">
          <h1>{props.header}</h1>
          <p className="descriptionText">{props.description}</p>
          <div className="resources">
            {props.resources.map((resource) => (
              <p>{resource}</p>
            ))}
          </div>
        </div>
        <div className="projectImageWrapper">
          <img src={props.img} alt="oops, something went wrong" />
        </div>
      </div>
    );
  }
};

export default ProjectItem;
