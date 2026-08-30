import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FiGithub} from "react-icons/fi";

import type { Project } from "./types";

type ProjectLinksProps = Pick<Project, "liveUrl" | "githubUrl">;

export function ProjectLinks({
  liveUrl,
  githubUrl,
}: ProjectLinksProps) {
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-mono text-xs text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
        >
          <ExternalLink className="size-3.5" />
          Live demo
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}

      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-white/70 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
        >
          <FiGithub className="size-3.5" />
          Source code
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}