import anime from "animejs/lib/anime.js";
import { Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import About from "../sections/About";

const projects = [
  "This would be my first project info board",
  "This is my second project hehe",
  "as well as this one",
];

export default function Home() {
  const hasWindow = typeof window !== "undefined";

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(true);
  const [count, setCount] = useState(-1);
  function getWindowHeight() {
    const height = hasWindow ? window.innerHeight : null;
    return height;
  }

  let tiles = Array.from(Array(rows * columns));

  const colors = ["rgb(255, 183, 3)", "rgb(251, 133, 0)"];
  const handleClick = (event, index) => {
    setCount((prevCount) => prevCount + 1);
    setToggled(!toggled);
    anime({
      targets: "span",
      // opacity: toggled ? 0 : 1,
      backgroundColor: [colors[count % (colors.length - 1)]],
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: tiles.length / 2,
      }),
    });
  };

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setColumns(Math.floor(document.body.clientWidth / 50));
        setRows(Math.floor(getWindowHeight() / 50));
        document
          .getElementById(styles.tiles)
          .style.setProperty("--columns", columns);
        document.getElementById(styles.tiles).style.setProperty("--rows", rows);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  const helloPhrase = ["Hello", "I'm Isak "];

  return (
    <main>
      <div className={styles.main}>
        <Center className={styles.front}>
          <Flex direction={"column"} alignItems={"center"}>
            {helloPhrase.map((word, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  delay: i * 2,
                }}
                style={{ fontSize: "5rem", margin: "0.8rem 0" }}
              >
                {word}
              </motion.h1>
            ))}

            <h1
              style={{ fontSize: "3rem", color: "black", textAlign: "center" }}
            >
              Welcome to my portfolio!
            </h1>
          </Flex>
        </Center>
        <div id={styles.tiles}>
          {tiles.map((tile, index) => (
            <span
              onClick={(event) => handleClick(event, index)}
              className={styles.tile}
              key={`tile${index}`}
            ></span>
          ))}
        </div>
      </div>
      {!toggled && <About />}
    </main>
  );
}
