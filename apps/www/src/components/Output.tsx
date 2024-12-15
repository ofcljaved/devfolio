import { COMMANDS } from "~/commands";
import { CmdObject } from "~/types";

export const Output = ({ cmdObject }: { cmdObject: CmdObject }) => {
  console.log(cmdObject);
  if (!cmdObject.cmd.length) return;

  const isValidCmd = (COMMANDS as readonly string[]).includes(cmdObject.cmd);

  if (!isValidCmd) {
    return (
      <p className="pb-2">
        <span className="text-cursor font-semibold">{cmdObject.cmd}</span>:
        command not found
      </p>
    );
  }

  //if (cmdObject.helpFlag) {
  //    return (
  //
  //    )
  //}
  //
  return <h1>hello</h1>;
};
