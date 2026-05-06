"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function OriginalsSlider({ children, className }) {
  const items = useMemo(() => (Array.isArray(children) ? children : [children]), [
    children,
  ]);
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const count = items.length;

  useEffect(() => {
    if (count <= 1) return undefined;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5500);
    return () => clearInterval(timer.current);
  }, [count]);

  const go = (next) => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setIndex((i) => {
      const n = typeof next === "function" ? next(i) : next;
      return (n + count) % count;
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          {items.map((child, i) => (
            <div key={i} className="w-full shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go((i) => i - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/80 p-2 text-black/70 backdrop-blur-md transition hover:bg-white hover:text-black dark:border-white/10 dark:bg-black/35 dark:text-white/80 dark:hover:bg-black/45 dark:hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go((i) => i + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white/80 p-2 text-black/70 backdrop-blur-md transition hover:bg-white hover:text-black dark:border-white/10 dark:bg-black/35 dark:text-white/80 dark:hover:bg-black/45 dark:hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-3 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition",
                  i === index
                    ? "bg-[color:var(--accent)] shadow-[0_0_16px_rgba(255,106,0,0.55)]"
                    : "bg-black/20 hover:bg-black/35 dark:bg-white/25 dark:hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

