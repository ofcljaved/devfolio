import { DELIMITER, HELP_FLAG } from "@repo/constants";
import { CmdObject, HelpOpt } from "~/types";

export function formatInputToCommand(input: string): CmdObject {
  const inputArray = input.trim().split(DELIMITER);
  const cmd = inputArray.splice(0, 1).toString();
  const helpFlag =
    inputArray.find((flag) =>
      Object.values(HELP_FLAG).includes(flag as HELP_FLAG),
    ) || null;
  const args = inputArray.join(" ");
  return {
    cmd,
    helpFlag: helpFlag as HelpOpt,
    args,
  };
}
