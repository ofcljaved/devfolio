import { useEffect, useRef, useState } from "react";
import { FakeInput } from "./FakeInput";
import { useSetAtom } from "jotai";
import { commandHistory } from "@/store/atoms/commandHistory";

export const Input = () => {
  const setCommandHistory = useSetAtom(commandHistory);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function scrollInputIntoView() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCommandHistory((prev) => [...prev, input]);
    setInput("");
    setTimeout(scrollInputIntoView, 0);
  };

  useEffect(() => {
    if (!inputRef.current || !formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          focusInput();
        }
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(formRef.current);

    window.addEventListener("click", scrollInputIntoView);
    return () => {
      observer.disconnect();
      window.removeEventListener("click", scrollInputIntoView);
    };
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative flex-1">
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
