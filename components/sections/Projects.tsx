"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import { projects } from "./components/projects/data";
import { ProjectCarousel } from "./components/projects/ProjectCarousel";
import { TechStack } from "./components/tech-stack/TechStack";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-visible py-16"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-cyan-300">03.</span>

            <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
              Selected Projects
            </span>

            <div className="h-px w-20 bg-cyan-300/40" />
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Things I build
            <span className="block text-white/45">
              when curiosity becomes
            </span>
            <span className="block text-cyan-300">
              working software.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/55 md:text-lg lg:text-xl">
            A selection of full-stack, mobile, and AI-focused work—from
            source-grounded chat experiences to practical tracking and content
            management systems.
          </p>
        </motion.div>

        {/* Projects carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          transition={{ delay: 0.12 }}
        >
          <ProjectCarousel projects={projects} />
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="https://github.com/salmampn"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white/70 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            <FiGithub className="size-4" />
            Explore more on GitHub
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Full-width Tech Stack marquee */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.15 }}
        transition={{ delay: 0.22 }}
        className="relative z-10 mt-24 w-full overflow-hidden"
      >
        <TechStack />
      </motion.div>
    </section>
  );
};

export default Projects;