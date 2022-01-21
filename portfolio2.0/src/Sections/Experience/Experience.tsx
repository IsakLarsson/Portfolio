import React from "react";
import "./Experience.css";
import { ExpList } from "../../Components/ExpList";

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <section className="exp-section">
      <div className="exp-container flex-column gutter">
        <h3>Experience</h3>
        <ExpList type="work" />
        <h3>Education</h3>
        <ExpList type="education" />
        <h3>Other</h3>
        <ExpList type="other" />
      </div>
    </section>
  );
};
