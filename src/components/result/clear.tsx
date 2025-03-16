import { commandHistory } from "@/store/atoms/commandHistory";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export const Clear = () => {
  const setCommandHistory = useSetAtom(commandHistory);

  useEffect(() => {
    setCommandHistory([]);
  }, []);

  return <></>;
};
