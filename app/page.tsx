"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";
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
import SmoothPageScroll from "@/components/ui/SmoothPageScroll";

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
      title: "Contact",
      icon: (
        <MdConnectWithoutContact  className="h-full w-full text-white group-hover:text-white" />
      ),
      href: "#contact",
    },
  ];

  return (
    <AuroraBackground className="w-full">
      <SmoothPageScroll />
      <main className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden">
        <section id="home" className="w-full scroll-mt-8">
          <Hero />
        </section>

        <section id="about" className="w-full scroll">
          <AboutMe />
        </section>

        <section id="journey" className="w-full scroll-mt-8">
          <Experiences />
        </section>

        <section id="projects" className="w-full scroll-mt-8">
          <Projects />
        </section>

        <section id="achievements" className="w-full scroll-mt-8">
          <Contact />
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