"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface MagneticButtonProps {
  /** Button contents, such as an icon and a label. */
  children: React.ReactNode;

  /** Attraction strength, from 0 to 1. */
  strength?: number;

  /** Distance in pixels where magnetic movement is active. */
  radius?: number;

  /** Built-in visual style. Use custom when providing all styles with className. */
  variant?: "primary" | "outline" | "ghost" | "dark" | "custom";

  /** Built-in size. Use custom when providing all sizing with className. */
  size?: "sm" | "md" | "lg" | "custom";

  /** Click handler for the button or anchor. */
  onClick?: () => void;

  /** Extra classes for the visible button/anchor. */
  className?: string;

  /** Extra classes for the outer Motion wrapper. */
  wrapperClassName?: string;

  /** When supplied, render an anchor instead of a button. */
  href?: string;

  /** Opens an anchor in a new tab. */
  external?: boolean;

  /** Accessible label, recommended for icon-only buttons. */
  label?: string;

  /** Motion variants for entrance animations and parent staggering. */
  variants?: Variants;

  /** Optional override for reduced-motion behavior. */
  shouldReduceMotion?: boolean | null;
}

export function MagneticButton({
  children,
  strength = 0.35,
  radius = 100,
  variant = "primary",
  size = "md",
  onClick,
  className,
  wrapperClassName,
  href,
  external = false,
  label,
  variants: motionVariants,
  shouldReduceMotion: customReduceMotion,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = customReduceMotion ?? prefersReducedMotion;

  const springConfig = {
    stiffness: 220,
    damping: 16,
    mass: 0.6,
  };

  const rawX = useSpring(0, springConfig);
  const rawY = useSpring(0, springConfig);

  /* Content moves less than the button for a small parallax effect. */
  const textX = useTransform(rawX, (value) => value * 0.4);
  const textY = useTransform(rawY, (value) => value * 0.4);

  const resetMagnet = () => {
    rawX.set(0);
    rawY.set(0);
    setIsHovered(false);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (shouldReduceMotion) return;

    const rect = buttonRef.current?.getBoundingClientRect();

    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    const distance = Math.sqrt(
      distanceX * distanceX + distanceY * distanceY,
    );

    if (distance < radius) {
      rawX.set(distanceX * strength);
      rawY.set(distanceY * strength);
      setIsHovered(true);
      return;
    }

    resetMagnet();
  };

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
    outline:
      "border-2 border-foreground text-foreground hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/8",
    dark: "bg-foreground text-background shadow-lg",
    custom: "",
  };

  const sizeStyles = {
    sm: "h-9 rounded-full px-5 text-sm",
    md: "h-12 rounded-full px-8 text-base",
    lg: "h-14 rounded-full px-12 text-lg",
    custom: "",
  };

  const elementClassName = cn(
    "relative inline-flex items-center justify-center overflow-hidden font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const innerContent = (
    <>
      {/* Soft interior highlight, visible only during hover. */}
      <motion.span
        aria-hidden="true"
        animate={{
          opacity: !shouldReduceMotion && isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/10"
      />

      {/* Text and icon move more subtly than the button itself. */}
      <motion.span
        style={shouldReduceMotion ? undefined : { x: textX, y: textY }}
        className="relative z-10 flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </>
  );

  const motionProps = {
    variants: motionVariants,
    onPointerMove: handlePointerMove,
    onPointerLeave: resetMagnet,
    style: shouldReduceMotion ? undefined : { x: rawX, y: rawY },
    animate: shouldReduceMotion
      ? undefined
      : {
          scale: isHovered ? 1.05 : 1,
        },
    whileTap: shouldReduceMotion ? undefined : { scale: 0.94 },
    transition: {
      type: "spring" as const,
      stiffness: 350,
      damping: 20,
    },
    className: elementClassName,
  };

  return (
    <motion.div
      className={cn(
        "inline-flex items-center justify-center",
        wrapperClassName,
      )}
    >
      {href ? (
        <motion.a
          ref={buttonRef as React.Ref<HTMLAnchorElement>}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          onClick={onClick}
          {...motionProps}
        >
          {innerContent}
        </motion.a>
      ) : (
        <motion.button
          ref={buttonRef as React.Ref<HTMLButtonElement>}
          type="button"
          aria-label={label}
          onClick={onClick}
          {...motionProps}
        >
          {innerContent}
        </motion.button>
      )}
    </motion.div>
  );
}