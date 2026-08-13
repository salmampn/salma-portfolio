"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import MyJourney from "@/sections/MyJourney";
import Projects from "@/sections/Projects";
import Achievments from "@/sections/Achievments";

export default function Home() {
  return (
    <AuroraBackground className="w-full">
      <div className="flex justify-center items-center flex-col overflow-hidden w-full relative z-10">
        <Hero />
        <AboutMe />
        <MyJourney />
        <Projects />
        <Achievments />
      </div>
    </AuroraBackground>
  );
}
