"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default: "light" — per brand guide (white-first design)
  const [theme, setThemeState] = React.useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("mirainetics-theme") as Theme | null;
    if (saved && (saved === "dark" || saved === "light" || saved === "system")) {
      setThemeState(saved);
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = theme === "system" ? (systemDark ? "dark" : "light") : theme;

    if (activeTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setResolvedTheme(activeTheme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("mirainetics-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    return {
      theme: "light" as Theme,
      setTheme: () => {},
      resolvedTheme: "light" as "dark" | "light",
    };
  }
  return context;
}
