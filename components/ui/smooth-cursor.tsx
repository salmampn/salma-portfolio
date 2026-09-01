"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface Position {
  x: number;
  y: number;
}

interface SpringConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}

export interface SmoothCursorProps {
  cursor?: React.ReactNode;
  springConfig?: SpringConfig;
  className?: string;
  size?: number;
  color?: string;
  hideOnLeave?: boolean;
  trailLength?: number;
  showTrail?: boolean;
  rotateOnMove?: boolean;
  scaleOnClick?: boolean;
  glowEffect?: boolean;
  magneticDistance?: number;
  magneticElements?: string;
  onCursorMove?: (position: Position) => void;
  onCursorEnter?: () => void;
  onCursorLeave?: () => void;
  disabled?: boolean;
}

const DefaultCursorSVG = ({
  size = 25,
  color = "#67e8f9",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 2}
      height={size * 2.16}
      viewBox="0 0 50 54"
      fill="none"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <g filter="url(#cursor-shadow)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill={color}
        />

        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="white"
          strokeWidth={2.25825}
        />
      </g>

      <defs>
        <filter
          id="cursor-shadow"
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="cursorShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="cursorShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export function SmoothCursor({
  cursor,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
  className,
  size = 20,
  color = "#67e8f9",
  hideOnLeave = true,
  trailLength = 5,
  showTrail = false,
  rotateOnMove = true,
  scaleOnClick = true,
  glowEffect = true,
  magneticDistance = 50,
  magneticElements = "[data-magnetic]",
  onCursorMove,
  onCursorEnter,
  onCursorLeave,
  disabled = false,
}: SmoothCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const lastMousePosition = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(performance.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const isDisabled = disabled || Boolean(prefersReducedMotion);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const rotation = useSpring(0, {
    ...springConfig,
    damping: 60,
    stiffness: 300,
  });

  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 500,
    damping: 35,
  });

  const contentX = useTransform(cursorX, (value) => value * 0);
  const contentY = useTransform(cursorY, (value) => value * 0);

  const cursorElement =
    cursor ?? <DefaultCursorSVG size={size} color={color} />;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updatePointerType = () => {
      setHasFinePointer(mediaQuery.matches);
    };

    updatePointerType();
    mediaQuery.addEventListener("change", updatePointerType);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerType);
    };
  }, []);

  useEffect(() => {
    if (isDisabled || !hasFinePointer) return;

    // const previousBodyCursor = document.body.style.cursor;
    let animationFrameId = 0;
    let pendingEvent: PointerEvent | null = null;

    const resetCursor = () => {
      cursorX.set(0);
      cursorY.set(0);
      scale.set(1);
    };

    const findMagneticElement = (x: number, y: number) => {
      const elements = document.querySelectorAll(magneticElements);

      for (const element of Array.from(elements)) {
        const rect = element.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(x - centerX, y - centerY);

        if (distance < magneticDistance) {
          return {
            x: centerX,
            y: centerY,
            distance,
          };
        }
      }

      return null;
    };

    const updateTrail = (position: Position) => {
      if (!showTrail) return;

      setTrail((previousTrail) => [
        position,
        ...previousTrail.slice(0, Math.max(0, trailLength - 1)),
      ]);
    };

    const processPointerMove = () => {
      if (!pendingEvent) return;

      const event = pendingEvent;
      pendingEvent = null;
      animationFrameId = 0;

      let position: Position = {
        x: event.clientX,
        y: event.clientY,
      };

      const magneticTarget = findMagneticElement(
        position.x,
        position.y,
      );

      if (magneticTarget) {
        const magneticStrength =
          1 - magneticTarget.distance / magneticDistance;

        position = {
          x:
            position.x +
            (magneticTarget.x - position.x) *
              magneticStrength *
              0.3,
          y:
            position.y +
            (magneticTarget.y - position.y) *
              magneticStrength *
              0.3,
        };
      }

      const now = performance.now();
      const deltaTime = Math.max(1, now - lastUpdateTime.current);

      const velocityX =
        (position.x - lastMousePosition.current.x) / deltaTime;

      const velocityY =
        (position.y - lastMousePosition.current.y) / deltaTime;

      const velocityMagnitude = Math.hypot(velocityX, velocityY);

      lastUpdateTime.current = now;
      lastMousePosition.current = position;

      cursorX.set(position.x);
      cursorY.set(position.y);

      updateTrail(position);
      onCursorMove?.(position);

      if (!isVisible) {
        setIsVisible(true);
      }

      if (rotateOnMove && velocityMagnitude > 0.1) {
        const currentAngle =
          Math.atan2(velocityY, velocityX) * (180 / Math.PI) + 90;

        let angleDifference =
          currentAngle - previousAngle.current;

        if (angleDifference > 180) angleDifference -= 360;
        if (angleDifference < -180) angleDifference += 360;

        accumulatedRotation.current += angleDifference;

        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.96);

        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }

        moveTimeout.current = setTimeout(() => {
          scale.set(1);
        }, 110);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      pendingEvent = event;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(processPointerMove);
      }
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
      onCursorEnter?.();
    };

    const handlePointerLeave = () => {
      if (hideOnLeave) {
        setIsVisible(false);
      }

      resetCursor();
      onCursorLeave?.();
    };

    const handlePointerDown = () => {
      if (scaleOnClick) {
        scale.set(0.82);
      }
    };

    const handlePointerUp = () => {
      if (scaleOnClick) {
        scale.set(1);
      }
    };

    document.documentElement.classList.add("has-custom-cursor");

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerenter",
      handlePointerEnter,
    );

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });

    window.addEventListener("pointerup", handlePointerUp, {
      passive: true,
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }

      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);

      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [
    cursorX,
    cursorY,
    rotation,
    scale,
    hasFinePointer,
    hideOnLeave,
    isDisabled,
    magneticDistance,
    magneticElements,
    onCursorEnter,
    onCursorLeave,
    onCursorMove,
    rotateOnMove,
    scaleOnClick,
    showTrail,
    springConfig,
    trailLength,
    isVisible,
  ]);

  if (isDisabled || !hasFinePointer || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Optional motion trail */}
      {showTrail &&
        trail.map((position, index) => (
          <motion.div
            key={`${position.x}-${position.y}-${index}`}
            style={{
              position: "fixed",
              left: position.x,
              top: position.y,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: 9998 - index,
              pointerEvents: "none",
              opacity:
                ((trailLength - index) / trailLength) * 0.38,
              scale:
                ((trailLength - index) / trailLength) * 0.7,
            }}
            className="size-2 rounded-full bg-cyan-300"
          />
        ))}

      {/* Main custom cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotateOnMove ? rotation : 0,
          scale,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
          filter: glowEffect
            ? `drop-shadow(0 0 10px ${color}80)`
            : "none",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn("select-none", className)}
        aria-hidden="true"
      >
        <motion.span
          style={{
            x: contentX,
            y: contentY,
          }}
        >
          {cursorElement}
        </motion.span>
      </motion.div>
    </>
  );
}

export default SmoothCursor;