"use client"

import { useEffect, useRef } from "react"

export function DappledLight() {
  const lightRaysRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lightRaysRef.current) {
      const container = lightRaysRef.current
      const numRays = 20

      for (let i = 0; i < numRays; i++) {
        const ray = document.createElement("div")
        ray.className = "light-ray"
        ray.style.left = `${Math.random() * 100}%`
        ray.style.transform = `rotate(${Math.random() * 45 - 22.5}deg)`
        ray.style.opacity = `${Math.random() * 0.5 + 0.1}`
        container.appendChild(ray)
      }
    }
  }, [])

  return (
    <div id="dappled-light">
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
        <div id="blinds">
          <div className="shutters">
            {Array.from({ length: 23 }).map((_, i) => (
              <div key={i} className="shutter"></div>
            ))}
          </div>
          <div className="vertical">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div id="light-rays" ref={lightRaysRef}></div>
      <div id="progressive-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

