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
  imageHeight,
}: ExperienceItem) {
  return (
    <CometCard className="mb-10 w-full">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 lg:p-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.3fr] lg:gap-10">
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left lg:justify-between">
            <div className="mb-6 inline-flex max-w-full items-center justify-center rounded-md border border-white/10 bg-white/[0.05] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60 sm:text-xs sm:tracking-[0.12em]">
              <span className="wrap-break-word text-center md:text-start">{company}</span>
            </div>

            {companyLogo && (
              <div className="mb-6 flex w-full justify-center md:mt-4 lg:mt-0">
                <Image
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={imageWidth ?? 200}
                  height={imageHeight ?? 200}
                  className="max-h-48 w-auto object-contain"
                />
              </div>
            )}

            <h3 className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-5xl md:mt-6 lg:mt-0">
              {role.map((line, index) => (
                <span
                  key={`${line}-${index}`}
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
              
            <div className="mt-5 flex flex-col items-center md:items-start gap-y-1 font-mono text-xs uppercase tracking-[0.12em] text-white/40 md:justify-start">
              <span>{startDate} — {endDate}</span>
              <span>{duration}</span>
            </div>
          </div>

          {/* Right: centered on mobile, aligned left from md onward */}
          <div className="flex min-w-0 flex-col items-center text-start lg:justify-between">
            <p className="text-base leading-7 text-white md:text-lg lg:text-xl">
              {summary}
            </p>

            <ul className="mt-6 w-full space-y-4 text-start items-start">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start justify-center gap-3 text-start"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-300" />

                  <span className="text-sm leading-6 text-white/60 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap justify-start gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] text-white/60 sm:px-3.5 sm:text-xs"
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