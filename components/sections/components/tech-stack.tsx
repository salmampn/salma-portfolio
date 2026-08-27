"use client";

import { Braces } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";

import { techStack } from "./tech-stack/data";
import { TechCard } from "./tech-stack/tech-card";

export function TechStack() {
  const reverseTechStack = [...techStack].reverse();

  return (
    <section aria-labelledby="tech-stack-heading" className="w-full">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center px-6 text-center sm:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-4">
          <Braces className="size-12 text-cyan-300 sm:size-14" />

          <div className="text-left">
            <p className="font-mono text-2xl uppercase tracking-[0.18em] text-cyan-300 sm:text-3xl">
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
      </div>

      <div className="relative w-full overflow-hidden py-2">
        <Marquee pauseOnHover className="[--duration:58s] py-3">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="mt-4 [--duration:64s] py-3"
        >
          {reverseTechStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}