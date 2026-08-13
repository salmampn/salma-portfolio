"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

function useResponsiveSpotlight(
  baseWidth: number,
  baseHeight: number,
  baseSmallWidth: number,
  baseTranslateY: number,
  baseXOffset: number
) {
  const [dims, setDims] = useState({
    width: baseWidth,
    height: baseHeight,
    smallWidth: baseSmallWidth,
    translateY: baseTranslateY,
    xOffset: baseXOffset,
  });

  useEffect(() => {
    function calc() {
      const w = window.innerWidth;
      let scale: number;
      if (w < 480) {
        scale = 0.35;
      } else if (w < 640) {
        scale = 0.5;
      } else if (w < 768) {
        scale = 0.65;
      } else if (w < 1024) {
        scale = 0.8;
      } else {
        scale = 1;
      }
      setDims({
        width: Math.round(baseWidth * scale),
        height: Math.round(baseHeight * scale),
        smallWidth: Math.round(baseSmallWidth * scale),
        translateY: Math.round(baseTranslateY * scale),
        xOffset: Math.round(baseXOffset * scale),
      });
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [baseWidth, baseHeight, baseSmallWidth, baseTranslateY, baseXOffset]);

  return dims;
}

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .18) 0, hsla(210, 100%, 55%, .06) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .14) 0, hsla(210, 100%, 55%, .05) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .10) 0, hsla(210, 100%, 45%, .04) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const dims = useResponsiveSpotlight(width, height, smallWidth, translateY, xOffset);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left spotlight */}
      <motion.div
        animate={{ x: [0, dims.xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${dims.translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${dims.width}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${dims.smallWidth}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${dims.smallWidth}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right spotlight */}
      <motion.div
        animate={{ x: [0, -dims.xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${dims.translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${dims.width}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${dims.smallWidth}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${dims.smallWidth}px`,
            height: `${dims.height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
