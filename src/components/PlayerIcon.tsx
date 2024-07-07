import { TPlayer } from "../types";
import { Cross } from "../assets/icons/cross";
import { Round } from "../assets/icons/round";

export const PlayerIcon: React.FC<{
  player: TPlayer;
}> = ({ player }) => {
  if (player === " ") {
    return null;
  }

  return (
    <span className="text-white">
      {player === "x" ? (
        <Cross width={12} height={12} />
      ) : (
        <Round width={12} height={12} />
      )}
    </span>
  );
};
