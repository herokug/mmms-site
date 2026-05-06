"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

function buildMailto({ email, name, phone, message }) {
  const subject = `Studio inquiry — ${name || "New message"}`;
  const body = [
    `Name: ${name || "-"}`,
    `Phone/WhatsApp: ${phone || "-"}`,
    "",
    message || "",
    "",
    `Sent from: ${site.name} website`,
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
}

export function ContactClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(
    () => buildMailto({ email: site.email, name, phone, message }),
    [name, phone, message]
  );

  const wa = `https://wa.me/94${site.whatsapp.replace(/\D/g, "")}`;

  return (
    <PageShell
      title="Contact"
      subtitle="Book a session, ask about pricing, or send your demo. Fast replies on WhatsApp."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="text-sm font-semibold text-[color:var(--fg)]">
            Send a message
          </div>
          <div className="mt-1 text-sm text-[color:var(--muted)]">
            This form opens your email app with everything filled in.
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="space-y-1">
              <div className="text-xs font-semibold text-[color:var(--muted)]">
                Your name
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-[color:var(--fg)] outline-none backdrop-blur-md placeholder:text-white/35 focus:ring-2 focus:ring-[color:var(--accent)]/50"
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs font-semibold text-[color:var(--muted)]">
                Phone / WhatsApp
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07X XXX XXXX"
                className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-[color:var(--fg)] outline-none backdrop-blur-md placeholder:text-white/35 focus:ring-2 focus:ring-[color:var(--accent)]/50"
              />
            </label>
            <label className="space-y-1 sm:col-span-2">
              <div className="text-xs font-semibold text-[color:var(--muted)]">
                Message
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you want to create… (genre, references, deadline)"
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-[color:var(--fg)] outline-none backdrop-blur-md placeholder:text-white/35 focus:ring-2 focus:ring-[color:var(--accent)]/50"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={mailto}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black"
            >
              <Mail className="h-4 w-4" />
              Send email
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[color:var(--accent)]" />
              WhatsApp
            </a>
            <a
              href={`tel:${site.whatsapp}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-[color:var(--fg)] backdrop-blur-md hover:bg-black/40"
            >
              Call: {site.phone}
            </a>
          </div>
        </GlassCard>

        <div className="space-y-5">
          <GlassCard>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--accent)]/15 ring-1 ring-[color:var(--accent)]/25">
                <MapPin className="h-5 w-5 text-[color:var(--accent)]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[color:var(--fg)]">
                  Studio location
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  {site.location}
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-0 overflow-hidden">
            <div className="relative aspect-square w-full">
              <iframe
                title="Studio location map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.location
                )}&output=embed`}
              />
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm font-semibold text-[color:var(--fg)]">
              Social
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
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[color:var(--fg)] hover:bg-white/10"
                href={site.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}

