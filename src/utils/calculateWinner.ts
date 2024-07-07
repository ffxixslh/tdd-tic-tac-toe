import { TPlayer, TSquare } from "../types";

type TCalculateWinnerFn = (squares: TSquare[]) => {
  winner: TPlayer;
  way: readonly [number, number, number] | null;
};

export const calculateWinner: TCalculateWinnerFn = (squares: TSquare[]) => {
  const flag = squares.filter((square) => square.action !== " ").length;

  if (flag < 5) {
    return {
      winner: " ",
      way: null,
    };
  }

  const winSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] as const;

  for (let index = 0; index < winSet.length; index++) {
    const [a, b, c] = winSet[index];

    if (
      squares[a].action !== " " &&
      squares[a].action === squares[b].action &&
      squares[a].action === squares[c].action
    ) {
      return {
        winner: squares[a].action,
        way: winSet[index],
      };
    }
  }

  return {
    winner: " ",
    way: null,
  };
};
