import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useAtomValue } from "jotai";
import CommandItem from "./commandItem";

const CommandExecuted = () => {
  const command = useAtomValue(commandHistoryAtom);
  return command.map((cmd, idx) => (
    <CommandItem key={idx} cmd={cmd} />
  ));
};

export default CommandExecuted;
