import { useState } from "react";

export const Input = () => {
    const [input, setInput] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitting");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                autoFocus
                style={{ all: "unset" }}
                className="caret-foreground"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

