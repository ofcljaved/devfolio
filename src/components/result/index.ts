import { Help } from "./help";
import { Echo } from "./echo";
import { Whoami } from "./whoami";
import { Welcome } from "./welcome";
import { COMMAND_TYPE } from "@/commands";

const result: Record<COMMAND_TYPE, React.ComponentType<{ args: string }>> = {
  help: Help,
  echo: Echo,
  whoami: Whoami,
  welcome: Welcome,
  projects: Welcome,
  blog: Welcome,
  education: Welcome,
  about: Welcome,
};
export default result;
