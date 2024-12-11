import { useEffect, useState } from "react";
import { COMMANDS } from "~/commands";
import { cn } from "~/lib/utils";

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
        }
    }, [input, isEmpty]);

    const userCmd = input.split(" ");
    return (
        <div className="font-term">
            {!isEmpty && (
                userCmd.map((cmd, idx) => {
                    const isCmd = idx === 0 && (COMMANDS as readonly string[]).includes(cmd);
                    return (
                        <span key={idx} className={cn(isCmd ? "text-success" : "text-error")}>
                            {idx != 0 && " "}
                            {cmd}
                            {isCmd}
                        </span>
                    )
                })
            )}
            <span className={cn(!isTyping && "animate-blink", "inline-block w-[1ch] h-[1em] align-text-bottom bg-foreground")} />
        </div>
    )
}
