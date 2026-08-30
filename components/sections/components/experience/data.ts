import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    year: "2025",
    company: "Laboratory of Faculty of Engineering and Informatics UMN",
    companyLogo: "/umn-logo.webp",
    role: ["Laboratory", "Assistant", "OOP"],
    roleAccentIndex: 2,
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    duration: "6 mos",
    summary:
      "Guided 80+ students through core Object-Oriented Programming concepts and hands-on coding practice in the 2024/2025 academic year.",
    responsibilities: [
      "Guided 80+ students in OOP fundamentals, including classes, objects, inheritance, polymorphism, encapsulation, and object-oriented design best practices.",
      "Led hands-on coding and debugging sessions to strengthen practical programming and problem-solving skills.",
      "Designed instructional materials and lab exercises that supported structured, step-by-step learning.",
      "Developed lab assessments and examination questions linking OOP concepts to real-world programming scenarios.",
    ],
    tags: [
      "Object-Oriented Programming",
      "Teaching",
      "Mentoring",
      "Java",
      "Debugging",
      "Assessment Design",
    ],
  },
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