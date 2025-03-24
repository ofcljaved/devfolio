import { COMMAND_TYPE } from "@/commands";
import { Echo } from "./echo";
import { Help } from "./help";
import { Welcome } from "./welcome";
import { Whoami } from "./whoami";
import { Hostname } from "./hostname";
import { Clear } from "./clear";
import { History } from "./history";
import { Gui } from "./gui";
import { Socials } from "./socials";
import { Projects } from "./projects";
import { Blogs } from "./blog";

const result: Record<COMMAND_TYPE, React.ComponentType<{ args: string }>> = {
  help: Help,
  echo: Echo,
  whoami: Whoami,
  welcome: Welcome,
  blog: Blogs,
  education: Whoami,
  about: Whoami,
  hostname: Hostname,
  clear: Clear,
  history: History,
  gui: Gui,
  socials: Socials,
  projects: Projects,
};

interface CommandResultProps {
  cmd: COMMAND_TYPE;
  args: string;
}

export const CommandResult: React.FC<CommandResultProps> = ({ cmd, args }) => {
  const Comp = result[cmd];
  return <div className="pb-2 max-w-7xl">
    <Comp args={args} />
  </div>;
};
