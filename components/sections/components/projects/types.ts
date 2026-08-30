import type { ReactNode } from "react";

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: ReactNode;
  accent: string;
};