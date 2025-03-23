import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fit?: boolean;
}

export default function Container({
  children,
  className,
  fit,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full px-4 py-2 mx-auto space-y-3 md:px-8 md:py-4 max-w-7xl",
        className,
        fit && "h-[calc(100dvh-64px)]"
      )}
    >
      {children}
    </div>
  );
}
