import React from "react";
import { ExpCard } from "./ExpCard";
import Coeo from "../images/Coeo.png";
import Uminova from "../images/uminova.png";
import Telia from "../images/telia.png";
import Umu from "../images/umu.png";

interface ExpListProps {
  type: "work" | "education" | "other";
}

export const ExpList: React.FC<ExpListProps> = ({ type }) => {
  interface ExpCardProps {
    position: string;
    company: string;
    image: string;
    period: string;
  }

  const expList: ExpCardProps[] = [
    {
      position: "Developer",
      company: "Coeo",
      image: Coeo,
      period: "June 2021- December 2021",
    },
    {
      position: "Developer",
      company: "Metrium",
      image: Uminova,
      period: "February 2021- June 2021",
    },
    {
      position: "Operations Engineer",
      company: "Telia",
      image: Telia,
      period: "June - August 2019 & 2020",
    },
  ];

  const educationList: ExpCardProps[] = [
    {
      position: "Master of Science, Interaction & design",
      company: "Umeå University",
      image: Umu,
      period: "August 2017- Present",
    },
  ];

  const otherList: ExpCardProps[] = [
    {
      position: "Buddy programme",
      company: "Umeå University",
      image: Umu,
      period: "August 2021 - June 2022 ",
    },
  ];

  return (
    <>
      {type === "work" &&
        expList.map((exp, index) => <ExpCard key={`exp:${index}`} {...exp} />)}
      {type === "education" &&
        educationList.map((exp, index) => (
          <ExpCard key={`edu:${index}`} {...exp} />
        ))}
      {type === "other" &&
        otherList.map((exp, index) => (
          <ExpCard key={`other:${index}`} {...exp} />
        ))}
    </>
  );
};
