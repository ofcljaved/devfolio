import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useAtomValue } from "jotai";

export const History = ({ args }: { args: string }) => {
  const commandHistory = useAtomValue(commandHistoryAtom);

  if (args.trim().length) {
    return <p>Usage: history</p>;
  };

  return <>
    {commandHistory.filter(cmd => cmd.length).map((cmd, idx) => (
      <p key={idx} className="text-warning">{cmd}</p>
    ))}
  </>;
};
