import { formatInputToCommand } from "@/lib/formatInputToCommand";
import { Prompt } from "@/components/prompt";
import { Command } from "@/components/command";
import { DELIMITER } from "@/constants";
import { Output } from "./output";

const CommandItem = ({ cmd }: { cmd: string }) => {
  const cmdObject = formatInputToCommand(cmd);
  return (
    <div>
      <div className="flex gap-2">
        <Prompt />
        <Command userCmd={cmd.split(DELIMITER)} />
      </div>
      <Output cmdObject={cmdObject} />
    </div>
  );
};

export default CommandItem;
