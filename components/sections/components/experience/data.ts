import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    year: "2024",
    company: "PT Kalbe Farma Tbk",
    companyLogo: "/kalbe-logo.webp",
    role: ["Software", "Engineer", "Intern"],
    roleAccentIndex: 2,
    startDate: "Nov 2024",
    endDate: "Jan 2026",
    duration: "1 yr 3 mos",
    summary:
      "Built responsive Next.js interfaces for an internal Regulatory Information Management system, cutting tracking time by 30%.",
    responsibilities: [
      "Optimized PostgreSQL queries, cutting response time from 900ms to 250ms.",
      "Shipped 10+ features with 100% on-time delivery across two releases.",
      "Cut onboarding time by 25% through code reviews and documentation.",
      "Fixed 20+ integration bugs, reducing production incidents by 40%.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "SQL", "Git"],
  },

  // Add your next role here, following the same shape:
  // {
  //   year: "2027",
  //   company: "Company Name",
  //   companyLogo: "/company-logo.webp",
  //   role: ["Job", "Title"],
  //   roleAccentIndex: 1,
  //   startDate: "Month Year",
  //   endDate: "Present",
  //   duration: "x mos",
  //   summary: "One-sentence overview of the role.",
  //   responsibilities: ["Bullet one.", "Bullet two.", "Bullet three."],
  //   tags: ["Tech", "Stack"],
  // },
];