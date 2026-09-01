"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      setHeight(ref.current.getBoundingClientRect().height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  const heightTransform = useTransform(
    smoothScrollProgress,
    [0, 1],
    [0, height],
  );

  const opacityTransform = useTransform(
    smoothScrollProgress,
    [0, 0.025, 0.975, 1],
    [0, 1, 1, 0],
  );

  return (
    <div ref={containerRef} className="w-full font-sans md:px-10">
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="flex justify-start pt-10 md:gap-4 md:pt-16 lg:gap-10 lg:pt-24"
        >
          <div className="sticky top-32 z-40 flex max-w-xs origin-top-left flex-col items-center self-start md:max-w-min md:shrink-0 md:flex-row lg:w-full lg:max-w-sm">
            <div className="absolute left-3 flex size-10 items-center justify-center rounded-full border border-white/10 bg-[#0B0E18] md:left-3">
              <div className="absolute size-4 animate-[dot-pulse_2.5s_ease-in-out_infinite] rounded-full bg-cyan-300/40 blur-sm" />

              <div className="relative size-4 rounded-full border border-cyan-300/40 bg-cyan-300/20" />
            </div>

            <h3 className="hidden text-xl font-bold text-white/80 md:block md:pl-20 md:text-4xl lg:text-5xl">
              {item.title}
            </h3>
          </div>

          <div className="relative w-full min-w-0 pl-20 pr-4 md:flex-1 md:pl-2 md:pr-0 lg:pl-4">
            <h3 className="mb-4 block text-left text-2xl font-bold text-white/80 md:hidden">
              {item.title}
            </h3>

            {item.content}
          </div>
        </div>
      ))}

        <div
           style={{ height: `${Math.max(0, height - 56)}px` }}
          className="absolute left-[31px] top-0 w-0.5 overflow-hidden rounded-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/15 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_5%,black_20%,black_80%,transparent_100%)] md:left-[31px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-cyan-200 via-cyan-300 to-[#6366F1] shadow-[0_0_8px_rgba(34,211,238,0.45)]"
          />
        </div>
      </div>
    </div>
  );
};