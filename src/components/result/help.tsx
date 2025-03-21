import { COMMANDS_HELP } from "@/commands";
import { ShortDesc } from "@/components/shortDesc";

const instruction = [
  {
    key: "Tab",
    value: "to autocomplete the command",
  },
  {
    key: "Ctrl + l",
    value: "to clear the command history",
  },
  {
    key: "Arrow ↑ or ↓",
    value: "to navigate through the command history",
  }
]
export const Help = ({ args }: { args: string }) => {
  if (args.trim().length) {
    return <p>Usage: help</p>;
  };

  return (
    <div className="py-4">
      {Object.entries(COMMANDS_HELP).map(([cmd, { shortDesc }]) => (
        <ShortDesc isCommand={true} cmd={cmd} shortDesc={shortDesc} />
      ))}
      <div className="mt-4">
        {instruction.map(({ key, value }) => (
          <ShortDesc cmd={key} shortDesc={value} />
        ))}
      </div>
    </div>
  );
};
