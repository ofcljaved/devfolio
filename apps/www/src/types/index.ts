import { HELP_FLAG } from "@repo/constants";

export type HelpOpt = (typeof HELP_FLAG)[number];
export type CmdObject = {
  cmd: string;
  helpFlag: HelpOpt | null;
  args: string;
};
