import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { commandHistoryAtom } from "@/store/atoms/commandHistory";
import { isElementInViewport } from "@/lib/isElementInViewport";
import { COMMANDS } from "@/commands";

function tabCompletion(input: string) {
  if (input.length == 0) return []
  return COMMANDS.filter((cmd) => cmd.startsWith(input));
}

export const useInput = () => {
  const [commandHistory, setCommandHistory] = useAtom(commandHistoryAtom);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const currentIndex = useRef(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const commandHistoryRef = useRef(commandHistory);

  useEffect(() => {
    commandHistoryRef.current = commandHistory.filter(cmd => cmd.length);
  }, [commandHistory]);

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
    setSuggestions([]);
    currentIndex.current = -1;
    setTimeout(scrollInputIntoView, 0);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === "KeyL") {
      e.preventDefault();
      setCommandHistory([]);
      currentIndex.current = -1;
    }
    if (e.code === "Tab") {
      e.preventDefault();
      const value = tabCompletion(inputRef.current?.value);
      if (value.length === 0) return;
      if (value.length === 1) {
        setInput(value[0]);
        setSuggestions([]);
      }
      else {
        setSuggestions(value);
      }
    }
    if (e.code === "ArrowUp") {
      e.preventDefault();
      const lastIndex = commandHistoryRef.current.length - 1;
      const newIndex = Math.min(currentIndex.current + 1, lastIndex);
      if (newIndex >= 0) {
        setInput(commandHistoryRef.current[lastIndex - newIndex]);
        currentIndex.current = newIndex;
      }
    }
    if (e.code === "ArrowDown") {
      e.preventDefault();
      const lastIndex = commandHistoryRef.current.length - 1;
      const newIndex = Math.max(currentIndex.current - 1, -1);
      setInput(newIndex === -1 ? "" : commandHistoryRef.current[lastIndex - newIndex]);
      currentIndex.current = newIndex;
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

  return {
    input,
    setInput,
    handleSubmit,
    inputRef,
    suggestions
  }
};

