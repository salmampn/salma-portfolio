"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagneticButtonProps {
  /** Button label or children */
  children: React.ReactNode;
  /** How strongly the button attracts (0–1, default 0.35) */
  strength?: number;
  /** Pixel radius in which magnetism activates */
  radius?: number;
  /** Visual variant */
  variant?: "primary" | "outline" | "ghost" | "dark" | "custom";
  /** Size */
  size?: "sm" | "md" | "lg" | "custom";
  /** onClick handler */
  onClick?: () => void;
  /** Additional classes for the button/anchor element */
  className?: string;
  /** Additional classes for the outer wrapper */
  wrapperClassName?: string;
  /** Link URL if used as an anchor */
  href?: string;
  /** Open link in new tab */
  external?: boolean;
  /** Accessible label */
  label?: string;
  /** Motion animation variants for entry animations */
  variants?: Variants;
  /** Explicit override for motion reduction */
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
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = customReduceMotion ?? prefersReducedMotion;

  // Spring config — snappy and elastic
  const springConfig = { stiffness: 220, damping: 16, mass: 0.6 };

  const rawX = useSpring(0, springConfig);
  const rawY = useSpring(0, springConfig);

  // Inner text moves slightly less than the container (parallax depth)
  const textX = useTransform(rawX, (v) => v * 0.4);
  const textY = useTransform(rawY, (v) => v * 0.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX ** 2 + distY ** 2);

    if (dist < radius) {
      rawX.set(distX * strength);
      rawY.set(distY * strength);
      setIsHovered(true);
    } else {
      rawX.set(0);
      rawY.set(0);
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setIsHovered(false);
  };

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    outline:
      "border-2 border-foreground text-foreground hover:bg-foreground/5",
    ghost:
      "text-foreground hover:bg-foreground/8",
    dark:
      "bg-foreground text-background shadow-lg",
    custom: "",
  };

  const sizeStyles = {
    sm: "h-9 px-5 text-sm rounded-full",
    md: "h-12 px-8 text-base rounded-full",
    lg: "h-14 px-12 text-lg rounded-full",
    custom: "",
  };

  const elementClassName = cn(
    "relative inline-flex items-center justify-center font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const innerContent = (
    <>
      {/* Subtle inner glow on hover */}
      <motion.span
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
      />

      {/* Text/icon layer with slight parallax */}
      <motion.span
        style={shouldReduceMotion ? undefined : { x: textX, y: textY }}
        className="relative z-10 flex items-center justify-center gap-2"
      >
        {children}
      </motion.span>
    </>
  );

  const interactiveElement = href ? (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      onClick={onClick}
      style={shouldReduceMotion ? undefined : { x: rawX, y: rawY }}
      animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.05 : 1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={elementClassName}
    >
      {innerContent}
    </motion.a>
  ) : (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={shouldReduceMotion ? undefined : { x: rawX, y: rawY }}
      animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.05 : 1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={elementClassName}
    >
      {innerContent}
    </motion.button>
  );

  return (
    <motion.div
      ref={buttonRef}
      variants={motionVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-flex items-center justify-center", wrapperClassName)}
    >
      {interactiveElement}
    </motion.div>
  );
}
