import { TSquare } from "../types";
import { Cross } from "../assets/icons/cross";
import { Round } from "../assets/icons/round";

export const Square: React.FC<{
  square: TSquare;
  onChooseField: (fieldNumber: number) => void;
}> = ({ onChooseField, square }) => {
  return (
    <div
      className="bg-[#14BDAC] grid place-items-center w-full h-full"
      onClick={() => onChooseField(square.index)}
      data-testid={`square${square.index}`}
    >
      {square.action === " " ? (
        " "
      ) : square.action === "x" ? (
        <Cross width={90} height={90} className="text-[#666666]" />
      ) : (
        <Round width={90} height={90} className="text-[#ffffff]" />
      )}
    </div>
  );
};
