import { DELIMITER, HELP_FLAG } from "@repo/constants";
import { CmdObject } from "~/types";

export function formatInputToCommand(input: string): CmdObject {
  const inputArray = input.trim().split(DELIMITER);
  const cmd = inputArray.splice(0, 1).toString();
  const helpFlag = HELP_FLAG.find((flag) => inputArray.includes(flag)) || null;
  const args = inputArray.join(" ");
  return {
    cmd,
    helpFlag,
    args,
  };
}
