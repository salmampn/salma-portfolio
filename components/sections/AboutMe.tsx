"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AboutMe = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-12 lg:py-32">
      {/* Main constrained About content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Top row: editorial statement + circular profile */}
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-8">
          {/* Editorial statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-cyan-300">01.</span>

              <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
                About me
              </span>

              <div className="h-px w-20 bg-cyan-300/40" />
            </div>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              I build thoughtful
              <span className="block text-white/45">software and</span>
              intelligent systems
              <span className="block text-cyan-300">for real problems.</span>
            </h2>
          </motion.div>

          {/* Circular profile image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-60 sm:w-72 lg:w-80">
              {/* Pulsing background glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-300/15 blur-3xl animate-[profile-pulse_3.5s_ease-in-out_infinite]" />

              {/* Static outer ring */}
              <div className="pointer-events-none absolute -inset-4 rounded-full border border-[#6366F1]/10" />

              {/* Circular image frame */}
              <div className="group relative aspect-square overflow-hidden rounded-full border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 backdrop-blur-sm transition-shadow duration-500 hover:shadow-cyan-300/10">
                <div className="relative size-full overflow-hidden rounded-full border border-white/10">
                  <Image
                    src="/profile.jpg"
                    alt="Salma Manda Putri Nabilah"
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#070B14]/55 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: biography, profile facts, and actions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          {/* Biography */}
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-white/80 sm:text-xl">
              I&apos;m{" "}
              <span className="font-semibold text-white">
                Salma Manda
              </span>
              , a software engineer and AI/ML enthusiast who builds practical,
              human-centered digital products.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
              I build modern web applications with Next.js, TypeScript, and data-driven systems, and I am interested in software engineering, AI/ML engineering, and mobile
              development opportunities where technology can create measurable, meaningful impact.
            </p>

            {/* Profile facts */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <MapPin className="size-3.5" />
                South Tangerang, Indonesia
              </span>

              <span className="text-white/45">Indonesian · Native</span>

              <span className="text-[#A5B4FC]">
                English · TOEIC 960/990
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cyan-300 transition-colors hover:bg-cyan-300/20"
            >
              Explore projects
              <span aria-hidden="true">↘</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              View résumé
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-width Tech Stack marquee */}
      {/* <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mt-24 w-full overflow-hidden"
      >
        <TechStack />
      </motion.div> */}
    </section>
  );
};

export default AboutMe;