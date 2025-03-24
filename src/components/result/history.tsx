import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useStore } from "jotai";

export const History = ({ args }: { args: string }) => {
  const store = useStore();
  const commandHistory = store.get(commandHistoryAtom);

  if (args.trim().length) {
    return <p>Usage: history</p>;
  };

  return <>
    {commandHistory.filter(cmd => cmd.length).map((cmd, idx) => (
      <p key={idx} className="text-warning">{cmd}</p>
    ))}
  </>;
};
