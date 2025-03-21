import { GUI_URL } from "@/constants";
import { useUrl } from "@/hooks/use-url";

export const Gui = () => {
  useUrl(GUI_URL);
  return <p>Opening {GUI_URL}...</p>;
};
