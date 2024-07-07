import { TPlayer } from "../types";
import { Cross } from "../assets/icons/cross";
import { Round } from "../assets/icons/round";

export const Info: React.FC<{
  onSelectPlayer: (player?: Exclude<TPlayer, " ">) => void;
  player: TPlayer;
}> = ({ onSelectPlayer, player }) => {
  return (
    <div
      data-testid="info"
      className="mt-[30px] gap-[20px] w-[620px] h-[60px] mx-auto flex"
    >
      <div
        className="relative flex justify-between items-center px-[10px] w-[300px] h-[60px] border-[#666666] border rounded-md font-semibold text-[36px] overflow-hidden"
        onClick={() => onSelectPlayer("x")}
      >
        <div>
          <Cross width={48} height={48} />
        </div>
        <div className="text-[#999999]">-</div>
        {player === "x" && (
          <div className="absolute w-full left-0 bottom-0 border-b-[6px] border-[#14BDAC]"></div>
        )}
      </div>
      <div
        className="relative flex justify-between items-center px-[10px] w-[300px] h-[60px] border-[#666666] border rounded-md font-semibold text-[36px] overflow-hidden"
        onClick={() => onSelectPlayer("o")}
      >
        <div>
          <Round width={48} height={48} />
        </div>
        <div className="text-[#999999]">-</div>
        {player === "o" && (
          <div className="absolute w-full left-0 bottom-0 border-b-[6px] border-[#14BDAC]"></div>
        )}
      </div>
    </div>
  );
};
