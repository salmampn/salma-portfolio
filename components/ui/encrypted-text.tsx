"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  /**
   * Time in milliseconds between revealing each subsequent real character.
   * Lower is faster. Defaults to 40ms per character.
   */
  revealDelayMs?: number;
  /** Optional custom character set to use for the gibberish effect. */
  charset?: string;
  /**
   * Time in milliseconds between gibberish flips for unrevealed characters.
   * Lower is more jittery. Defaults to 50ms.
   */
  flipDelayMs?: number;
  /** CSS class for styling the encrypted/scrambled characters */
  encryptedClassName?: string;
  /** CSS class for styling the revealed characters */
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateDeterministicGibberish(
  original: string,
  charset: string,
): string[] {
  if (!original) return [];
  const result: string[] = [];
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    if (ch === " ") {
      result.push(" ");
    } else {
      const idx = (i * 31 + 17) % charset.length;
      result.push(charset.charAt(idx));
    }
  }
  return result;
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string,
): string[] {
  if (!original) return [];
  const result: string[] = [];
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result.push(ch === " " ? " " : generateRandomCharacter(charset));
  }
  return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 40,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState<number>(0);
  const [scrambleChars, setScrambleChars] = useState<string[]>(() =>
    generateDeterministicGibberish(text, charset),
  );

  useEffect(() => {
    if (!isInView) return;

    const initialChars = generateGibberishPreservingSpaces(text, charset);
    let currentScrambleChars = [...initialChars];
    setScrambleChars(initialChars);
    const startTime = performance.now();
    let lastFlipTime = startTime;

    let isCancelled = false;
    let animationFrameId: number;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTime;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) {
        return;
      }

      // Re-randomize unrevealed scramble characters on an interval
      const timeSinceLastFlip = now - lastFlipTime;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        let changed = false;
        const nextChars = [...currentScrambleChars];
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            if (text[index] !== " ") {
              nextChars[index] = generateRandomCharacter(charset);
              changed = true;
            } else {
              nextChars[index] = " ";
            }
          }
        }
        if (changed) {
          currentScrambleChars = nextChars;
          setScrambleChars(nextChars);
        }
        lastFlipTime = now;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={cn("inline", className)}
      aria-label={text}
      role="text"
      suppressHydrationWarning
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : (scrambleChars[index] ??
            charset.charAt((index * 31 + 17) % charset.length));

        if (char === " ") {
          return (
            <span key={index} className="inline" suppressHydrationWarning>
              {" "}
            </span>
          );
        }

        return (
          <span
            key={index}
            className="relative inline-block align-baseline"
            suppressHydrationWarning
          >
            {/* Invisible real character defines the exact, unchanging width & height slot */}
            <span className="invisible select-none" aria-hidden="true">
              {char}
            </span>
            {/* Scrambled or revealed character positioned inside the fixed slot */}
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                isRevealed ? revealedClassName : encryptedClassName,
              )}
              suppressHydrationWarning
            >
              {displayChar}
            </span>
          </span>
        );
      })}
    </motion.span>
  );
};
