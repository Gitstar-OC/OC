import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";


export const SourceLinkTag: React.FC<{ link: string; name: string }> = ({
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
  