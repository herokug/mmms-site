import Link from "next/link";
import { GlassCard } from "@/components/glass-card";
import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata = {
  title: "Services • Mathara Malli Music Studio",
  description:
    "Music production, recording, dance track creation, melody & lyrics, mixing & mastering, and foley recording.",
};

export default function ServicesPage() {
  return (
    <PageShell
      title="Our products & services"
      subtitle="Production, performance, and post — crafted with a clean modern sound and a traditional Matara vibe."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {site.services.map((s) => (
          <GlassCard key={s.title}>
            <div className="text-base font-semibold text-[color:var(--fg)]">
              {s.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
              {s.description}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--muted)]">
                Studio session
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--muted)]">
                Artist-friendly flow
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--muted)]">
                Release-ready
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[color:var(--muted)]">
          Want a custom package for your project?
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black"
        >
          Contact & pricing
        </Link>
      </div>
    </PageShell>
  );
}

