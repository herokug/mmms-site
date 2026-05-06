"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

function youtubeThumb(id) {
  // maxresdefault sometimes 404; fall back automatically via browser if needed
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

export function YouTubeCard({ title, youtubeId, href, className }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/30",
        "shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      <div className="relative aspect-video w-full">
        <Image
          src={youtubeThumb(youtubeId)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover opacity-95 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent dark:from-black/70 dark:via-black/20" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs text-black/75 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_rgba(255,106,0,0.7)]" />
          Originals
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white">{title}</div>
            <div className="mt-1 text-xs text-white/75 dark:text-white/65">
              Watch on YouTube
            </div>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--accent)]/18 ring-1 ring-[color:var(--accent)]/30 transition group-hover:bg-[color:var(--accent)]/24">
            <Play className="h-5 w-5 text-[color:var(--accent)]" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

