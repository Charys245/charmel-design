// import { cn } from "@/lib/utils";

import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        // Padding horizontal responsive
        "px-8 md:px-16 xl:px-43 2xl:px-56",
        // Padding vertical responsive
        "py-16 md:py-24 lg:py-37.5",
        className
      )}
    >
      {children}
    </Component>
  );
}
