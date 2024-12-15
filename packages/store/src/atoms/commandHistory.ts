import { atom } from "jotai";
import { DELIMITER, HELP_FLAG } from "@repo/constants";

function formatInputToCommand(input: string) {
  const inputArray = input.trim().split(DELIMITER);
  const cmd = inputArray.splice(0, 1).toString();
  const helpFlag = HELP_FLAG.some((flag) => inputArray.includes(flag));
  const args = inputArray.join(" ");
  return {
    cmd,
    helpFlag,
    args,
  };
}

export const commandHistory = atom<string[]>([]);

export const commandObject = atom((get) => {
  const cmdArray = get(commandHistory);
  return cmdArray.map(formatInputToCommand).reverse();
});
