import { Input } from "./Input";
import { Prompt } from "./Prompt";

export default function InputPrompt() {
    return (
        <div className="flex gap-2">
            <Prompt />
            <Input />
        </div>
    )
}
