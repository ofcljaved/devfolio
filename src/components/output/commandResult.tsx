import React from "react";
import result from "@/components/result";
import { COMMAND_TYPE } from "@/commands";

interface CommandResultProps {
  cmd: COMMAND_TYPE;
  args: string;
}

export const CommandResult: React.FC<CommandResultProps> = ({ cmd, args }) => {
  const Comp = result[cmd];
  return <Comp args={args} />;
};
