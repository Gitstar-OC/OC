import type React from "react";
import SmoothButton from "./core/smooth-button";
import { DesignItem } from "@/components/design-item";

export const Design: React.FC = () => {
  return (
    <section className="mb-16 mt-24">
      <h2 className="text-2xl font-serif mb-4 text-morning-heading dark:text-night-heading">
        Components
      </h2>
      <DesignItem
        title="Smooth Button"
        description="Simple and smooth button used for various tasks like submitting a feedback, sending a mail or login link. "
        tags={["react", "tailwindcss", "framer motion"]}
        designedBy="Emil"
        sourceLink={{ link: "https://animations.dev", name: "Animations.dev" }}
      >
        <SmoothButton />
      </DesignItem>
    </section>
  );
};


