import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/glass-card";
import { PageShell } from "@/components/page-shell";
import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site";

export const metadata = {
  title: "About • Mathara Malli Music Studio",
  description:
    "The studio, the vibe, and the meaning behind Mathara Malli — modern sound with Matara tradition.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About us"
      subtitle="A modern studio with a traditional Matara soul — built for artists who want inspiring sessions and clean, powerful sound."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="text-sm font-semibold text-[color:var(--fg)]">
            The vibe
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
            We produce music where modern clarity meets the soul of tradition.
            Our sound is built on the rhythmic energy of ancient chants and the
            serene, echoing calm of sacred spaces. At our core is the{" "}
            <span className="text-[color:var(--accent)]">
              &ldquo;warm orange flame&rdquo;
            </span>
            {" "}a symbol of hand-crafted precision and courage that keeps
            heritage music alive. We focus on raw, authentic production that
            honors the past while resonating in the present.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            Whether you’re building a dance track, recording vocals, or finishing
            a full mix & master, the goal is the same: a sound that moves people.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-[color:var(--muted)]">
              Want to know the producer behind the studio?
            </div>
            <Link
              href="/about/me"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)]/15 px-5 py-3 text-sm font-semibold text-[color:var(--accent)] ring-1 ring-[color:var(--accent)]/25 hover:bg-[color:var(--accent)]/20"
            >
              About me
            </Link>
          </div>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Location
            </div>
            <div className="mt-2 text-sm text-[color:var(--muted)]">
              {site.location}
            </div>
          </GlassCard>

          <GlassCard className="p-0 overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={assetPath("/assets/cover.jpeg")}
                alt="Studio cover"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-sm font-semibold text-white">
                  {site.name}
                </div>
                <div className="mt-1 text-xs text-white/70">
                  Modern sound • Matara tradition
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}

