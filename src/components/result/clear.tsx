import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export const Clear = ({ args }: { args: string }) => {
  const setCommandHistory = useSetAtom(commandHistoryAtom);

  useEffect(() => {
    if (args.trim().length) return;
    setCommandHistory([]);
  }, [setCommandHistory]);

  if (args.trim().length) {
    return <p>Usage: clear</p>;
  };
  return <></>;
};
