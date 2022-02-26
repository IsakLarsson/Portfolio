import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const springValues = [
    { y: -3 },
    {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        delay: 4,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="header">
      <div className="flex-row-left">
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item} key="about">
            <motion.div
              whileHover={springValues[0]}
              transition={springValues[1]}
            >
              <Link to="about">
                <h4>About</h4>
              </Link>
            </motion.div>
          </motion.li>
          <motion.li variants={item} key="projects">
            <motion.div
              whileHover={springValues[0]}
              transition={springValues[1]}
            >
              <Link to="GANArt">
                <h4>Projects</h4>
              </Link>
            </motion.div>
          </motion.li>
          <motion.li variants={item} key="contact">
            <motion.div
              whileHover={springValues[0]}
              transition={springValues[1]}
            >
              <Link to="about">
                <h4>Contact</h4>
              </Link>
            </motion.div>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};
