import { formatInputToCommand } from "@/lib/formatInputToCommand";
import { commandHistory } from "@/store/atoms/commandHistory";
import { useAtomValue } from "jotai";
import React from "react";
import { Prompt } from "@/components/prompt";
import { Command } from "@/components/command";
import { Output } from "./output";
import { DELIMITER } from "@/constants";

const CommandExecuted = () => {
  const command = useAtomValue(commandHistory);
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
