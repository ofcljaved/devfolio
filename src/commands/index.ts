import { GUI_URL } from "@/constants";

export const COMMANDS = ["help", "echo", "whoami", "welcome", "projects", "blog", "education", "about", "hostname", "clear", "history", "gui", "socials"] as const;
export type COMMAND_TYPE = (typeof COMMANDS)[number];

export type COMMANDS_HELP_TYPE = Record<
  COMMAND_TYPE,
  {
    description: string;
    example: string;
    shortDesc: string;
  }
>;
export const COMMANDS_HELP: COMMANDS_HELP_TYPE = {
  help: {
    description: "Displays the list of available commands in this terminal.\r\nUse -h or --help with any command to see its detailed description and usage examples.",
    example: "help : Lists all commands like 'about', 'projects', 'blog'\r\nprojects --help : Shows details about the 'projects' command",
    shortDesc: "Shows available commands",
  },
  echo: {
    description: "Repeats back whatever you type after the command.\r\nUseful for testing input or just having a little fun.",
    example: "echo Hello World : Outputs 'Hello World'",
    shortDesc: "Echoes your input",
  },
  whoami: {
    description: "Reveals a quick summary of who I am—think of it as a terminal-style intro to me.",
    example: "whoami : Outputs a brief bio about me",
    shortDesc: "Quick intro about me",
  },
  welcome: {
    description: "Displays the welcome banner and a short intro to this terminal portfolio.\r\nYour entry point to my interactive resume!",
    example: "welcome : Shows the welcome message",
    shortDesc: "Welcomes you to the terminal",
  },
  projects: {
    description: "Lists my latest projects with clickable links to explore them further.\r\nDive into what I’ve been building!",
    example: "projects : Displays project names and links",
    shortDesc: "See my latest work with links",
  },
  blog: {
    description: "Shows the heading of my latest blog post with a clickable link to read more on my blog site.\r\nStay updated with my thoughts!",
    example: "blog : Outputs the latest blog title and link",
    shortDesc: "View my latest blog post",
  },
  education: {
    description: "Details my academic background and key milestones.\r\nSee where I’ve studied and what I’ve learned.",
    example: "education : Lists my degrees and institutions",
    shortDesc: "Check my academic journey",
  },
  about: {
    description: "Gives you a deeper look into who I am—my skills, interests, and story.\r\nMore than just a bio!",
    example: "about : Outputs my detailed profile",
    shortDesc: "Learn more about me",
  },
  hostname: {
    description: "Shows the hostname of this terminal.\r\nUseful for checking what url you’re on.",
    example: "hostname : Outputs like terminal.ofcljaved.dev",
    shortDesc: "Shows the hostname",
  },
  clear: {
    description: "Clears the command history.\r\nUseful for resetting the terminal.",
    example: "clear : Clears the command history",
    shortDesc: "Clears the command history",
  },
  history: {
    description: "Displays the command history.\r\nUseful for checking what commands you’ve used recently.",
    example: "history : Displays the command history",
    shortDesc: "Shows the command history",
  },
  gui: {
    description: "Navigates you to the graphical interface of the portfolio.\r\nFor those who prefer a more visual experience.",
    example: `gui : Opening ${GUI_URL}...`,
    shortDesc: "Opens the gui portfolio",
  },
  socials: {
    description: "Shows links to my social media profiles.\r\nYou can connect with me on the web!",
    example: "socials : Here are my social media profiles ...",
    shortDesc: "Shows links to my socials",
  },
};
