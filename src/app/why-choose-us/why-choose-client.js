"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Layers, Sparkles, Timer } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { PageShell } from "@/components/page-shell";

const items = [
  {
    icon: Sparkles,
    title: "Signature studio vibe",
    desc: "Liquid-glass visuals, dark elegance, and a calm creative space that helps you perform.",
  },
  {
    icon: Layers,
    title: "Producer + Foley mindset",
    desc: "We build detail: texture, movement, and realism — not just loudness.",
  },
  {
    icon: Timer,
    title: "Fast, clean workflow",
    desc: "Less waiting, more creating. Sessions are structured but flexible.",
  },
  {
    icon: BadgeCheck,
    title: "Release-ready delivery",
    desc: "Mixes and masters built for streaming and real-world listening.",
  },
];

const steps = [
  { k: "01", t: "Send your demo", d: "Voice note, beat idea, or reference track." },
  { k: "02", t: "Session plan", d: "We align on vibe, tempo, key, and direction." },
  { k: "03", t: "Create & record", d: "Production + performance with comfort first." },
  { k: "04", t: "Mix & master", d: "Clarity, punch, loudness — without harshness." },
];

export function WhyChooseClient() {
  return (
    <PageShell
      title="Why choose us"
      subtitle="A modern studio experience that stays musical — and carries the traditional Matara energy behind the name “Mathara Malli”."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--accent)]/15 ring-1 ring-[color:var(--accent)]/25">
                    <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[color:var(--fg)]">
                      {it.title}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                      {it.desc}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="text-sm font-semibold text-[color:var(--fg)]">
          How a project moves
        </div>
        <div className="mt-1 text-sm text-[color:var(--muted)]">
          Simple steps. Clean delivery.
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: idx * 0.04 }}
            >
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                <div className="text-xs font-semibold text-[color:var(--accent)]">
                  {s.k}
                </div>
                <div className="mt-2 text-sm font-semibold text-[color:var(--fg)]">
                  {s.t}
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  {s.d}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

