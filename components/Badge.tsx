import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft",
        className
      )}
      {...props}
    />
  );
}
