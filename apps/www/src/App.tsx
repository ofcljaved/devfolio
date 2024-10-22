import { useState } from "react";
import { Input } from "~/components/Input";

function App() {
    const [input, setInput] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <main className="p-4">
            <p className="space-x-4 text-center">
                <span className="text-foreground">hell</span>
                <span className="text-surface">hell</span>
                <span className="text-overlay">hell</span>
                <span className="text-muted">hell</span>
                <span className="text-subtle">hell</span>
                <span className="text-cursor">hell</span>
                <span className="text-error">hell</span>
                <span className="text-warning">hell</span>
                <span className="text-success">hell</span>
                <span className="text-selection-background">hell</span>
                <span className="text-cursorline-background">hell</span>
            </p>

            <Input/>
            <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            </form>
        </main>
    )
}
export default App;
