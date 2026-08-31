import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  className,
  children,
  reverse = false,
  pauseOnHover = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        /*
          overflow-x-hidden prevents the moving row from causing horizontal
          page scroll. overflow-y-visible gives icon auras room to fade
          vertically instead of cutting them at the marquee boundary.
        */
        "group relative flex w-full overflow-x-hidden overflow-y-visible [--duration:45s] [--gap:1.25rem]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-[var(--gap)]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {/* Original content */}
        <div className="flex shrink-0 items-center gap-[var(--gap)]">
          {children}
        </div>

        {/* Duplicate content creates a seamless loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-[var(--gap)]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}