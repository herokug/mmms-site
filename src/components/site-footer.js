import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-[color:var(--fg)]">
            {site.name}
          </div>
          <p className="text-sm text-[color:var(--muted)]">{site.tagline}</p>
          <p className="text-sm text-[color:var(--muted)]">{site.location}</p>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-[color:var(--fg)]">
            Quick links
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              className="text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              href="/services"
            >
              Our products & services
            </Link>
            <Link
              className="text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              href="/why-choose-us"
            >
              Why choose us
            </Link>
            <Link
              className="text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              href="/about"
            >
              About us
            </Link>
            <Link
              className="text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-[color:var(--fg)]">
            Contact
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            <div>
              Call / WhatsApp:{" "}
              <a
                className="font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)]"
                href={`tel:${site.whatsapp}`}
              >
                {site.phone}
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                className="font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)]"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-[color:var(--muted)] hover:bg-black/10 hover:text-[color:var(--fg)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-[color:var(--muted)] hover:bg-black/10 hover:text-[color:var(--fg)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-[color:var(--muted)] hover:bg-black/10 hover:text-[color:var(--fg)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                href={site.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-xs text-[color:var(--muted)] sm:px-6">
          <div>
            © {new Date().getFullYear()} {site.name}
          </div>
          <div className="hidden sm:block">
            Built for Vercel • Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}

