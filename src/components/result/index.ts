import { COMMAND_TYPE } from "@/commands";
import { Echo } from "./Echo";
import { Help } from "./Help";
import { Whoami } from "./Whoami";
import { Welcome } from "./Welcome";

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
