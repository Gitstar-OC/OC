import type React from "react";
import SmoothButton from "./core/smooth-button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

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

const DesignItem: React.FC<DesignItemProps> = ({
  title,
  description,
  tags,
  children,
  designedBy,
  sourceLink,
}) => {
  return (
    <div className="mb-12 mt-12">
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
            className="bg-morning-bg dark:bg-night-bg text-neutral-700 dark:text-neutral-400 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
        {designedBy && <DesignedByTag name={designedBy} />}
        {sourceLink && <SourceLinkTag {...sourceLink} />}
      </div>
      <div className="bg-white rounded-xl items-center flex justify-center dark:bg-black border border-gray-200 dark:border-neutral-900 p-4 md:min-h-[600px] min-h-[400px] ">
        {children}
      </div>
    </div>
  );
};

const DesignedByTag: React.FC<{ name: string }> = ({ name }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        asChild
        className="cursor-default border border-blue-400 dark:border-blue-800/50 px-2 py-1  bg-morning-bg dark:bg-night-bg  text-neutral-700 dark:text-neutral-400  rounded text-xs"
      >
        <span>Designed by {name}</span>
      </TooltipTrigger>
      <TooltipContent className="">
        This particular component has been designed by {name} and coded by me.
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const SourceLinkTag: React.FC<{ link: string; name: string }> = ({
  link,
  name,
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger
        asChild
        className="cursor-default border border-blue-400 dark:border-blue-800/50 px-2 py-1  bg-morning-bg dark:bg-night-bg  text-neutral-700 dark:text-neutral-400  rounded text-xs"
      >
        <span className="bg-morning-bg dark:bg-night-bg rounded text-xs">
          Inspired from {name}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        This component is inspired from{" "}
        <a className="underline text-blue-600 dark:text-blue-400" href={link}>
          {" "}
          {name}{" "}
        </a>{" "}
        .
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
