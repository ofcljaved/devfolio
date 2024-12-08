import { useEffect, useRef, useState } from "react";
import { FakeInput } from "./FakeInput";

export const Input = () => {
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitting");
    }

    useEffect(() => {
        if (!inputRef.current) return;

        function focusInput() {
            inputRef.current?.focus();
        }

        window.addEventListener('click', focusInput);

        return () => {
            window.removeEventListener('click', focusInput);
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className="relative flex-1">
            <FakeInput input={input} />
            <input
                ref={inputRef}
                autoFocus
                className="absolute text-transparent bg-transparent outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

