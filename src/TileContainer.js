import { useEffect, useState } from "react";
import appclass from "./App.module.css";

export const TileContainer = ({ guess, tileClass }) => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    const newBody = guess.map((word, i) => (
      <div key={`guess-${i}`} id={`guess-${i}`}>
        {word.map((letter, j) => {
          let divClass = `${appclass["tile"]} ${appclass[tileClass[i][j]]}`;
          divClass = tileClass[i][j] === "green-overlay" ? divClass + ` ${appclass["flip"]}` : divClass;
          return (
            <div
              key={`guess-${i}-tile-${j}`}
              id={`guess-${i}-tile-${j}`}
              className={divClass}
            >
              {letter}
            </div>
          );
        })}
      </div>
    ));
    setBody(newBody);
  }, [guess, tileClass]);

  return <div className={appclass["tile-container"]}>{body}</div>;
};
