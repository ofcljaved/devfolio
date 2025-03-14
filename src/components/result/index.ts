import { COMMAND_TYPE } from "@/commands";
import { Echo } from "./Echo";
import { Help } from "./Help";
import { Whoami } from "./Whoami";
//import { Welcome } from "./Welcome";

const result: Record<COMMAND_TYPE, React.ComponentType<{ args: string }>> = {
  help: Help,
  echo: Echo,
  whoami: Whoami,
  welcome: Whoami,
  projects: Whoami,
  blog: Whoami,
  education: Whoami,
  about: Whoami,
};
export default result;
