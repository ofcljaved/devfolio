import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        overlay: "hsl(var(--overlay))",
        muted: "hsl(var(--muted))",
        subtle: "hsl(var(--subtle))",
        cursor: "hsl(var(--cursor))",
        error: "hsl(var(--error))",
        warning: "hsl(var(--warning))",
        success: "hsl(var(--success))",
        "selection-background": "hsl(var(--selection-background))",
        "cursorline-background": "hsl(var(--cursorline-background))",
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        term: ["terminal", "system-ui", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
