import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/glass-card";
import { PageShell } from "@/components/page-shell";
import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site";

export const metadata = {
  title: "About me • Mathara Malli Music Studio",
  description: "Music producer and foley recording engineer — Mathara Malli.",
};

export default function AboutMePage() {
  return (
    <PageShell
      title="About me"
      subtitle="Music producer and foley recording engineer — focused on detail, emotion, and modern sound."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src={assetPath("/assets/profile.jpg")}
                alt="Studio owner profile"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-lg font-semibold text-[color:var(--fg)]">
                Mathara Malli
              </div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">
                Music Producer • Foley Recording Engineer
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--fg)] hover:bg-white/10"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--fg)] hover:bg-white/10"
                  href={site.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <a
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--fg)] hover:bg-white/10"
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Music Production",
              "Dance Track Creation",
              "Recording Sessions",
              "Melody & Lyrics",
              "Mixing & Mastering",
              "Foley Recording",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-[color:var(--muted)]"
              >
                <span className="font-semibold text-[color:var(--fg)]">
                  {t}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm leading-relaxed text-[color:var(--muted)]">
            If you want a track that feels powerful and emotional, the process is
            simple: we start from your idea, shape the vibe, record clean, and
            finish with a mix and master that translates everywhere.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${site.whatsapp}`}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black"
            >
              Call: {site.phone}
            </a>
            <a
              href={`https://wa.me/94${site.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-white/10"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-black/40"
            >
              Contact
            </Link>
          </div>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Studio base
            </div>
            <div className="mt-2 text-sm text-[color:var(--muted)]">
              {site.location}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Email
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)]"
            >
              {site.email}
            </a>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}

