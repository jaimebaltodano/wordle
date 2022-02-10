import { TileContainer } from "./TileContainer";
import appclass from "./App.module.css";
import KeyBoard from "./KeyBoard";
import { Message } from "./Message";
import { useState } from "react";
import { MAXROW, MAXCOL, EMPTYARRAY, CLASSARRAY } from "./Constants";
import Service from "./services";
import { useEffect } from "react/cjs/react.development";

export const GameContainer = () => {
  const [currX, setCurrX] = useState(0);
  const [currY, setCurrY] = useState(0);
  const [guess, setGuess] = useState(EMPTYARRAY);
  const [yxClass, setYXClass] = useState(CLASSARRAY);
  const [message, setMessage] = useState("");
  const [newWordle, setNewWordle] = useState(null);
  const [isBusy, setIsBusy] = useState(true);

  async function getWordle () {
    const w = await Service.wordle.list();
    setNewWordle(w[0].toUpperCase());
  }
  useEffect(() => {
    getWordle();
  }, []);

  useEffect(() => {
    console.log(newWordle)
    setIsBusy(false)
  },[newWordle]);

  const handleKeyClick = (element) => {
    if (element === "«") {
      handleDelete();
    } else if (element === "ENTER") {
      handleEnter();
    } else {
      handleAdd(element);
    }
  };

  const handleAdd = (element) => {
    let newX = currX;
    const newGuess = [...guess];
    if (newX < MAXCOL && currY < MAXROW) {
      newGuess[currY][newX] = element;
      ++newX;
    }
    setGuess(newGuess);
    setCurrX(() => newX);
  };

  const handleDelete = () => {
    let newX = currX;
    const newGuess = [...guess];
    if (newX > 0) {
      --newX;
      newGuess[currY][newX] = "";
    }
    setGuess(newGuess);
    setCurrX(() => newX);
  };

  const handleEnter = () => {
    if (currX >= MAXCOL) {
      const guessWord = guess[currY].join("");
      flipColor();
      if (guessWord === newWordle) {
        setMessage("Maginifique");
      } else {
        if (currY >= MAXROW) {
          setMessage("Game Over");
        }
        if (currY < MAXROW) {
          setCurrY(currY + 1);
        }
      }
      setCurrX(0);
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const flipColor = () => {
    const newClass = [...yxClass];
    guess[currY].forEach((letter, i) => {
      if (letter === newWordle[i]) {
        newClass[currY][i] = "green-overlay";
      } else if (newWordle.includes(letter)) {
        newClass[currY][i] = "yellow-overlay";
      } else {
        newClass[currY][i] = "grey-overlay";
      }
    });
    setYXClass(newClass);
  };

  return (!isBusy &&<div className={appclass["game-container"]}>
          <div className={appclass["title-container"]}>
            <h1>Hello wordle</h1>
          </div>
          <Message value={message} />
          <TileContainer guess={guess} tileClass={yxClass} />
          <KeyBoard onClick={handleKeyClick} />
        </div>
  )
};
