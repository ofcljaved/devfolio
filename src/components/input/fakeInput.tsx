import { DELIMITER } from "@/constants";
import { useEffect, useState } from "react";
import { Command } from "@/components/command";
import { cn } from "@/lib/utils";

export const FakeInput = ({ input }: { input: string }) => {
  const [isTyping, setIsTyping] = useState(false);

  const isEmpty = !input.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 500);
    return () => {
      clearTimeout(timer);
      setIsTyping(true);
    };
  }, [input]);

  const userCmd = input.split(DELIMITER);
  return (
    <div>
      {!isEmpty && <Command userCmd={userCmd} />}
      <span
        className={cn(
          !isTyping && "animate-blink",
          "inline-block w-[1ch] h-[1.2em] align-middle bg-foreground",
        )}
      />
    </div>
  );
};
