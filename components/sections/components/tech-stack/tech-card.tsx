import type { CSSProperties } from "react";

import type { Tech } from "./types";

export function TechCard({ name, icon: Icon, color }: Tech) {
  return (
    <div
      style={{ "--brand": color } as CSSProperties}
      className="flex min-w-max items-center gap-4 px-4 py-3 text-white/75"
    >
      <Icon
        aria-hidden="true"
        className="size-10 shrink-0 text-[var(--brand)]"
      />

      <span className="text-base font-semibold">{name}</span>
    </div>
  );
}