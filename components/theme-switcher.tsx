"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const newIsDark = e.matches;
      setIsDark(newIsDark);
      document.body.classList.toggle("dark", newIsDark);
    };

    // Set initial theme
    handleChange(mediaQuery);

    // Listen for system theme changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-morning-text dark:text-night-text transition-colors duration-200"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
