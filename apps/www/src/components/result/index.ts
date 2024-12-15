import { COMMAND_TYPE } from "~/commands";
import { Help } from "./Help";
import { Echo } from "./Echo";
import { Whoami } from "./Whoami";

const result: Record<COMMAND_TYPE, React.ComponentType<{ args: string }>> = {
  help: Help,
  echo: Echo,
  whoami: Whoami,
};
export default result;
