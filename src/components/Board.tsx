import { TPlayer, TSquare } from "../types";
import { Square } from "./Square";

export const Board: React.FC<{
  squares: TSquare[];
  player: TPlayer;
  winner: TPlayer;
  way: readonly [number, number, number] | null;
  onSelectPlayer: (player?: Exclude<TPlayer, " ">) => void;
  onChooseField: (nextSquare: TSquare[]) => void;
}> = ({ squares, player, winner, onSelectPlayer, onChooseField }) => {
  const handleChooseField = (fieldNumber: number) => {
    if (
      player === " " ||
      squares[fieldNumber].action !== " " ||
      winner !== " "
    ) {
      return;
    }

    const tempSquares = squares.slice();
    const nextSquares: TSquare[] = [
      ...tempSquares.slice(0, fieldNumber),
      {
        index: fieldNumber,
        action: player,
      },
      ...tempSquares.slice(fieldNumber + 1),
    ];

    onChooseField(nextSquares);
  };

  return (
    <div
      className="container h-[400px] flex place-items-center bg-[#14BDAC]"
      onClick={() => onSelectPlayer("x")}
    >
      <div className="bg-[#22222221] mx-auto w-[320px] h-[320px] self-center grid grid-cols-3 grid-rows-3 gap-[6px]">
        {squares.map((square) => (
          <Square
            key={square.index}
            square={square}
            onChooseField={handleChooseField}
          />
        ))}
      </div>
    </div>
  );
};
