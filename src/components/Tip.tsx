import { TPlayer } from "../types";
import { PlayerIcon } from "./PlayerIcon";

export const Tip: React.FC<{
  player: TPlayer;
  winner: TPlayer;
}> = ({ player, winner }) => {
  return (
    <div className="flex justify-center items-center gap-[4px] align-middle my-[10px] overflow-hidden text-[12px] text-[#666666]">
      {winner !== " " ? (
        <>
          <PlayerIcon player={winner} />
          Win
        </>
      ) : player !== " " ? (
        <>
          <PlayerIcon player={player} />
          Turn
        </>
      ) : (
        " Start game or select player "
      )}
    </div>
  );
};
