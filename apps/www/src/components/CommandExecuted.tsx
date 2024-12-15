import React from "react";
import { commandHistory } from "@repo/store";
import { useAtomValue } from "jotai";
import { Prompt } from "./Prompt";
import { Command } from "./Command";
import { Output } from "./Output";
import { DELIMITER } from "@repo/constants";
import { formatInputToCommand } from "~/lib/formatInputToCommand";

export const CommandExecuted = () => {
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
