"use client";

import { CosmicSingularity } from "@/components/ui/cosmic-singularity";
import { FloatingDock } from "@/components/ui/floating-dock";
import SmoothPageScroll from "@/components/ui/SmoothPageScroll";

import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import {
  IconBriefcase,
  IconFolder,
  IconHome,
  IconUser,
} from "@tabler/icons-react";
import { MdConnectWithoutContact } from "react-icons/md";
import SmoothCursor from "@/components/ui/smooth-cursor";

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
      href: "#experiences",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#projects",
    },
    {
      title: "Connect",
      icon: (
        <MdConnectWithoutContact className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030303] text-white">
      <CosmicSingularity className="pointer-events-none fixed inset-0 z-0" />

      <SmoothPageScroll />

      <SmoothCursor
        color="#000000"
        size={18}
        rotateOnMove
        scaleOnClick
        glowEffect
        showTrail={false}
        magneticElements="[data-magnetic]"
      />

      <main className="relative z-10 flex w-full flex-col overflow-hidden pb-32 pt-8 md:pt-0 lg:pt-6">
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects />
        <Contact />
      </main>

      <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-50 flex items-center justify-center">
        <FloatingDock
          items={navItems}
          desktopClassName="border border-white/10 bg-neutral-100/5 backdrop-blur-md"
          mobileClassName="fixed bottom-6 right-6"
        />
      </div>
    </div>
  );
}