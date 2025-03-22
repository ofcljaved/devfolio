export const DELIMITER = " ";
//export const HELP_FLAG = ["-h", "--help"] as const;
export enum HELP_FLAG {
  H = "-h",
  HELP = "--help",
}
export const USER = "viewer";
export const hostname = () => window.location.hostname;
export const GUI_URL = "https://ofcljaved.com";

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/ofcljaved",
    id: 1,
  },
  {
    name: "Twitter",
    url: "https://x.com/ofcljaved",
    id: 2,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ofcljaved",
    id: 3,
  },
  {
    name: "Gmail",
    url: "mailto:javedofficialme@gmail.com",
    id: 4,
  },
];

export const PROJECTS = [
  {
    name: "Cashboard",
    description: "A simple and intuitive expense management app for your budget.\r\nWith dashboards, reports and goals",
    url: "https://cashboard.ofcljaved.com",
    id: 1,
  },
  {
    name: "Sniphub",
    description: "Alternative to GitHub Gists.\r\nGitHub Gists are great, but sometimes you just need a quick snippet.",
    url: "https://sniphub.ofcljaved.com",
    id: 2,
  },
  {
    name: "Gitfork",
    description: "In order to judge people by their Github profile,\r\nYou can use this and look thier repositories and forks.",
    url: "https://gitfork.ofcljaved.com",
    id: 3,
  },
]
