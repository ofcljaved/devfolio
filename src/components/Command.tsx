import { COMMANDS } from "@/commands";
import { cn } from "@/lib/utils";

export const Command = ({ userCmd }: { userCmd: string[] }) => {
  return userCmd.map((cmd, idx) => {
    const isCmd = idx === 0 && (COMMANDS as readonly string[]).includes(cmd);
    return (
      <span
        key={idx}
        className={cn(isCmd ? "text-success" : "text-error", "font-term")}
      >
        {idx != 0 && " "}
        {cmd}
        {isCmd}
      </span>
    );
  });
};
