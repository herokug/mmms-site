import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why us" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/55 backdrop-blur-xl dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
            <Image
              src="/assets/logo.jpeg"
              alt={`${site.name} logo`}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-fluid">
              {site.name}
            </span>
            <span className="text-xs text-[color:var(--muted)]">
              Music Production • Foley • Mixing
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition hover:bg-black/5 hover:text-[color:var(--fg)] dark:hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[color:var(--accent)]/15 px-4 py-2 text-sm font-semibold text-[color:var(--accent)] ring-1 ring-[color:var(--accent)]/25 transition hover:bg-[color:var(--accent)]/20 sm:inline"
          >
            Book a session
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-3 md:hidden sm:px-6">
        <div className="flex flex-wrap gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-xs text-[color:var(--muted)] backdrop-blur-md transition hover:bg-black/10 hover:text-[color:var(--fg)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

