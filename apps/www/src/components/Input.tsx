import { useEffect, useRef, useState } from "react";
import { FakeInput } from "./FakeInput";
import { useSetAtom } from "jotai";
import { commandHistory } from "@repo/store";

export const Input = () => {
  const setCommandHistory = useSetAtom(commandHistory);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function scrollInputIntoView() {
    inputRef.current?.scrollIntoView();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCommandHistory((prev) => [...prev, input]);
    setInput("");
    scrollInputIntoView();
  };

  useEffect(() => {
    if (!inputRef.current) return;

    window.addEventListener("click", focusInput);
    return () => {
      window.removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <FakeInput input={input} />
      <input
        ref={inputRef}
        autoFocus
        className="absolute top-0 text-transparent bg-transparent outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
