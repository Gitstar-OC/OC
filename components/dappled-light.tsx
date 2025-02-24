"use client"

import { useEffect, useState } from "react"

export function DappledLight() {
  const [theme, setTheme] = useState("morning")

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(document.body.className)
    }

    window.addEventListener("themechange", handleThemeChange)
    return () => window.removeEventListener("themechange", handleThemeChange)
  }, [])

  return (
    <div id="dappled-light" className={theme}>
      <div id="glow"></div>
      <div id="glow-bounce"></div>
      <div className="perspective">
        <div id="leaves">
          <svg style={{ width: 0, height: 0, position: "absolute" }}>
            <defs>
              <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" seed="1">
                  <animate attributeName="seed" dur="30s" values="1;10;1" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="20" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/*      <div id="progressive-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>*/}
    </div>
  )
}

