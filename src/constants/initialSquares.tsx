import { TSquare } from "../types";

export const initialSquares: TSquare[] = Array(9)
  .fill(null)
  .map((_, index) => ({
    index,
    action: " ",
  }));
