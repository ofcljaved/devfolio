import { useState } from "react";
import { FakeInput } from "./FakeInput";

export const Input = () => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitting");
    }


    return (
        <form onSubmit={handleSubmit} className="relative flex-1">
            <FakeInput input={input} />
            <input
                autoFocus
                className="text-transparent bg-transparent outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

