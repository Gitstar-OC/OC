"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Spinner({
  color = "white",
  size = 20,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `2px solid ${color}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
        display: "inline-block",
      }}
    />
  );
}

const spinKeyframes = `
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Add the style tag just after imports
const styleTag = document.createElement("style");
styleTag.innerHTML = spinKeyframes;
document.head.appendChild(styleTag);

type ButtonState = "idle" | "loading" | "success";

const buttonCopy: Record<ButtonState, string | JSX.Element> = {
  idle: "Send me a login link",
  loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  success: "Login link sent!",
};

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="flex rounded-xl justify-center bg-blue-600 ">
      <button
        className="text-lg h-10 w-52 text-white  overflow-hidden relative"
        disabled={buttonState !== "idle"}
        onClick={() => {
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 2000);

          setTimeout(() => {
            setButtonState("idle");
          }, 5000);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={buttonState}
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 100, y: 0 }}
            exit={{ opacity: 0, y: 35 }}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
