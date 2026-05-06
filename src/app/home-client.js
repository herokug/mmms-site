"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AudioLines, MapPin, Phone, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Section } from "@/components/section";
import { OriginalsSlider } from "@/components/originals-slider";
import { YouTubeCard } from "@/components/youtube-card";
import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function WaveUnderline() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 520 56"
      className="mt-4 h-10 w-full max-w-[520px]"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    >
      <defs>
        <linearGradient id="mmmsWave" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(255,106,0,0)" />
          <stop offset="20%" stopColor="rgba(255,106,0,0.95)" />
          <stop offset="55%" stopColor="rgba(255,176,0,0.85)" />
          <stop offset="80%" stopColor="rgba(255,106,0,0.95)" />
          <stop offset="100%" stopColor="rgba(255,106,0,0)" />
        </linearGradient>
        <filter id="mmmsGlow" x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d="M10,30 C38,30 38,12 66,12 C94,12 94,44 122,44 C150,44 150,18 178,18 C206,18 206,38 234,38 C262,38 262,10 290,10 C318,10 318,46 346,46 C374,46 374,22 402,22 C430,22 430,36 458,36 C486,36 486,28 510,28"
        fill="none"
        stroke="url(#mmmsWave)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#mmmsGlow)"
        strokeDasharray="14 10"
        animate={{ strokeDashoffset: [0, -96] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />

      <motion.path
        d="M10,30 C38,30 38,12 66,12 C94,12 94,44 122,44 C150,44 150,18 178,18 C206,18 206,38 234,38 C262,38 262,10 290,10 C318,10 318,46 346,46 C374,46 374,22 402,22 C430,22 430,36 458,36 C486,36 486,28 510,28"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </motion.svg>
  );
}

function MusicM() {
  return (
    <span className="relative inline-grid place-items-center">
      <motion.span
        aria-hidden
        className="absolute -inset-2 rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(255,106,0,0.0), rgba(255,106,0,0.55), rgba(255,176,0,0.25), rgba(255,255,255,0.18), rgba(255,106,0,0.0))",
          filter: "blur(0.2px)",
          opacity: 0.9,
          mixBlendMode: "screen",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        aria-hidden
        className="absolute -inset-2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22), rgba(255,176,0,0.12), rgba(0,0,0,0) 65%)",
          filter: "blur(10px)",
          opacity: 0.55,
        }}
        animate={{ opacity: [0.38, 0.62, 0.38] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute -inset-1 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 56%, rgba(255,255,255,0.12) 57%, rgba(0,0,0,0) 61%)",
          opacity: 0.75,
          mixBlendMode: "overlay",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="relative z-10"
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        M
      </motion.span>
    </span>
  );
}

export function HomeClient() {
  return (
    <div className="pb-16">
      <Section className="pt-10 sm:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="sinhala-tagline inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-[color:var(--fg)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/90 sm:text-xl">
              <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
              මිනිසා තුළ සැඟවුණු නිර්මාණාත්මකම යකා
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-6xl">
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                <motion.span
                  className="relative inline-block text-fluid-glow"
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {"Mathara Malli "}
                  <span className="inline-flex items-baseline gap-0">
                    <MusicM />
                    {"usic"}
                  </span>
                  {" Studio"}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] rounded-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                      mixBlendMode: "screen",
                      filter: "blur(2px)",
                    }}
                    animate={{ x: ["-40%", "340%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1.2,
                    }}
                  />
                </motion.span>

                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-6 -inset-y-5 -z-10 rounded-[34px] blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 40%, rgba(255,106,0,0.18), rgba(255,176,0,0.10), transparent 70%)",
                  }}
                  animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.03, 1] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </h1>
            <WaveUnderline />
            <div className="text-base font-semibold tracking-tight text-[color:var(--fg)]/90 sm:text-lg">
              Beats, texture, and emotion —{" "}
              <span className="text-[color:var(--accent)]">release‑ready</span>.
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              Production, recording, foley, and mixing/mastering — built around
              groove and clarity. Bring a voice note, a melody, or a reference,
              and we’ll shape it into a track that hits on phones, cars, and
              big speakers.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.whatsapp}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_16px_45px_rgba(255,106,0,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_55px_rgba(255,106,0,0.45)]"
              >
                <Phone className="h-4 w-4" />
                Call: {site.phone}
              </a>
              <a
                href={`https://wa.me/94${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <AudioLines className="h-4 w-4 text-[color:var(--accent)]" />
                WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/6 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md transition hover:bg-black/12 dark:border-white/10 dark:bg-black/30 dark:hover:bg-black/40"
              >
                Explore services
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                <MapPin className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                {site.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/5 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={assetPath("/assets/cover.jpeg")}
                  alt="Mathara Malli Music Studio cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/8 to-transparent dark:from-black/60 dark:via-black/20" />
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
                {[
                  "Production",
                  "Recording",
                  "Mix & Master",
                  "Dance Tracks",
                  "Foley",
                  "Melody & Lyrics",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-black/10 bg-black/8 px-4 py-3 text-xs font-semibold text-[color:var(--fg)] dark:border-white/10 dark:bg-black/25 dark:text-white/80"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[color:var(--accent)]/20 blur-2xl" />
          </motion.div>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-[color:var(--fg)]">
                  Our products & services
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  From the first idea to release-ready sound.
                </div>
              </div>
              <Link
                href="/services"
                className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                View all
              </Link>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {site.services.slice(0, 4).map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-black/10 bg-black/8 p-4 dark:border-white/10 dark:bg-black/20"
                >
                  <div className="text-sm font-semibold text-[color:var(--fg)]">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">
                    {s.description}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Why choose us
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">
              Clean workflow, inspiring vibe, serious results.
            </div>
            <div className="mt-5 space-y-3 text-sm text-[color:var(--muted)]">
              {[
                "Producer + Foley engineer mindset",
                "Modern, punchy sound — still musical",
                "Artist comfort first: session flow matters",
                "Delivery-ready masters for streaming",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/why-choose-us"
                className="inline-flex rounded-full bg-[color:var(--accent)]/15 px-4 py-2 text-xs font-semibold text-[color:var(--accent)] ring-1 ring-[color:var(--accent)]/25 hover:bg-[color:var(--accent)]/20"
              >
                Learn more
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section className="pt-12 sm:pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Originals
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">
              A few of our own releases and productions.
            </div>
          </div>
          <a
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:inline"
          >
            Visit channel
          </a>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <OriginalsSlider className="md:col-span-1">
            {site.originals.map((v) => (
              <div key={v.youtubeId} className="px-0">
                <YouTubeCard
                  title={v.title}
                  youtubeId={v.youtubeId}
                  href={v.url}
                />
              </div>
            ))}
          </OriginalsSlider>
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold text-[color:var(--fg)]">
                Ready to create?
              </div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                Send your idea (voice note / demo) and we’ll plan the session.
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/94${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black"
              >
                WhatsApp now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}

