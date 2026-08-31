"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

import { ShimmeringText } from "@/components/ui/shimmering-text";
import { MagneticButton } from "@/components/ui/magnetic-button";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.14,
    },
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const badgeReveal = {
  hidden: {
    opacity: 0,
    y: -18,
    scale: 0.84,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 16,
      mass: 0.8,
    },
  },
};

const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
    },
  },
};

const nameReveal = {
  hidden: {
    opacity: 0,
    y: 90,
    rotateX: -80,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 15,
      mass: 0.85,
    },
  },
};

const roleReveal = {
  hidden: {
    opacity: 0,
    x: -35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const buttonsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const buttonReveal = {
  hidden: {
    opacity: 0,
    scale: 0.55,
    y: 18,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 18,
      mass: 0.7,
    },
  },
};


const HeroContent = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-6 sm:px-10 lg:px-16">
      <motion.div
        className="w-full"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="flex w-full flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          {/* Availability badge */}
          <motion.div variants={badgeReveal}>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#10B981]/70 bg-[#10B981]/10 px-3 py-1.5 font-mono text-xs text-white/75 shadow-[0_0_30px_rgba(16,185,129,0.12)] backdrop-blur-sm md:px-5 md:py-2 md:text-sm lg:px-6">
              <motion.span
                className="relative flex h-2 w-2 md:h-2.5 md:w-2.5"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.5, 1],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="absolute inset-0 rounded-full bg-[#10B981] opacity-40" />
                <span className="relative h-full w-full rounded-full bg-[#10B981]" />
              </motion.span>

              Available for new opportunities
            </div>
          </motion.div>

          {/* Name and role */}
          <motion.div
            variants={nameContainer}
            className="[perspective:900px]"
          >
            <div className="overflow-hidden pb-3">
              <motion.h1
                variants={nameReveal}
                className="origin-bottom text-5xl font-bold leading-none tracking-tight [transform-style:preserve-3d] sm:text-6xl lg:text-8xl"
              >
                <ShimmeringText
                  text="Salma Manda Putri Nabilah"
                  color="#ffffff"
                  shimmeringColor="#67e8f9"
                  duration={2}
                  scaleAmount={1.08}
                  wave={false}
                  transition={{
                    ease: "linear",
                    repeatDelay: 0,
                  }}
                />
              </motion.h1>
            </div>

            <motion.p
              variants={roleReveal}
              className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-outfit text-lg font-semibold text-white sm:text-xl md:text-2xl lg:justify-start lg:gap-x-3 lg:text-4xl"
            >
              <span>Software Engineer</span>

              <motion.span
                className="text-cyan-300"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [0.35, 1, 0.35],
                        scale: [0.8, 1.2, 0.8],
                      }
                }
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ·
              </motion.span>

              <span>AI/ML Enthusiast</span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div variants={revealUp} className="max-w-4xl">
            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              I am a software engineer with experience in building web
              applications. I am also an AI/ML enthusiast and enjoy working on
              projects that involve machine learning.
            </p>
          </motion.div>

          {/* Contact and profile links */}
          <motion.div
            variants={buttonsContainer}
            className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
          >
            <MagneticButton
              href="mailto:salmamanda03@gmail.com"
              label="Send me an email"
              variant="custom"
              size="custom"
              variants={buttonReveal}
              shouldReduceMotion={shouldReduceMotion}
              className="h-10 w-10 gap-2 rounded-full border border-red-500/40 bg-red-500/20 font-mono text-base font-medium text-white shadow-[0_0_22px_rgba(239,68,68,0.14)] backdrop-blur-sm transition-colors hover:border-red-300/60 hover:bg-red-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 md:h-12 md:w-auto md:px-8"
            >
              <FiMail className="shrink-0 text-lg" />
              <span className="hidden md:inline">Email</span>
            </MagneticButton>

            <MagneticButton
              href="https://github.com/salmampn"
              label="Visit my GitHub profile"
              external
              variant="custom"
              size="custom"
              variants={buttonReveal}
              shouldReduceMotion={shouldReduceMotion}
              className="h-10 w-10 gap-2 rounded-full border border-white/20 bg-white/5 font-mono text-base font-medium text-white shadow-[0_0_22px_rgba(255,255,255,0.07)] backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:h-12 md:w-auto md:px-8"
            >
              <FiGithub className="shrink-0 text-lg" />
              <span className="hidden md:inline">salmampn</span>
            </MagneticButton>

            <MagneticButton
              href="https://www.linkedin.com/in/salmamanda/"
              label="Visit my LinkedIn profile"
              external
              variant="custom"
              size="custom"
              variants={buttonReveal}
              shouldReduceMotion={shouldReduceMotion}
              className="h-10 w-10 gap-2 rounded-full border border-blue-500/40 bg-blue-500/20 font-mono text-base font-medium text-white shadow-[0_0_22px_rgba(59,130,246,0.16)] backdrop-blur-sm transition-colors hover:border-blue-300/60 hover:bg-blue-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 md:h-12 md:w-auto md:px-8"
            >
              <FiLinkedin className="shrink-0 text-lg" />
              <span className="hidden md:inline">salmampn</span>
            </MagneticButton>

            <MagneticButton
              href="/SalmaMandaPutriNabilah.pdf"
              label="Preview my resume"
              external
              variant="custom"
              size="custom"
              variants={buttonReveal}
              shouldReduceMotion={shouldReduceMotion}
              className="h-10 w-10 gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/20 font-mono text-base font-medium text-white shadow-[0_0_22px_rgba(234,179,8,0.14)] backdrop-blur-sm transition-colors hover:border-yellow-300/60 hover:bg-yellow-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 md:h-12 md:w-auto md:px-8"
            >
              <IoDocumentTextOutline className="shrink-0 text-lg" />
              <span className="hidden md:inline">Resume</span>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Ambient animated glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-40"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -65, 0],
                y: [0, -35, 0],
                scale: [1, 1.12, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <HeroContent />
    </section>
  );
};

export default Hero;