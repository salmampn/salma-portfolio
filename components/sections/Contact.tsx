"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contactLinks = [
  {
    label: "Email",
    value: "salmamanda03@gmail.com",
    href: "mailto:salmamanda03@gmail.com",
    description: "Best for opportunities, collaborations, or a quick hello.",
    icon: Mail,
    accent: "cyan",
  },
  {
    label: "LinkedIn",
    value: "Salma Manda",
    href: "https://www.linkedin.com/in/salmamanda/",
    description: "Connect professionally and follow my latest work.",
    icon: FiLinkedin,
    accent: "blue",
  },
  {
    label: "GitHub",
    value: "@salmampn",
    href: "https://github.com/salmampn",
    description: "Browse my code, experiments, and project repositories.",
    icon: FiGithub,
    accent: "white",
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("salmamanda03@gmail.com");
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-xs text-white/70 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-cyan-300" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          Copy email
        </>
      )}
    </button>
  );
}

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-visible pt-16 pb-24 lg:pb-32"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-40 overflow-visible"
      >
        <div className="absolute left-1/2 top-1/3 size-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[140px]" />

        <div className="absolute -left-32 bottom-0 size-[28rem] rounded-full bg-emerald-400/[0.06] blur-[140px]" />

        <div className="absolute -right-32 top-1/4 size-[26rem] rounded-full bg-blue-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-cyan-300/40" />

            <span className="font-mono text-sm text-cyan-300">04.</span>

            <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </span>

            <div className="h-px w-14 bg-cyan-300/40" />
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-white/45">
              thoughtful, useful, and
            </span>
            <span className="block text-cyan-300">worth shipping.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg lg:text-xl">
            I&apos;m open to software engineering, AI/ML, web development, and
            mobile development opportunities. If you have an idea, role, or
            challenge worth discussing, I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.08 }}
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.13),transparent_52%)]" />

          <div className="pointer-events-none absolute -bottom-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-200 shadow-[0_0_36px_rgba(34,211,238,0.18)]">
              <Send className="size-7" />
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200/80">
              Start a conversation
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
              Have a role, product, or idea in mind?
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              Send me an email and I&apos;ll get back to you as soon as I can.
              I&apos;m currently based in Tangerang, Indonesia and available
              for remote or hybrid opportunities.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="mailto:salmamanda03@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/45 bg-cyan-300/15 px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-cyan-100 transition hover:border-cyan-200/80 hover:bg-cyan-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Mail className="size-4" />
                Email me
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <CopyEmailButton />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
              <MapPin className="size-3.5 text-cyan-300/70" />
              Tangerang, Indonesia · Open to remote work
            </div>
          </div>
        </motion.div>

        {/* Contact platform cards */}
        <div className="mx-auto mt-7 grid max-w-4xl gap-4 md:grid-cols-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            const accentClass =
              contact.accent === "cyan"
                ? "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200"
                : contact.accent === "blue"
                  ? "border-blue-300/20 bg-blue-300/[0.06] text-blue-200"
                  : "border-white/15 bg-white/[0.05] text-white";

            return (
              <motion.div
                key={contact.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={contact.label === "Email" ? undefined : "noreferrer"}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-cyan-300/[0.08] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl border ${accentClass}`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <ArrowUpRight className="size-4 text-white/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </div>

                  <p className="relative mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {contact.label}
                  </p>

                  <p className="relative mt-2 text-base font-semibold text-white/90">
                    {contact.value}
                  </p>

                  <p className="relative mt-3 text-base leading-6 text-white/45">
                    {contact.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Resume CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white/70 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            <Download className="size-4" />
            View resume
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;