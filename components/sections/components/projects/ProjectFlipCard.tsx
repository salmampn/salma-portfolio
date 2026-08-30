"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";

import type { Project } from "./types";

type ProjectFlipCardProps = {
  project: Project;
  className?: string;
};

export function ProjectFlipCard({
  project,
  className = "",
}: ProjectFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((current) => !current);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className={`group relative h-130 w-full overflow-hidden rounded-3xl perspective-[1400px]  ${className}`}
      role="button"
      tabIndex={0}
      aria-label={`${isFlipped ? "Hide" : "Show"} details for ${project.title}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 155,
          damping: 19,
          mass: 0.85,
        }}
        className="relative size-full cursor-pointer [transform-style:preserve-3d]"
      >
        {/* Front: image preview */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-[#071017] [backface-visibility:hidden]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={false}
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 82vw, 58rem"
            className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-[#03070d]/35 to-transparent" />

          {/* Browser window controls */}
          <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-red-300/70" />
            <span className="size-2 rounded-full bg-amber-200/70" />
            <span className="size-2 rounded-full bg-emerald-300/70" />
          </div>

          <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55 backdrop-blur-sm">
            project.preview
          </div>

          {/* Project caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-end justify-between gap-5">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyan-200/80 sm:text-xs">
                  Click preview to reveal details
                </p>

                <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-xl truncate text-sm text-white/55 sm:text-base">
                  {project.eyebrow}
                </p>
              </div>

              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 text-cyan-100 backdrop-blur-md transition duration-300 group-hover:rotate-[-25deg] group-hover:bg-cyan-300/20">
                <RotateCcw className="size-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Back: project information */}
        <div className="absolute inset-0 flex rotate-y-180 flex-col overflow-hidden rounded-3xl border border-cyan-300/30 bg-[#061318]/95 p-5 [backface-visibility:hidden] sm:p-7 lg:p-8">
          {/* Ambient background glow */}
          <div
            className={`pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`}
          />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-200/80 sm:text-xs">
                {project.eyebrow}
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl lg:text-3xl">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              aria-label={`Show preview image for ${project.title}`}
              onClick={(event) => {
                event.stopPropagation();
                toggleFlip();
              }}
              className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/70 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <RotateCcw className="size-4" />
            </button>
          </div>

          <p className="relative mt-4 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            {project.shortDescription}
          </p>

          {/* Project highlights */}
          <ul className="relative mt-4 space-y-2 sm:mt-5 sm:space-y-3">
            {project.highlights.slice(0, 5).map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-xs leading-5 text-white/60 sm:gap-3 sm:text-sm sm:leading-6"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Technology tags */}
          <div className="relative mt-4 flex flex-wrap gap-2 sm:mt-5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/60 sm:px-3 sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="relative mt-auto flex flex-wrap gap-2 pt-5 sm:gap-3 sm:pt-7">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group/link inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3.5 py-2 font-mono text-[11px] text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/20 sm:px-4 sm:py-2.5 sm:text-xs"
              >
                <ExternalLink className="size-3.5" />
                Live demo
                <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="group/link inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 font-mono text-[11px] text-white/75 transition hover:border-white/30 hover:bg-white/[0.1] hover:text-white sm:px-4 sm:py-2.5 sm:text-xs"
              >
                <FiGithub className="size-3.5" />
                Source code
                <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}