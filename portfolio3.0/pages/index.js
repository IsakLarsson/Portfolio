import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import anime from "animejs/lib/anime.es.js";

export default function Home() {
  const hasWindow = typeof window !== "undefined";

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  function getWindowHeight() {
    const height = hasWindow ? window.innerHeight : null;
    return height;
  }

  const colors = ["rgb(229, 57, 54)", "rgb(34, 230,84", "rgb(69,69,69"];
  let count = -1;
  const handleClick = (event, index) => {
    count = count + 1;
    anime({
      targets: "span",
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
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  });

  return (
    <div id={styles.tiles}>
      {tiles.map((tile, index) => (
        <span
          onClick={(event) => handleClick(event, index)}
          className={styles.tile}
          key={index}
        ></span>
      ))}
    </div>
  );
}
