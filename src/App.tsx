import { useState } from "react";

import { Welcome } from "./components/Welcome";
import { Restart } from "./components/Restart";
import { Tip } from "./components/Tip";
import { Info } from "./components/Info";
import { Board } from "./components/Board";

import { TGameStatus, TPlayer, TSquare } from "./types";
import { calculateWinner } from "./utils/calculateWinner";
import { initialSquares } from "./constants/initialSquares";

import "./App.css";

const App = () => {
  const [gameStatus, setGameStatus] = useState<TGameStatus>("beforeGame");
  const [history, setHistory] = useState<TSquare[][]>([initialSquares]);
  const [currentStep, setCurrentStep] = useState(0);
  const [player, setPlayer] = useState<TPlayer>(" ");

  const { winner, way } = calculateWinner(history[currentStep]);

  const handleSelectPlayer = (selectPlayer?: Exclude<TPlayer, " ">) => {
    // Already have a player
    if (player !== " ") {
      return;
    }

    // Two ways to start:
    // 1. select the player 'x' | 'o'
    // 2. click the field with the default player 'x'
    const nextPlayer = selectPlayer ?? "x";
    setPlayer(nextPlayer);
    return;
  };

  const handleChooseField = (nextSquares: TSquare[]) => {
    if (player === " " || gameStatus !== "gameing") {
      return;
    }

    const nextPlayer = player === "x" ? "o" : "x";
    setPlayer(nextPlayer);

    const nextHistory = [...history.slice(0, currentStep + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentStep(nextHistory.length - 1);
  };

  const handleRestart = () => {
    setHistory([initialSquares]);
    setCurrentStep(0);
    setPlayer(" ");
  };

  return (
    <div
      data-testid="app"
      id="app"
      className="container grid place-items-center"
    >
      <div
        className="w-[800px] h-[600px] border rounded-md border-[#666666] overflow-hidden"
        onClick={() => setGameStatus("gameing")}
      >
        {gameStatus === "beforeGame" ? (
          <Welcome />
        ) : (
          <div
            data-testid="playground"
            className="flex flex-1 flex-col justify-evenly w-full h-full"
          >
            <Info player={player} onSelectPlayer={handleSelectPlayer} />
            <Tip player={player} winner={winner} />
            <Board
              squares={history[currentStep]}
              player={player}
              winner={winner}
              way={way}
              onSelectPlayer={handleSelectPlayer}
              onChooseField={handleChooseField}
            />
            <Restart onRestart={handleRestart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
