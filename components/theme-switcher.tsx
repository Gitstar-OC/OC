"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Sunset } from "lucide-react"

const themes = ["morning", "afternoon", "night"]

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("morning")

  useEffect(() => {
    document.body.className = theme
    document.documentElement.style.setProperty("--scrollbar-thumb", getScrollbarColor(theme))
  }, [theme])

  const getScrollbarColor = (currentTheme: string) => {
    switch (currentTheme) {
      case "morning":
        return "rgba(0, 0, 0, 0.5)"
      case "afternoon":
        return "rgba(0, 0, 0, 0.4)"
      case "night":
        return "rgba(255, 255, 255, 0.5)"
      default:
        return "rgba(0, 0, 0, 0.5)"
    }
  }

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <button onClick={cycleTheme} className="text-gray-600 hover:text-current transition-colors duration-200">
      {theme === "morning" && <Sun className="w-5 h-5" />}
      {theme === "afternoon" && <Sunset className="w-5 h-5" />}
      {theme === "night" && <Moon className="w-5 h-5" />}
    </button>
  )
}

