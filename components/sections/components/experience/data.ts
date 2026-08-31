import type { ExperienceItem } from "./types";

export type ExperienceCategory = "professional" | "community";

export interface CategorizedExperienceItem extends ExperienceItem {
  category: ExperienceCategory;
}

export const experiences: CategorizedExperienceItem[] = [
  {
    category: "professional",
    year: "2024",
    company: "PT Kalbe Farma Tbk",
    companyLogo: "/experiences/kalbe-logo.webp",
    role: ["Software", "Engineer", "Intern"],
    roleAccentIndex: 2,
    startDate: "Nov 2024",
    endDate: "Jan 2026",
    duration: "1 yr 3 mos",
    summary:
      "Built responsive Next.js interfaces for a Regulatory Information Management system, cutting tracking time by 30%.",
    responsibilities: [
      "Optimized PostgreSQL queries, reducing response time from 900ms to 250ms.",
      "Delivered 10+ features on schedule across two release cycles.",
      "Improved onboarding through code reviews and technical documentation.",
      "Resolved 20+ integration bugs, reducing production incidents by 40%.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "SQL", "Git"],
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    category: "professional",
    year: "2025",
    company: "Laboratory of Faculty of Engineering and Informatics UMN",
    companyLogo: "/experiences/umn-logo.webp",
    role: ["Laboratory", "Assistant", "OOP"],
    roleAccentIndex: 2,
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    duration: "6 mos",
    summary:
      "Guided 80+ students in Object-Oriented Programming through practical labs and coding sessions.",
    responsibilities: [
      "Taught core OOP concepts and object-oriented design principles.",
      "Created lab materials and structured learning exercises.",
      "Developed OOP assessments based on real-world cases.",
      "Led hands-on coding and debugging sessions for students.",
    ],
    tags: [
      "Object-Oriented Programming",
      "Teaching",
      "Mentoring",
      "Java",
      "Debugging",
      "Assessment Design",
    ],
    imageWidth: 140,
    imageHeight: 140,
  },
  {
    category: "community",
    year: "2024",
    company: "9th International Conference on Mechatronics Engineering",
    companyLogo: "/experiences/iium-logo.png",
    role: ["Conference", "Paper", "Speaker"],
    roleAccentIndex: 2,
    startDate: "Aug 2024",
    endDate: "Aug 2024",
    duration: "1 mo",
    summary:
      "Presented a peer-reviewed facial-recognition security paper to an international IEEE-affiliated audience at ICOM’24.",
    responsibilities: [
      "Presented a Telegram-bot and facial-recognition alert system at a hybrid conference in Kuala Lumpur.",
      "Explained the system architecture, real-time recognition flow, and alert-delivery design to researchers.",
      "Communicated technical research findings to an international audience of engineers and practitioners.",
      "Contributed to a peer-reviewed paper later indexed on IEEE Xplore.",
    ],
    tags: [
      "IEEE",
      "Research",
      "Computer Vision",
      "Facial Recognition",
      "Telegram Bot",
      "Public Speaking",
    ],
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    category: "community",
    year: "2024",
    company: "IEEE STEM Workshop 2024",
    companyLogo: "/experiences/ieee-logo.webp",
    role: ["Volunteer", "AI/ML", "Educator"],
    roleAccentIndex: 1,
    startDate: "Apr 2024",
    endDate: "Apr 2024",
    duration: "1 mo",
    summary:
      "Co-led hands-on AI and machine-learning workshops for 40+ high school students in Tangerang.",
    responsibilities: [
      "Co-delivered an IEEE Pre-University STEM Grant workshop with UMN IEEE volunteers.",
      "Translated AI and machine-learning concepts into accessible, interactive lessons.",
      "Guided practical activities designed to introduce students to technology careers.",
      "Supported an outreach program funded through an IEEE Region 10 grant.",
    ],
    tags: [
      "IEEE",
      "AI/ML",
      "STEM Education",
      "Workshop",
      "Public Speaking",
      "Mentoring",
    ],
    imageWidth: 200,
    imageHeight: 200,
  },
];