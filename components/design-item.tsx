"use client"

import React, { useState, useRef } from "react"
import { createPortal } from "react-dom"
import { DesignedByTag } from "@/components/designed-by-tag"
import { SourceLinkTag } from "@/components/source-link-tag"
import { Maximize2, Minimize2, Code } from "lucide-react"

interface DesignItemProps {
  title: string
  description: string
  tags: string[]
  children: React.ReactNode
  designedBy?: string
  sourceLink?: {
    link: string
    name: string
  }
}

export const DesignItem: React.FC<DesignItemProps> = ({
  title,
  description,
  tags,
  children,
  designedBy,
  sourceLink,
}) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const toggleMaximize = () => {
    if (!isMaximized) {
      setScrollPosition(window.scrollY)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: "instant",
        })
      }, 0)
    }
    setIsMaximized(!isMaximized)
  }

  // Cleanup overflow style when component unmounts
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const MaximizedView = () => (
    <div className="fixed inset-0 z-50 overflow-hidden dark:bg-gradient-to-b dark:from-[#0A0A0A] dark:to-[#1a1a1a] bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="h-full flex flex-col md:flex-row">
        {/* Left sidebar */}
        <div className="w-full md:w-72 p-6">
          <h3 className="text-xl dark:text-white text-black mb-3 font-medium">{title}</h3>
          <p className="text-sm dark:text-neutral-400 text-neutral-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="dark:bg-neutral-800/50 bg-neutral-100 dark:text-neutral-400 text-neutral-600 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
            {designedBy && <DesignedByTag name={designedBy} />}
            {sourceLink && <SourceLinkTag {...sourceLink} />}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="w-[90%] h-[90%] dark:bg-black bg-white rounded-xl flex items-center justify-center dark:border-neutral-800 border-neutral-200 border overflow-hidden">
              {children}
            </div>
          </div>
        </div>

        {/* Control buttons - positioned above the rounded container */}
        <div className="absolute top-6 right-6 flex gap-2 z-10">
          <button
            className="p-2 dark:bg-neutral-800 bg-white rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-100 transition-colors shadow-lg"
            aria-label="View Code"
          >
            <Code className="w-4 h-4 dark:text-neutral-400 text-neutral-600" />
          </button>
          <button
            onClick={toggleMaximize}
            className="p-2 dark:bg-neutral-800 bg-white rounded-full dark:hover:bg-neutral-700 hover:bg-neutral-100 transition-colors shadow-lg"
            aria-label="Minimize"
          >
            <Minimize2 className="w-4 h-4 dark:text-neutral-400 text-neutral-600" />
          </button>
        </div>
      </div>
    </div>
  )

  const MinimizedView = () => (
    <div className="mb-12 mt-12" ref={componentRef}>
      <h3 className="text-lg mb-2 text-morning-heading dark:text-night-heading">{title}</h3>
      <p className="mb-6 text-neutral-700 dark:text-neutral-400">{description}</p>
      <div className="flex flex-wrap sm:flex-row gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-morning-bg dark:bg-night-bg text-neutral-700 dark:text-neutral-400 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
        {designedBy && <DesignedByTag name={designedBy} />}
        {sourceLink && <SourceLinkTag {...sourceLink} />}
      </div>
      <div className="relative group">
        <div className="bg-white rounded-xl items-center flex justify-center dark:bg-black border border-gray-200 dark:border-neutral-900 p-4 md:min-h-[600px] min-h-[400px]">
          {children}
        </div>
        <button
          onClick={toggleMaximize}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          aria-label="Maximize"
        >
          <Maximize2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )

  return <>{isMaximized ? createPortal(<MaximizedView />, document.body) : <MinimizedView />}</>
}

