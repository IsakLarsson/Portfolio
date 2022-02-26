import React from "react";

interface ProjectTextBlockProps {
  title: string;
  description: string;
  image?: string;
}

export const ProjectTextBlock: React.FC<ProjectTextBlockProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="project-text-block">
      <h3>{title}</h3> <p>{description}</p>
      {image ? <img src={image} alt="oopsie" /> : <></>}
    </div>
  );
};
