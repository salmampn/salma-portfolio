"use client";

import { useEffect } from "react";

export default function SmoothPageScroll() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      // Do not interfere while the user is typing.
      if (isTyping) return;

      const scrollAmount = Math.round(window.innerHeight * 0.82);

      if (event.key === "PageDown") {
        event.preventDefault();

        window.scrollBy({
          top: scrollAmount,
          behavior: "smooth",
        });
      }

      if (event.key === "PageUp") {
        event.preventDefault();

        window.scrollBy({
          top: -scrollAmount,
          behavior: "smooth",
        });
      }

      if (event.key === "Home") {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (event.key === "End") {
        event.preventDefault();

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}