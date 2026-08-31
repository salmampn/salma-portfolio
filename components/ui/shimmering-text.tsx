"use client";

import {
  type HTMLMotionProps,
  motion,
  type Transition,
} from "motion/react";
import type * as React from "react";

import { cn } from "@/lib/utils";

type ShimmeringTextProps = {
  text: string;
  duration?: number;
  transition?: Transition;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
  scaleAmount?: number;
} & Omit<HTMLMotionProps<"span">, "children">;

function ShimmeringText({
  text,
  duration = 0.9,
  transition,
  wave = false,
  color = "#ffffff",
  shimmeringColor = "#67e8f9",
  scaleAmount = 1.08,
  className,
  ...props
}: ShimmeringTextProps) {
  let globalCharIndex = 0;
  const words = text ? text.split(" ") : [];
  const totalCharacters = text.replaceAll(" ", "").length;

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
      {words.map((word, wordIndex) => {
        const wordCharacters = word.split("");

        return (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {wordCharacters.map((character) => {
              const characterIndex = globalCharIndex++;

              return (
                <motion.span
                  key={`${character}-${characterIndex}`}
                  className="inline-block origin-bottom [transform-style:preserve-3d]"
                  initial={{
                    color: "var(--color)",
                    scale: 1,
                    ...(wave
                      ? {
                          x: 0,
                          y: 0,
                          rotateY: 0,
                        }
                      : {}),
                  }}
                  animate={{
                    color: [
                      "var(--color)",
                      "rgba(255, 255, 255, 1)",
                      "var(--shimmering-color)",
                      "rgba(255, 255, 255, 1)",
                      "var(--color)",
                    ],

                    /* Scale peaks at the cyan shine point */
                    scale: [1, 1.02, scaleAmount, 1.02, 1],

                    ...(wave
                      ? {
                          x: [0, 1, 2, 1, 0],
                          y: [0, -2, -5, -2, 0],
                          rotateY: [0, 4, 10, 4, 0],
                        }
                      : {}),
                  }}
                  transition={{
                    duration,
                    delay: (characterIndex * duration) / totalCharacters,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    ease: "linear",
                    times: [0, 0.28, 0.5, 0.72, 1],
                    ...transition,
                  }}
                >
                  {character}
                </motion.span>
              );
            })}

            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </motion.span>
  );
}

export { ShimmeringText, type ShimmeringTextProps };
export default ShimmeringText;