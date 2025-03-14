import { Input } from "./input";
import { Prompt } from "@/components/prompt";

export default function InputPrompt() {
  return (
    <div className="flex gap-2">
      <Prompt />
      <Input />
    </div>
  );
}
