import { COMMANDS, COMMANDS_HELP } from "@/commands";
import { ShortDesc } from "@/components/shortDesc";
import { Pfp } from "@/components/pfp";

const desiredCommands = COMMANDS.filter(
  (command) =>
    command === "projects" ||
    command === "blog" ||
    command === "education" ||
    command === "about"
);

export const Welcome = ({ args }: { args: string }) => {
  if (args.trim().length) {
    return <p>Usage: welcome</p>;
  };

  return (
    <div className="grid grid-cols-[1fr_max_content] gap-2 grid-rows-[max-content_1fr] text-balance">
      <Name />
      <div className="text-balance">
        <p>Welcome to my interactive terminal portfolio</p>
        <p>Explore my projects, latest blog post, education, and more—all with simple commands.</p>
        <br />
        <p>Try these to get started:</p>
        <div className="py-2">
          {desiredCommands.map((command) => (
            <ShortDesc key={command} isCommand={true} cmd={command} shortDesc={COMMANDS_HELP[command].shortDesc} />
          ))}
        </div>
        <p>For a full list of available commands, type 'help'.</p>
        <br />
        <p>Let’s have some fun—start typing!</p>
      </div>
      <Pfp />
    </div>
  )
};

const Name = () => {
  return <pre className="text-[10px] font-[revert]">{`
       ▄█    ▄████████  ▄█    █▄     ▄████████ ████████▄ 
      ███   ███    ███ ███    ███   ███    ███ ███   ▀███
      ███   ███    ███ ███    ███   ███    █▀  ███    ███
      ███   ███    ███ ███    ███  ▄███▄▄▄     ███    ███
      ███ ▀███████████ ███    ███ ▀▀███▀▀▀     ███    ███
      ███   ███    ███ ███    ███   ███    █▄  ███    ███
      ███   ███    ███ ███    ███   ███    ███ ███   ▄███
  █▄ ▄███   ███    █▀   ▀██████▀    ██████████ ████████▀ 
  ▀▀▀▀▀▀                                                 
    `}</pre>;
};
