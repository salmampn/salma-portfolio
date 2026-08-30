"use client"

import { type HTMLMotionProps, motion, type Transition } from "motion/react"
import type * as React from "react"
import { cn } from "@/lib/utils";

type ShimmeringTextProps = {
  text: string
  duration?: number
  transition?: Transition
  wave?: boolean
  color?: string
  shimmeringColor?: string
} & Omit<HTMLMotionProps<"span">, "children">

function ShimmeringText({
  text,
  duration = 1,
  transition,
  wave = false,
  className,
  color = "var(--color-neutral-500)",
  shimmeringColor = "var(--color-neutral-300)",
  ...props
}: ShimmeringTextProps) {
  let globalCharIndex = 0;
  const words = text ? text.split(" ") : [];

  return (
    <motion.span
      className={cn("relative inline-block [perspective:500px]", className)}
      style={
        {
          "--shimmering-color": shimmeringColor,
          "--color": color,
          color: "var(--color)",
        } as React.CSSProperties
      }
      {...props}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const i = globalCharIndex++;
              return (
                <motion.span
                  animate={{
                    ...(wave
                      ? {
                          x: [0, 5, 0],
                          y: [0, -5, 0],
                          scale: [1, 1.1, 1],
                          rotateY: [0, 15, 0],
                        }
                      : {}),
                    color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
                  }}
                  className="inline-block [transform-style:preserve-3d]"
                  initial={{
                    ...(wave
                      ? {
                          scale: 1,
                          rotateY: 0,
                        }
                      : {}),
                    color: "var(--color)",
                  }}
                  key={i}
                  transition={{
                    duration,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    repeatDelay: text.length * 0.05,
                    delay: (i * duration) / text.length,
                    ease: "easeInOut",
                    ...transition,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </motion.span>
  );
}

export { ShimmeringText, type ShimmeringTextProps }
export default ShimmeringText
