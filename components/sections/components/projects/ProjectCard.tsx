"use client";

import { motion } from "framer-motion";

import { ProjectLinks } from "./ProjectLinks";
import { ProjectMockup } from "./ProjectMockup";
import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ProjectTags({ tags }: Pick<Project, "tags">) {
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 font-mono text-[11px] text-white/55"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectHighlights({
  highlights,
  limit,
}: {
  highlights: string[];
  limit?: number;
}) {
  const visibleHighlights = limit ? highlights.slice(0, limit) : highlights;

  return (
    <ul className="mt-7 space-y-3">
      {visibleHighlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-start gap-3 text-sm leading-6 text-white/55"
        >
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-cyan-300/25"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(34,211,238,0.08),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <ProjectMockup project={project} />
      </div>

      <div className="relative px-3 pb-4 pt-7 sm:px-5 sm:pb-5">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-300">
            {project.eyebrow}
          </span>

          <div className="text-cyan-300">{project.icon}</div>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-white/55">
          {project.description}
        </p>

        <ProjectHighlights highlights={project.highlights} limit={2} />
        <ProjectTags tags={project.tags} />

        <ProjectLinks
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </motion.article>
  );
}