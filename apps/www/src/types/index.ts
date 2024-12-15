import { HELP_FLAG } from "@repo/constants";

export type HelpOpt = HELP_FLAG.H | HELP_FLAG.HELP | null;
export type CmdObject = {
  cmd: string;
  helpFlag: HelpOpt;
  args: string;
};
