import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export const Clear = () => {
  const setCommandHistory = useSetAtom(commandHistoryAtom);

  useEffect(() => {
    setCommandHistory([]);
  }, [setCommandHistory]);

  return <></>;
};
