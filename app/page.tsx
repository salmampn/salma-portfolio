"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import MyJourney from "@/sections/MyJourney";
import Projects from "@/sections/Projects";
import Achievments from "@/sections/Achievments";
import {
  IconBriefcase,
  IconFolder,
  IconHome,
  IconTrophy,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#home",
    },
    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#about",
    },
    {
      title: "Experiences",
      icon: (
        <IconBriefcase className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#journey",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#projects",
    },
    {
      title: "Achievements",
      icon: (
        <IconTrophy className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#achievements",
    },
  ];

  return (
    <AuroraBackground className="w-full">
      <main className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden">
        <section id="home" className="w-full scroll-mt-8">
          <Hero />
        </section>

        <section id="about" className="w-full scroll-mt-8">
          <AboutMe />
        </section>

        <section id="journey" className="w-full scroll-mt-8">
          <MyJourney />
        </section>

        <section id="projects" className="w-full scroll-mt-8">
          <Projects />
        </section>

        <section id="achievements" className="w-full scroll-mt-8">
          <Achievments />
        </section>
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-50 flex items-center justify-center">
        <FloatingDock
          items={navItems}
          desktopClassName="border border-white/10 bg-neutral-100/5 backdrop-blur-md"
          mobileClassName="fixed bottom-6 right-6"
        />
      </div>
    </AuroraBackground>
  );
}