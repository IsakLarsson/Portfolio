import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  /*   if (typeof window !== "undefined") {
    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);
  } */
  const hasWindow = typeof window !== "undefined";

  function getWindowHeight() {
    const height = hasWindow ? window.innerHeight : null;
    return height;
  }

  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

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

  /*   useEffect(() => {
    setColumns(Math.floor(document.body.clientWidth / 50));

    setRows(Math.floor(document.body.clientHeight / 50));
  }, []); */

  return (
    <div id={styles.tiles}>
      {tiles.map((tile, index) => (
        <div className={styles.tile} key={index}></div>
      ))}
    </div>
  );
}
