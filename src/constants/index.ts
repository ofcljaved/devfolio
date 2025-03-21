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
