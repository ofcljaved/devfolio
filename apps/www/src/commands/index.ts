export const COMMANDS = ["help", "echo", "whoami"] as const;
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
    description: `help commands show you the set of available commands in this terminal.\r\n using -h or --help with other command will display thier description and example usage`,
    example: `help : shows you about, echo, whoami \r\n echo --help : shows how echo description`,
    shortDesc: `shows you available set of commands`,
  },
  echo: {
    description: `help commands show you the set of available commands in this terminal.\r\n using -h or --help with other command will display thier description and example usage`,
    example: `help : shows you about, echo, whoami \r\n echo --help : shows how echo description`,
    shortDesc: `shows you available set of commands`,
  },
  whoami: {
    description: `help commands show you the set of available commands in this terminal.\r\n using -h or --help with other command will display thier description and example usage`,
    example: `help : shows you about, echo, whoami \r\n echo --help : shows how echo description`,
    shortDesc: `shows you available set of commands`,
  },
};
