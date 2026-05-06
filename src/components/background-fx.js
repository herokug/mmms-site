"use client";

import { motion } from "framer-motion";

export function BackgroundFX() {
  const bars = Array.from({ length: 34 });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,106,0,0.20),transparent_60%)] dark:bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,106,0,0.24),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_20%,rgba(255,176,0,0.12),transparent_60%)] dark:bg-[radial-gradient(900px_500px_at_15%_20%,rgba(255,176,0,0.14),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_480px_at_85%_35%,rgba(255,106,0,0.10),transparent_60%)] dark:bg-[radial-gradient(800px_480px_at_85%_35%,rgba(255,106,0,0.12),transparent_60%)]" />

      <motion.div
        className="absolute left-1/2 top-28 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,106,0,0.22), rgba(255,176,0,0.10), transparent 65%)",
        }}
        animate={{ opacity: [0.55, 0.75, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-160px] left-[-140px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,106,0,0.18), rgba(0,0,0,0), transparent 70%)",
        }}
        animate={{ opacity: [0.35, 0.55, 0.35], y: [0, -18, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Depth overlay (keep behind equalizer) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.20),transparent_32%,rgba(0,0,0,0.08))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_32%,rgba(0,0,0,0.70))]" />

      {/* Equalizer / recording vibe (subtle) */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pb-8 sm:pb-10">
        <div
          className="relative w-[96vw] max-w-6xl"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 22%, black 88%, transparent), radial-gradient(closest-side at 50% 55%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 22%, black 88%, transparent), radial-gradient(closest-side at 50% 55%, black 70%, transparent 100%)",
          }}
        >
          <div className="absolute inset-0 -z-10 blur-3xl">
            <div className="h-full w-full bg-[radial-gradient(1100px_220px_at_50%_80%,rgba(255,106,0,0.20),transparent_60%)] dark:bg-[radial-gradient(1100px_220px_at_50%_80%,rgba(255,106,0,0.26),transparent_60%)]" />
          </div>

          <div className="flex items-end justify-center gap-1.5 px-2">
            {bars.map((_, i) => {
              const duration = 1.4 + (i % 7) * 0.12;
              const delay = (i % 9) * 0.08;
              const min = 14 + (i % 5) * 3;
              const max = 70 + (i % 11) * 6;
              const opacity = 0.22 + (i % 6) * 0.05;
              return (
                <motion.div
                  key={i}
                  className="w-[7px] sm:w-[9px] rounded-full"
                  style={{
                    height: min,
                    background:
                      "linear-gradient(to top, rgba(255,106,0,0.65), rgba(255,176,0,0.35), rgba(255,255,255,0.20))",
                    boxShadow:
                      "0 0 22px rgba(255,106,0,0.18), 0 0 44px rgba(255,176,0,0.10)",
                    opacity,
                    mixBlendMode: "normal",
                  }}
                  initial={false}
                  animate={{ height: [min, max, min] }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                />
              );
            })}
          </div>

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]"
            animate={{ opacity: [0.1, 0.35, 0.1], scale: [1, 1.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(0.2px)" }}
          />
        </div>
      </div>
    </div>
  );
}

