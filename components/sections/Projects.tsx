"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import { projects } from "./components/projects/data";
import { ProjectCarousel } from "./components/projects/ProjectCarousel";
import { TechStack } from "./components/tech-stack/TechStack";
import { EncryptedText } from "@/components/ui/encrypted-text";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-visible py-16"
    >
      <div className="pointer-events-none absolute -inset-40 overflow-visible">
        <div className="absolute left-1/2 top-1/4 size-136 -translate-x-1/2 rounded-full bg-cyan-400/7 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 size-112 rounded-full bg-indigo-500/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
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
            <span className="block">
              <EncryptedText text="Things I build" />
            </span>
            <span className="block text-white/45">
              <EncryptedText text="when curiosity becomes" />
            </span>
            <span className="block text-cyan-300">
              <EncryptedText text="working software." />
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/55 md:text-lg lg:text-xl">
            A selection of full-stack, mobile, and AI-focused work—from
            source-grounded chat experiences to practical tracking and content
            management systems.
          </p>
        </motion.div>

        <ProjectCarousel projects={projects} />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
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
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mt-24 w-full overflow-hidden"
      >
        <TechStack />
      </motion.div>
    </section>
  );
};

export default Projects;