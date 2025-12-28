import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark" | "blue";
  fullWidth?: boolean;
}

export function Section({ 
  children, 
  className, 
  variant = "default", 
  fullWidth = false,
  ...props 
}: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted",
    dark: "bg-secondary text-white",
    blue: "bg-primary text-white",
  };

  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", variants[variant], className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6", fullWidth && "max-w-none px-0")}>
        {children}
      </div>
    </section>
  );
}
