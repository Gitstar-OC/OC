import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";


export const DesignedByTag: React.FC<{ name: string }> = ({ name }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className="cursor-default border border-blue-400 dark:border-blue-800/50 px-2 py-1  bg-white dark:bg-night-bg  text-neutral-700 dark:text-neutral-400  rounded text-xs"
        >
          <span>Designed by {name}</span>
        </TooltipTrigger>
        <TooltipContent className="text-xs">
          This particular component has been designed by {name} and coded by me.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
