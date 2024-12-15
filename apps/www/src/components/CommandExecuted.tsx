import { commandHistory } from "@repo/store";
import { useAtomValue } from "jotai";
import { Prompt } from "./Prompt";
import { Command } from "./Command";
import { DELIMITER } from "@repo/constants";

export const CommandExecuted = () => {
  const command = useAtomValue(commandHistory);
  return command.map((cmd) => (
    <div className="flex gap-2">
      <Prompt />
      <Command userCmd={cmd.split(DELIMITER)} />
    </div>
  ));
};
