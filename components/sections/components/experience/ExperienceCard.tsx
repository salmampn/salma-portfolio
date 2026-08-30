import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { CometCard } from "@/components/ui/comet-card";

import type { ExperienceItem } from "./types";

export function ExperienceCard({
  company,
  companyLogo,
  role,
  roleAccentIndex,
  startDate,
  endDate,
  duration,
  summary,
  responsibilities,
  tags,
  imageWidth,
  imageHeight
}: ExperienceItem) {
  return (
    <CometCard className="mb-10 w-full">
      <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.3fr] md:gap-10">
          {/* Left: company, logo, title, dates */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-white/60">
              {company}
            </div>

            {companyLogo && (
              <div className="mb-6 flex w-full justify-center">
                <Image
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={imageWidth ?? 200}
                  height={imageHeight ?? 200}
                  className="h-auto w-auto object-contain"
                />
              </div>
            )}

            <h3 className="text-3xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
              {role.map((line, index) => (
                <span
                  key={line}
                  className={
                    index === roleAccentIndex
                      ? "block text-cyan-300"
                      : "block"
                  }
                >
                  {line}
                </span>
              ))}
            </h3>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/40">
              {startDate} — {endDate}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-white/40">
              {duration}
            </p>
          </div>

          {/* Right: description, bullets, tags */}
          <div>
            <p className="text-lg leading-8 text-white sm:text-xl">
              {summary}
            </p>

            <ul className="mt-6 space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-7 text-white/60 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 font-mono text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CometCard>
  );
}