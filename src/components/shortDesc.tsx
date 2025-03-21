import { addPadding } from "@/lib/addPadding";
import { cn } from "@/lib/utils";

export const ShortDesc = ({ cmd, shortDesc, isCommand = false }: { cmd: string; shortDesc: string; isCommand?: boolean }) => {
  const notation = isCommand ? "→" : "=>";
  return (
    <div key={cmd} className="flex gap-2">
      <pre className={cn(isCommand && "text-warning")}>{addPadding(cmd)}</pre>
      <p>{notation} {shortDesc}</p>
    </div>
  );
};
