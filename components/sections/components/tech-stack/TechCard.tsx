import type { CSSProperties } from "react";

import type { Tech } from "./types";

export function TechCard({ name, icon: Icon, color }: Tech) {
  return (
    <div
      style={{ "--brand": color } as CSSProperties}
      className="group mx-5 flex min-w-26 flex-col items-center justify-center gap-3 py-12 text-center sm:mx-7 sm:min-w-31 sm:gap-4"
    >
      <div className="relative flex size-16 items-center justify-center sm:size-20">
        {/* Soft technology-color aura */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-20 blur-2xl transition duration-300"
          style={{ backgroundColor: color }}
        />

        {/* Large icon */}
        <Icon
          aria-hidden="true"
          className="relative size-11 text-[var(--brand)] transition duration-300 group-hover:-rotate-6 sm:size-14"
          style={{
            filter: `drop-shadow(0 0 12px ${color}99)`,
          }}
        />
      </div>

      {/* Technology label */}
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white/65 transition-colors duration-300 sm:text-xs">
        {name}
      </span>
    </div>
  );
}