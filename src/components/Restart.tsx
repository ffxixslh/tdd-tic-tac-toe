export const Restart: React.FC<{
  onRestart: () => void;
}> = ({ onRestart }) => {
  return (
    <div
      className="font-bold text-[18px] place-self-center text-[#14BDAC]"
      onClick={onRestart}
    >
      Restart game
    </div>
  );
};
