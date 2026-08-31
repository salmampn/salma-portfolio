"use client";

import { Braces } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";

import { TechCard } from "./TechCard";
import { techStack } from "./data";

export function TechStack() {
  const reverseTechStack = [...techStack].reverse();

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="relative w-full overflow-visible"
    >
      <div className="mx-auto mb-7 flex max-w-7xl flex-col items-center px-6 text-center sm:mb-9 sm:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-4">
          <Braces className="size-14 text-cyan-300 md:size-20" />

          <div className="text-left">
            <p className="font-bold text-2xl uppercase tracking-[0.18em] text-cyan-300 sm:text-3xl">
              Tech stack
            </p>

            <h3
              id="tech-stack-heading"
              className="mt-2 text-base font-semibold text-white sm:text-xl"
            >
              Tools I use to build and experiment.
            </h3>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
          Technologies I use across web development, backend systems, mobile
          apps, AI projects, databases, and deployment workflows.
        </p>
      </div>

      <div className="relative w-full">
        <Marquee
          pauseOnHover
          className="[--duration:58s] py-6"
        >
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}