import { formatInputToCommand } from "@/lib/formatInputToCommand";
import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useAtomValue } from "jotai";
import React from "react";
import { Prompt } from "@/components/prompt";
import { Command } from "@/components/command";
import { DELIMITER } from "@/constants";
import { Output } from "./output";

const CommandExecuted = () => {
  const command = useAtomValue(commandHistoryAtom);
  return command.map((cmd, idx) => {
    const cmdObject = formatInputToCommand(cmd);
    return (
      <React.Fragment key={idx}>
        <div className="flex gap-2">
          <Prompt />
          <Command userCmd={cmd.split(DELIMITER)} />
        </div>
        <Output cmdObject={cmdObject} />
      </React.Fragment>
    );
  });
};

export default CommandExecuted;
