import anime from "animejs/lib/anime.js";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

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

  const colors = [
    "rgb(33, 158, 188)",
    "rgb(2, 48, 7)",
    "rgb(255, 183, 3)",
    "rgb(251, 133, 0)",
  ];
  const handleClick = (event, index) => {
    setCount((prevCount) => prevCount + 1);
    setToggled(!toggled);
    anime({
      targets: "span",
      // opacity: toggled ? 0 : 1,
      backgroundColor: [colors[count % (colors.length - 1)]],
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  let tiles = Array.from(Array(rows * columns));
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

  return (
    <div className="wrapper">
      <Center className={styles.behind}>
        <h1>Hi Im Isak, frontend Master</h1>
      </Center>
      <div id={styles.tiles}>
        {tiles.map((tile, index) => (
          <span
            onClick={(event) => handleClick(event, index)}
            className={styles.tile}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}
