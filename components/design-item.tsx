"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { DesignedByTag } from "@/components/designed-by-tag";
import { SourceLinkTag } from "@/components/source-link-tag";
import { Maximize2, Minimize2, ChevronLast } from "lucide-react";

interface DesignItemProps {
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
  designedBy?: string;
  sourceLink?: {
    link: string;
    name: string;
  };
}

export const DesignItem: React.FC<DesignItemProps> = ({
  title,
  description,
  tags,
  children,
  designedBy,
  sourceLink,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMaximize = () => {
    if (!isMaximized) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: "instant",
        });
      }, 0);
    }
    setIsMaximized(!isMaximized);
  };

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const MaximizedView = () => (
    <div className="fixed inset-0 z-50 overflow-hidden dark:bg-black bg-white">
      <div className="h-full flex flex-col md:flex-row p-0 md:p-10 relative">
        {/* <Lines /> */}
        
        {/* Left sidebar */}
        <div className="w-full md:w-72 p-6 md:p-0 md:pr-6 md:mt-10 md:ml-12 flex flex-col justify-between">
          <div>
            <h3 className="text-lg dark:text-white text-black mb-3 font-medium">
              {title}
            </h3>
            <p className="dark:text-neutral-400 text-neutral-600 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="dark:bg-neutral-900 bg-neutral-100 dark:text-neutral-400 text-neutral-600 px-3 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {designedBy && <DesignedByTag name={designedBy} />}
              {sourceLink && <SourceLinkTag {...sourceLink} />}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 relative mt-6 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-0">
            <div className="w-full md:w-[85%] h-full md:h-[85%] dark:bg-black bg-white rounded-xl flex items-center justify-center dark:border-neutral-800 border-neutral-300 border overflow-hidden">
              {children}
            </div>
          </div>
        </div>

        {/* Control buttons */}
        <div className="absolute top-4 mr-2 right-6 flex gap-4 z-10">
          <button
            className="p-2 dark:bg-black shadow-lg dark:shadow-neutral-500 dark:shadow-sm bg-white rounded-lg transition-colors"
            aria-label="View Code"
          >
            <ChevronLast className="w-5 h-5 dark:text-white  text-black" />
          </button>
          <button
            onClick={toggleMaximize}
            className="p-2 dark:bg-black shadow-lg dark:shadow-neutral-500 dark:shadow-sm bg-white rounded-lg  transition-colors "
            aria-label="Minimize"
          >
            <Minimize2 className="w-5 h-5 dark:text-white text-black" />
          </button>
        </div>
      </div>
    </div>
  );

  const MinimizedView = () => (
    <div className="mb-12 mt-12" ref={componentRef}>
      <h3 className="text-lg mb-2 text-morning-heading dark:text-night-heading">
        {title}
      </h3>
      <p className="mb-6 text-neutral-700 dark:text-neutral-400">
        {description}
      </p>
      <div className="flex flex-wrap sm:flex-row gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-morning-bg dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 px-2 py-1 rounded text-xs"
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
          className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-lg shadow-xl dark:shadow-neutral-500 dark:shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hidden lg:block"
          aria-label="Maximize"
        >
          <Maximize2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {isMaximized ? (
        createPortal(<MaximizedView />, document.body)
      ) : (
        <MinimizedView />
      )}
    </>
  );
};

const Lines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left vertical line */}
      <div className="absolute left-4 md:left-16 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-900"></div>

      {/* Top horizontal line */}
      <div className="absolute left-0 right-0 top-16 h-px bg-gray-200 dark:bg-neutral-900"></div>

      {/* Right vertical line */}
      <div className="absolute right-28 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-900"></div>

      {/* Bottom horizontal line */}
      <div className="absolute left-0 right-0 bottom-16 h-px bg-gray-200 dark:bg-neutral-900"></div>
    </div>
  );
};
