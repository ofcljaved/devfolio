import { useEffect, useRef, useState } from "react";
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
        <div>
            {!isEmpty && (
                userCmd.map((cmd, idx) => {
                    return (
                        <span className="text-error">
                            {idx != 0 && " "}
                            {cmd}
                        </span>
                    )
                })
            )}
            <span className={cn(!isTyping && "animate-blink", "inline-block w-[1.25ch] bg-foreground")}>.</span>
        </div>
    )
}
