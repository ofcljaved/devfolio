import { COMMAND_TYPE, COMMANDS, COMMANDS_HELP } from "@/commands";
import { CommandResult } from "./CommandResult";
import { HELP_FLAG } from "@/constants";
import { CmdObject } from "@/types";

const isValidCmd = (cmd: string): cmd is COMMAND_TYPE => {
  return (COMMANDS as readonly string[]).includes(cmd);
};

export const Output = ({ cmdObject }: { cmdObject: CmdObject }) => {
  console.log(cmdObject);
  if (!cmdObject.cmd.length) return;

  if (!isValidCmd(cmdObject.cmd)) {
    return (
      <p className="pb-2">
        <span className="text-cursor font-semibold">{cmdObject.cmd}</span>:
        command not found
        <br />
        <span>Type '</span>
        <span className="text-cursor">help</span>
        <span>' for a list of available commands</span>
      </p>
    );
  }

  if (cmdObject.helpFlag) {
    if (cmdObject.helpFlag === HELP_FLAG.H) {
      return (
        <pre className="pb-2 max-w-[65ch]">
          <span className="text-cursor font-semibold">Description:</span>{" "}
          {COMMANDS_HELP[cmdObject.cmd].shortDesc}
        </pre>
      );
    }
    return (
      <pre className="pb-2">
        <span className="text-cursor font-semibold">DESCRIPTION:</span>
        <br />
        {COMMANDS_HELP[cmdObject.cmd].description}
        <br />
        <span className="text-cursor font-semibold">EXAMPLE:</span>
        <br />
        <span>{COMMANDS_HELP[cmdObject.cmd].example}</span>
      </pre>
    );
  }

  return <CommandResult cmd={cmdObject.cmd} args={cmdObject.args} />;
};
