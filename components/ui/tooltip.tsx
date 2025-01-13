"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    collisionPadding={16}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-backgroundAlt/95 px-3 py-1.5 text-sm text-textPrimary shadow-md pointer-events-none",
      "animate-in fade-in-0 zoom-in-95 duration-100",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-75",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) => (
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger asChild>
        <div className="inline-flex cursor-pointer">{children}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="select-none">{content}</p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);

export { Tooltip };
