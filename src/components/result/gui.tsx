import { GUI_URL } from "@/constants";
import { useUrl } from "@/hooks/use-url";

export const Gui = ({ args }: { args: string }) => {
  const disable = !!args.trim().length;
  useUrl(GUI_URL, disable);

  if (disable) {
    return <p>Usage: gui</p>;
  };

  return <p>Opening {GUI_URL}...</p>;
};
