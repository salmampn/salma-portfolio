import Image from "next/image";

import type { Project } from "./types";

type ProjectMockupProps = {
  project: Project;
};

export function ProjectMockup({ project }: ProjectMockupProps) {
  return (
    <div className="relative min-h-65 overflow-hidden rounded-2xl border border-white/10 bg-[#071017]/80 sm:min-h-80">
      <div
        className={`absolute -left-24 -top-24 size-64 rounded-full bg-linear-to-br ${project.accent} opacity-20 blur-3xl`}
      />
      <div
        className={`absolute -bottom-28 -right-20 size-72 rounded-full bg-linear-to-br ${project.accent} opacity-20 blur-3xl`}
      />

      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-300/60" />
          <span className="size-2 rounded-full bg-amber-200/60" />
          <span className="size-2 rounded-full bg-emerald-300/60" />
        </div>

        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-[10px] text-white/45">
          project.preview
        </div>
      </div>

      <div className="absolute inset-x-7 bottom-7 top-16 overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#05090d]/80 via-transparent to-transparent" />
      </div>
    </div>
  );
}