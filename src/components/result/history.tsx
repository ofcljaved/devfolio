import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useAtomValue } from "jotai";

export const History = () => {
  const commandHistory = useAtomValue(commandHistoryAtom);

  return <>
    {commandHistory.filter(cmd => cmd.length).map((cmd, idx) => (
      <p key={idx} className="text-warning">{cmd}</p>
    ))}
  </>;
};
