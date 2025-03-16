import { atom } from "jotai";

export const commandHistory = atom<string[]>(["welcome"]);
