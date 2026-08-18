"use client";

import { useState } from "react";
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const HeroContent = () => (
  <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div className="w-full max-w-5xl text-center">
      {/* Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#10B981] bg-[#10B981]/10 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-xs md:text-base lg:text-lg text-white/70 backdrop-blur-sm">
        <div className="h-1.5 w-1.5 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 rounded-full bg-[#10B981] animate-pulse" />
        Available for new opportunities
      </div>

      {/* Title */}
      <h1 className="mb-4 sm:mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
        Salma Manda Putri Nabilah
      </h1>

      {/* Description */}
      <p className="mx-auto mb-8 sm:mb-10 max-w-4xl text-base sm:text-lg md:text-2xl lg:text-4xl text-white/60 px-4 sm:px-0 flex flex-col md:flex-row justify-center items-center gap-1 lg:gap-3">
        <span>Software Engineer</span>
        <span className="hidden md:inline">·</span>
        <span>AI/ML Enthusiast</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button className="inline-flex h-10 w-10 md:h-12 md:w-auto md:px-8 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
          <FiMail className="text-lg shrink-0" />
          <span className="hidden md:inline">Email</span>
        </button>
        <button className="inline-flex h-10 w-10 md:h-12 md:w-auto md:px-8 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
          <FiGithub className="text-lg shrink-0" />
          <span className="hidden md:inline">salmampn</span>
        </button>
        <button className="inline-flex h-10 w-10 md:h-12 md:w-auto md:px-8 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
          <FiLinkedin className="text-lg shrink-0" />
          <span className="hidden md:inline">salmampn</span>
        </button>
        <button className="inline-flex h-10 w-10 md:h-12 md:w-auto md:px-8 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
          <IoDocumentTextOutline className="text-lg shrink-0" />
          <span className="hidden md:inline">resume</span>
        </button>
      </div>
    </div>
    </motion.div>
  </div>
);

const Hero = () => {
  const [webcamGranted, setWebcamGranted] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* ── Layer 0: Aurora (always visible as default background) ── */}
      <AuroraBackground className="absolute inset-0 h-screen w-full">
        {/* Gradient overlay + content sit inside Aurora so they render above it */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <HeroContent />
      </AuroraBackground>

      {/* ── Layer 1: Webcam overlay (fades in on top once camera access is granted) ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          webcamGranted ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Webcam pixel grid fills this layer */}
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="w-full h-full"
          onWebcamReady={() => {
            console.log("Webcam ready!");
            setWebcamGranted(true);
          }}
          onWebcamError={(err) => {
            console.error("Webcam error:", err);
            setWebcamGranted(false);
          }}
        />

        {/* Gradient overlay + content also appear on the webcam layer */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <HeroContent />
      </div>

    </div>
  );
};

export default Hero;