import { COMMAND_TYPE } from "@/commands";
import { Echo } from "./echo";
import { Help } from "./help";
import { Welcome } from "./welcome";
import { Whoami } from "./whoami";

const result: Record<COMMAND_TYPE, React.ComponentType<{ args: string }>> = {
  help: Help,
  echo: Echo,
  whoami: Whoami,
  welcome: Welcome,
  projects: Whoami,
  blog: Whoami,
  education: Whoami,
  about: Whoami,
};

interface CommandResultProps {
  cmd: COMMAND_TYPE;
  args: string;
}

export const CommandResult: React.FC<CommandResultProps> = ({ cmd, args }) => {
  const Comp = result[cmd];
  return <Comp args={args} />;
};
