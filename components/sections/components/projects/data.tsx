import { Bot, Code2, Route } from "lucide-react";

import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Lee Kuan Yew RAG Chatbot",
    eyebrow: "Personal Project · Aug 2026",
    description:
      "A source-grounded educational chatbot that answers questions on Lee Kuan Yew’s leadership, governance, and economics using curated reference documents.",
    shortDescription:
      "A retrieval-augmented educational chatbot that finds relevant passages from curated Lee Kuan Yew documents before generating an answer.",
    highlights: [
      "Built a client-side retrieval engine that ranks the four most relevant source passages per query.",
      "Added document upload, preview, management, evidence panels, and source citations.",
      "Deployed the full-stack application on Vercel with an Express serverless API.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Express",
      "Gemini API",
      "RAG",
      "Vercel",
    ],
    image: "/projects/ss-lky.jpg",
    imageAlt: "Lee Kuan Yew RAG Chatbot interface",
    liveUrl: "https://lee-kuan-yew-chatbot-dun.vercel.app/",
    githubUrl: "https://github.com/salmampn/lee-kuan-yew-chatbot",
    icon: <Bot className="size-5" />,
    accent: "from-cyan-300 via-blue-400 to-indigo-500",
  },
  {
    title: "OTOT — Running Tracker",
    eyebrow: "University Project · Oct–Dec 2024",
    description:
      "A native Android running tracker that records GPS routes, supports background tracking, and stores each runner’s history in the cloud.",
    shortDescription:
      "A native Kotlin Android app for tracking runs, recording GPS routes, and syncing user activity history with Firebase.",
    highlights: [
      "Integrated Google Maps SDK to visualize recorded GPS routes.",
      "Built a foreground TrackingService for continuous background location tracking.",
      "Implemented Firebase Auth and Firestore for account-based run history.",
    ],
    tags: [
      "Kotlin",
      "Android",
      "Google Maps SDK",
      "Firebase",
      "Firestore",
      "GPS",
    ],
    image: "/projects/ss-otot.png",
    imageAlt: "OTOT running tracker mobile application",
    githubUrl: "https://github.com/salmampn/OTOT",
    icon: <Route className="size-5" />,
    accent: "from-emerald-300 via-cyan-400 to-blue-500",
  },
  {
    title: "i27 Studio Company Profile",
    eyebrow: "University Project · Dec 2023",
    description:
      "A responsive company-profile platform for an architectural studio, built by an eight-person team with a CMS workflow for non-technical editors.",
    shortDescription:
      "A responsive architectural-studio profile site with CMS-driven content management for projects and company information.",
    highlights: [
      "Built responsive pages for the studio profile, projects, and core values.",
      "Created a CMS-driven module for updating 20+ portfolio entries without code changes.",
      "Collaborated across PHP, Laravel, React, and MySQL in an eight-person team.",
    ],
    tags: ["PHP", "Laravel", "React", "MySQL", "CMS", "Responsive Design"],
    image: "/projects/ss-i27.png",
    imageAlt: "i27 Studio company profile website",
    liveUrl: "https://studioi27.com",
    githubUrl: "https://github.com/Group3-IF330H/i27studio",
    icon: <Code2 className="size-5" />,
    accent: "from-violet-300 via-fuchsia-400 to-cyan-400",
  },
];