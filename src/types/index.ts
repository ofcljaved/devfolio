import { HELP_FLAG } from "@/constants";

export type HelpOpt = HELP_FLAG.H | HELP_FLAG.HELP | null;
export type CmdObject = {
  cmd: string;
  helpFlag: HelpOpt;
  args: string;
};
