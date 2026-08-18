"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type NavigationHandler = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => void;

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();

  const handleNavigation: NavigationHandler = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();

    const targetId = href === "#" ? "home" : href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        onNavigate={handleNavigation}
      />

      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        onNavigate={handleNavigation}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  onNavigate,
}: {
  items: DockItem[];
  className?: string;
  onNavigate: NavigationHandler;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{
                  delay: (items.length - 1 - idx) * 0.05,
                }}
              >
                <a
                  href={item.href}
                  aria-label={item.title}
                  onClick={(event) => {
                    onNavigate(event, item.href);
                    setOpen(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  onNavigate,
}: {
  items: DockItem[];
  className?: string;
  onNavigate: NavigationHandler;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      aria-label="Main navigation"
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-black px-4 pb-3 md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          title={item.title}
          icon={item.icon}
          href={item.href}
          onNavigate={onNavigate}
        />
      ))}
    </motion.nav>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onNavigate,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
  onNavigate: NavigationHandler;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };

    return value - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40, 80, 40],
  );

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a
      href={href}
      aria-label={title}
      onClick={(event) => onNavigate(event, href)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-black/80"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200/50 bg-black px-2 py-1 text-xs text-white dark:border-neutral-900 dark:bg-neutral-800"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}