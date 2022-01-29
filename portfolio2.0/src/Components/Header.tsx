import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const springValues = [
    { y: 3 },
    {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  ];

  return (
    <div className="header">
      <div className="flex-row-left">
        <motion.div whileHover={springValues[0]} transition={springValues[1]}>
          <Link to="about">
            <h4>About</h4>
          </Link>
        </motion.div>

        <motion.div whileHover={springValues[0]} transition={springValues[1]}>
          <Link to="projects">
            <h4>Projects</h4>
          </Link>
        </motion.div>
        <motion.div whileHover={springValues[0]} transition={springValues[1]}>
          <Link to="about">
            <h4>Contact</h4>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
