"use client";

import { Braces } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiGithub,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

import { Marquee } from "@/components/ui/marquee";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const techStack: Tech[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

function TechCard({ name, icon: Icon, color }: Tech) {
  return (
    <div className="group flex min-w-max items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
      <div className="flex size-9 items-center justify-center rounded-lg transition-colors">
        <Icon
          className="size-5 transition-transform duration-300 group-hover:scale-110"
          style={{ color }}
          aria-hidden="true"
        />
      </div>

      <span className="font-medium">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading" className="w-full">
      {/* Heading stays aligned to the main content */}
      <div className="mx-auto mb-6 flex flex-col items-center px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <Braces className="size-20 text-cyan-300" />

          <div>
            <p className="font-mono text-5xl uppercase tracking-[0.18em] text-cyan-300">
              Tech stack
            </p>

            <h3
              id="tech-stack-heading"
              className="mt-1 ml-2 text-xl font-semibold text-white"
            >
              Tools I use to build and experiment.
            </h3>
          </div>
        </div>
      </div>

      {/* Cards use the complete viewport width */}
      <div className="relative w-full overflow-hidden">

        <Marquee pauseOnHover className="[--duration:38s] py-2">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:42s] mt-4 py-2"
        >
          {techStack
            .slice()
            .reverse()
            .map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
        </Marquee>
      </div>
    </section>
  );
}