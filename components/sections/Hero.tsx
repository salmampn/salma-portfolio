"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { ShimmeringText } from "@/components/ui/shimmering-text";
import Link from "next/link";

const HeroContent = () => (
  <div className="relative w-full z-10 flex h-full flex-col items-start justify-center px-6 sm:px-10 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="w-full text-center flex flex-col gap-8 items-center lg:items-start">
        {/* Badge */}
        <div className="w-fit font-mono inline-flex items-center gap-2 rounded-full border border-[#10B981] bg-[#10B981]/10 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm md:px-5 md:py-2 md:text-sm lg:px-6">
          <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse md:h-2.5 md:w-2.5" />
          Available for new opportunities
        </div>

        {/* Title */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <ShimmeringText
            className="text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-8xl text-white"
            text="Salma Manda Putri Nabilah"
            color="#ffffff"
            shimmeringColor="#06B6D4"
            duration={2.5}
          />

          {/* Description */}
          <p className="font-outfit font-semibold flex items-start gap-2 text-lg text-white sm:text-lg md:flex-row lg:items-center md:text-2xl lg:gap-3 lg:text-4xl">
            <span>Software Engineer</span>
            <span>·</span>
            <span>AI/ML Enthusiast</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center lg:text-start max-w-4xl">
          <p className="text-base text-white/90 sm:text-lg md:text-xl">
            I am a software engineer with experience in building web applications.
            I am also an AI/ML enthusiast and enjoy working on projects that involve
            machine learning.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
          {/* Email */}
          <a
            href="mailto:salmamanda03@gmail.com"
            className="font-mono inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-red-500/40 bg-red-500/20 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-red-300/30 hover:bg-red-400/20 md:h-12 md:w-auto md:px-8"
            aria-label="Send me an email"
          >
            <FiMail className="shrink-0 text-lg" />
            <span className="hidden md:inline">Email</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/salmampn"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 md:h-12 md:w-auto md:px-8"
            aria-label="Visit my GitHub profile"
          >
            <FiGithub className="shrink-0 text-lg" />
            <span className="hidden md:inline">salmampn</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/salmampn/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/20 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-blue-300/30 hover:bg-blue-400/20 md:h-12 md:w-auto md:px-8"
            aria-label="Visit my LinkedIn profile"
          >
            <FiLinkedin className="shrink-0 text-lg" />
            <span className="hidden md:inline">salmampn</span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/20 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-yellow-300/30 hover:bg-yellow-400/20 md:h-12 md:w-auto md:px-8"
            aria-label="Preview my resume"
          >
            <IoDocumentTextOutline className="shrink-0 text-lg" />
            <span className="hidden md:inline">Resume</span>
          </a>
        </div>
      </div>
    </motion.div>
  </div>
);

const Hero = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <HeroContent />
    </div>
  );
};

export default Hero;