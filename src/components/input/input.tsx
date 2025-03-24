import { useInput } from "@/hooks/use-input";
import { FakeInput } from "./fakeInput";


export const Input = () => {
  const { input, setInput, handleSubmit, inputRef, suggestions } = useInput();

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <FakeInput input={input} />
      <input
        ref={inputRef}
        autoFocus
        className="absolute top-0 text-transparent bg-transparent outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Terminal input"
      />
      <div className="flex gap-4 text-subtle">
        {suggestions.map((suggestion, index) => (
          <p key={index}>{suggestion}</p>
        ))}
      </div>
    </form>
  );
};
