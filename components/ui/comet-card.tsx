"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);

    return () => {
      mediaQuery.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
}

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Match Tailwind's lg breakpoint: 1024px and above.
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 180,
    damping: 22,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 180,
    damping: 22,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`],
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`],
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`],
  );

  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`],
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (!isDesktop) {
      x.set(0);
      y.set(0);
    }
  }, [isDesktop, x, y]);

  // Static white glare behind the upper-left logo/icon.
const glareBackground =
  "radial-gradient(circle at 22% 28%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.18) 25%, rgba(255, 255, 255, 0) 70%)";

  return (
    <div
      className={cn(
        "perspective-distant transform-3d overflow-visible",
        className,
      )}
      style={{ isolation: "isolate" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={isDesktop ? handleMouseMove : undefined}
        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
        style={
          isDesktop
            ? {
                rotateX,
                rotateY,
                translateX,
                translateY,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.35)",
              }
            : {
                boxShadow: "0px 8px 18px rgba(0, 0, 0, 0.28)",
              }
        }
        initial={{ scale: 1, z: 0 }}
        whileHover={
          isDesktop
            ? {
                scale: 1.05,
                z: 50,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        className="relative overflow-visible rounded-2xl"
      >
        {children}

        <div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{
            opacity: isDesktop ? 0.45 : 0.22,
            background: glareBackground
          }}
        />
      </motion.div>
    </div>
  );
};