export const COMMANDS = ["help", "echo", "whoami", "welcome", "projects", "blog", "education", "about"] as const;
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
};

//export const COMMANDS_HELP: COMMANDS_HELP_TYPE = {
//  help: {
//    description: `help commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage`,
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `shows you available set of commands`,
//  },
//  echo: {
//    description: `help commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage`,
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `shows you available set of commands`,
//  },
//  whoami: {
//    description: `help commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage`,
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `shows you available set of commands`,
//  },
//  welcome: {
//    description: "welcome commands show you the banner and description of the owner",
//    example: "welcome: shows you welcome banner",
//    shortDesc: "welcomes you to the terminal",
//  },
//  projects: {
//    description: "projects commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage",
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `see my latest work with links to dive deeper`,
//  },
//  blog: {
//    description: "blog commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage",
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `read my thoughts and updates`,
//  },
//  education: {
//    description: "education commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage",
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `check out my academic journey`,
//  },
//  about: {
//    description: "about commands show you the set of available commands in this terminal.\r\nusing -h or --help with other command will display thier description and example usage",
//    example: `help : shows you about, echo, whoami \r\necho --help : shows how echo description`,
//    shortDesc: `learn more about me`,
//  },
//};
