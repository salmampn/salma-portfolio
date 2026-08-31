"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Timeline } from "@/components/ui/timeline";
import {
  experiences,
  type ExperienceCategory,
} from "./components/experience/data";
import { ExperienceCard } from "./components/experience/ExperienceCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const tabs: {
  id: ExperienceCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "professional",
    label: "Professional",
    description:
      "Industry and academic roles where I shipped software, mentored students, and contributed to real systems.",
  },
  {
    id: "community",
    label: "Leadership & Volunteering",
    description:
      "Research presentations, technical education, and IEEE community initiatives.",
  },
];

const Experiences = () => {
  const [activeTab, setActiveTab] =
    useState<ExperienceCategory>("professional");

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;

  const filteredExperiences = useMemo(
    () =>
      experiences
        .filter((experience) => experience.category === activeTab)
        .sort((a, b) => Number(b.year) - Number(a.year)),
    [activeTab],
  );

  const timelineData = filteredExperiences.map((experience) => ({
    title: experience.year,
    content: <ExperienceCard {...experience} />,
  }));

  return (
    <section
      id="experiences"
      className="relative w-full overflow-hidden py-12 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-cyan-300">02.</span>

            <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
              Experience
            </span>

            <div className="h-px w-20 bg-cyan-300/40" />
          </div>

          <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Where theory
            <span className="block text-white/45">meets real</span>
            <span className="block text-cyan-300">impact.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Professional work, teaching experience, research communication, and
            technology outreach.
          </p>
        </motion.div>

        <div className="mb-8 flex w-full justify-center">
        <div
          role="tablist"
          aria-label="Experience categories"
          className="inline-flex rounded-xl border border-white/10 bg-white/3 p-1"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-timeline`}
                id={`${tab.id}-tab`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-lg px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors sm:px-5 ${
                  isActive
                    ? "text-[#061218]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="experience-tab-pill"
                    className="absolute inset-0 rounded-lg bg-cyan-300"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

        <motion.p
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mb-2 max-w-2xl text-center text-sm leading-6 text-white/45 sm:text-base"
        >
          {activeTabData.description}
        </motion.p>
      </div>

      <motion.div
        key={activeTab}
        id={`${activeTab}-timeline`}
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full overflow-clip"
      >
        <Timeline data={timelineData} />
      </motion.div>
    </section>
  );
};

export default Experiences;