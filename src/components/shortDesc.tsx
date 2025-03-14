import { cn } from "@/lib/utils";

const MAX_WIDTH = 15;

function addPadding(str: string) {
  return str.padEnd(MAX_WIDTH, ' ');
}

export const ShortDesc = ({ cmd, shortDesc, isCommand = false }: { cmd: string; shortDesc: string; isCommand?: boolean }) => {
  const notation = isCommand ? "→" : "=>";
  return (
    <div key={cmd} className="flex gap-2">
      <pre className={cn(isCommand && "text-warning")}>{addPadding(cmd)}</pre>
      <p>{notation} {shortDesc}</p>
    </div>
  );
};
