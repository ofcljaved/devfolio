import { useEffect, useRef, useState } from "react";
import { FakeInput } from "./fakeInput";
import { useSetAtom } from "jotai";
import { commandHistory } from "@/store/atoms/commandHistory";

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
}

export const Input = () => {
  const setCommandHistory = useSetAtom(commandHistory);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function scrollInputIntoView() {
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    if (isElementInViewport(inputRef.current)) {
      focusInput();
    }
  }
  function observer() {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          focusInput();
        }
      },
      { root: null, threshold: 0.1 }
    );
    return observer;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCommandHistory((prev) => [...prev, input]);
    setInput("");
    setTimeout(scrollInputIntoView, 0);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === "KeyL") {
      setCommandHistory([]);
    }
  };
  useEffect(() => {
    if (!inputRef.current) return;

    const inputObserver = observer();
    inputObserver.observe(inputRef.current);

    window.addEventListener("click", scrollInputIntoView);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      inputObserver.disconnect();
      window.removeEventListener("click", scrollInputIntoView);
      window.removeEventListener("keydown", handleKeyDown);
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
