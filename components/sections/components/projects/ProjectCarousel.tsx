"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProjectFlipCard } from "./ProjectFlipCard";
import type { Project } from "./types";

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = projects.length;

  const previousProject = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const nextProject = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previousProject();
      if (event.key === "ArrowRight") nextProject();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [nextProject, previousProject]);

  if (total === 0) return null;

  const getRelativePosition = (index: number) => {
    const rawDistance = index - activeIndex;

    if (rawDistance > total / 2) return rawDistance - total;
    if (rawDistance < -total / 2) return rawDistance + total;

    return rawDistance;
  };

  return (
    <section
      className="relative mt-12 w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected portfolio projects"
    >
      {/* Carousel header */}
      <div className="mb-7 flex items-center justify-between gap-4 px-1">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 shrink-0 bg-white/15" />

          <span className="truncate font-mono text-xs uppercase tracking-[0.14em] text-white/40 sm:tracking-[0.18em]">
            {String(total).padStart(2, "0")} selected projects
          </span>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={previousProject}
            aria-label="Show previous project"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/75 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            type="button"
            onClick={nextProject}
            aria-label="Show next project"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/75 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* 
        Mobile/tablet:
        One active card only, so no card is shifted or clipped.
      */}
      <div className="relative h-120 w-full sm:h-132 lg:hidden">
        <motion.div
          key={projects[activeIndex].title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 26,
          }}
          className="size-full"
        >
          <ProjectFlipCard project={projects[activeIndex]} className="h-full" />
        </motion.div>
      </div>

      {/* 
        Desktop:
        Active full card, plus left/right visual previews.
        overflow-visible keeps preview cards from being cut off.
      */}
      <div className="relative hidden h-132 w-full lg:block lg:overflow-visible">
        {projects.map((project, index) => {
          const position = getRelativePosition(index);
          const isActive = position === 0;

          if (Math.abs(position) > 1) return null;

          return (
            <motion.div
              key={project.title}
              initial={false}
              animate={{
                x:
                  position === 0
                    ? "0%"
                    : position < 0
                      ? "-54%"
                      : "54%",
                scale: isActive ? 1 : 0.84,
                opacity: isActive ? 1 : 0.28,
                filter: isActive ? "blur(0px)" : "blur(3px)",
                zIndex: isActive ? 20 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 28,
                mass: 0.7,
              }}
              className={`absolute inset-x-0 top-0 mx-auto w-full max-w-4xl ${
                isActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <ProjectFlipCard project={project} />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${project.title}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03070d] ${
                isActive
                  ? "w-10 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.75)]"
                  : "w-1.5 bg-white/25 hover:bg-white/55"
              }`}
            />
          );
        })}
      </div>

      <p className="mt-4 text-center text-sm text-white/35">
        Use the arrows to explore, then click a preview to reveal details.
      </p>
    </section>
  );
}