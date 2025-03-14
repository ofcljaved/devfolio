import { COMMANDS } from "@/commands";
import { HELP_FLAG } from "@/constants";
import { cn } from "@/lib/utils";

export const Command = ({ userCmd }: { userCmd: string[] }) => {
  return userCmd.map((cmd, idx) => {
    const isCmd = idx === 0 && (COMMANDS as readonly string[]).includes(cmd);
    const isFlag = idx === 1 && (Object.values(HELP_FLAG) as readonly string[]).includes(cmd);

    return (
      <span
        key={idx}
        className={cn(
          'font-term text-error',
          isCmd && 'text-success',
          isFlag && 'text-warning',
        )}
      >
        {idx != 0 && " "}
        {cmd}
      </span>
    );
  });
};
