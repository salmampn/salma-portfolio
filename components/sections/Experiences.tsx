"use client";

import { Timeline } from "@/components/ui/timeline";

import { experiences } from "./components/experience/data";
import { ExperienceCard } from "./components/experience/ExperienceCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const timelineData = experiences.map((exp) => ({
  title: exp.year,
  content: <ExperienceCard {...exp} />,
}));

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="relative w-full overflow-hidden py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-6"
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
            <span className="block text-cyan-300">production systems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            My professional experience so far, including internships where I
            contributed to real production systems.
          </p>
        </motion.div>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
};

export default Experiences;