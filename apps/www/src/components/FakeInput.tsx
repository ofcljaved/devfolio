import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Command } from "./Command";
import { DELIMITER } from "@repo/constants";

export const FakeInput = ({ input }: { input: string }) => {
  const [isTyping, setIsTyping] = useState(false);

  const isEmpty = !input.length;

  useEffect(() => {
    if (isEmpty) return;

    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 500);
    return () => {
      clearTimeout(timer);
      setIsTyping(true);
    };
  }, [input, isEmpty]);

  const userCmd = input.split(DELIMITER);
  return (
    <div>
      {!isEmpty && <Command userCmd={userCmd} />}
      <span
        className={cn(
          !isTyping && "animate-blink",
          "inline-block w-[1ch] h-[1em] align-text-bottom bg-foreground",
        )}
      />
    </div>
  );
};
