import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
    // {
    //     year: "2026",
    //     company: "PT. Indonesia Digital Exchange (Indodax)",
    //     companyLogo: "/indodax-logo.png",
    //     role: ["Software", "Engineer", "AI / Mobile", "Engineer"],
    //     roleAccentIndex: 3,
    //     startDate: "Jul 2026",
    //     endDate: "Present",
    //     duration: "2 mos",
    //     summary:
    //         "Developing core features for the Indodax mobile application, leveraging native Android and iOS technologies to enhance the crypto trading experience.",
    //     responsibilities: [
    //         "Implementing new user-facing features for the Android and iOS applications using Kotlin and Swift.",
    //         "Collaborating closely with product managers and designers to translate feature requirements into technical specifications.",
    //         "Participating in code reviews to maintain high code quality and share knowledge across the mobile development team.",
    //     ],
    //     tags: ["Kotlin", "Swift", "Mobile Development", "React Native", "Git", "Bitbucket"],
    // },
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