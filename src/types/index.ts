export type TGameStatus = "beforeGame" | "gameing" | "afterGame";

export type TPlayer = "x" | "o" | " ";

export type TSquare = {
  index: number;
  action: "x" | "o" | " ";
};
