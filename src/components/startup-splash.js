"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

export function StartupSplash() {
  const [visible, setVisible] = useState(true);
  const bars = useMemo(() => Array.from({ length: 26 }), []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="mmms-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[120] grid place-items-center bg-black"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_20%,rgba(255,106,0,0.18),transparent_60%)]" />
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0.38, 0.55, 0.38] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(600px 200px at 50% 85%, rgba(255,176,0,0.10), transparent 70%)",
            }}
          />

          <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative h-24 w-24 overflow-hidden rounded-full border border-black/75 bg-white/5 shadow-[0_0_0_1px_rgba(0,0,0,0.65)_inset,0_0_0_4px_rgba(0,0,0,0.38),0_0_22px_rgba(255,176,0,0.12),0_12px_42px_rgba(0,0,0,0.82)] sm:h-28 sm:w-28"
            >
              <Image
                src={assetPath("/assets/logo1.jpeg")}
                alt="Mathara Malli Music Studio"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="mt-5 text-center text-base font-semibold tracking-[0.14em] text-white/90 sm:text-lg"
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              MATHARA MALLI MUSIC STUDIO
            </motion.div>

            <div className="mt-6 flex items-end justify-center gap-1.5">
              {bars.map((_, i) => {
                const min = 8 + (i % 5) * 2;
                const max = 18 + (i % 7) * 4;
                return (
                  <motion.div
                    key={i}
                    className="w-[4px] rounded-full sm:w-[5px]"
                    style={{
                      height: min,
                      opacity: 0.26 + (i % 4) * 0.12,
                      background:
                        "linear-gradient(to top, rgba(255,106,0,0.95), rgba(255,176,0,0.60), rgba(255,255,255,0.30))",
                      boxShadow:
                        "0 0 16px rgba(255,106,0,0.35), 0 0 30px rgba(255,176,0,0.2)",
                    }}
                    animate={{ height: [min, max, min] }}
                    transition={{
                      duration: 1.1 + (i % 6) * 0.15,
                      repeat: Infinity,
                      delay: (i % 8) * 0.06,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

