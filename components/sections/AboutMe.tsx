"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  GraduationCap,
  Languages,
  MapPin,
} from "lucide-react";
import Image from "next/image";

import { TechStack } from "./components/tech-stack";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-8"
    >
      {/* Main constrained About content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-cyan-300">01.</span>

            <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
              About me
            </span>

            <div className="h-px w-20 bg-cyan-300/40" />
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering thoughtful products with intelligent systems.
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Profile image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Salma Manda Putri Nabilah"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/85 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-neutral-500/20 px-4 py-3 backdrop-blur-md">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                    Based in
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm text-white">
                    <MapPin className="size-4 text-[#818CF8]" />
                    South Tangerang, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <div className="flex h-full flex-col">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-lg leading-8 text-white/80 sm:text-xl">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-white">
                  Salma Manda Putri Nabilah
                </span>
                —a software engineer and AI/ML enthusiast who builds useful,
                human-centered digital products.
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-white/55">
                I create reliable web applications and data-driven systems. My
                academic interest is applying machine learning and medical image
                analysis to meaningful healthcare challenges.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex-1"
            >
              <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-100/5 p-6 shadow-xl shadow-black/10 backdrop-blur-md sm:p-7">
                <div className="absolute right-0 top-0 size-32 rounded-full bg-[#6366F1]/10 blur-3xl" />

                <div className="relative flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#6366F1]/20 bg-[#6366F1]/10 text-[#A5B4FC]">
                    <GraduationCap className="size-5" />
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#A5B4FC]">
                      Education
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Universitas Multimedia Nusantara
                    </h3>

                    <p className="mt-1 text-sm text-white/55">
                      Informatics Graduate
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
                    Focus
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm text-white/75">
                    <BrainCircuit className="size-4 shrink-0 text-cyan-300" />
                    Software Engineering &amp; AI/ML
                  </p>
                </div>

                <div className="relative mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2">
                    <Languages className="size-4 text-white/40" />

                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
                      Languages &amp; certification
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-white/60">
                      Indonesian · Native
                    </span>

                    <span className="rounded-md border border-[#6366F1]/30 bg-[#6366F1]/10 px-2.5 py-1 font-mono text-xs text-[#A5B4FC]">
                      English · TOEIC 960/990
                    </span>
                  </div>
                </div>
              </article>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width marquee: intentionally outside max-w-7xl */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mt-20 w-full overflow-hidden"
      >
        <TechStack />
      </motion.div>
    </section>
  );
};

export default AboutMe;