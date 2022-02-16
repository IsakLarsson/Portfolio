import React from "react";
import "./Codebutton.css";

interface CodeButtonProps {
  link: string;
}

export const CodeButton: React.FC<CodeButtonProps> = ({}) => {
  return (
    <a
      target="_blank"
      href="https://www.kaggle.com/isaklarsson/gan-art-generator"
    >
      View Code
    </a>
  );
};
