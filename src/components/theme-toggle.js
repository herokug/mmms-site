"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "group inline-flex items-center justify-center rounded-full",
        "border border-black/10 bg-black/5 px-3 py-2 backdrop-blur-md",
        "text-[color:var(--muted)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset]",
        "transition hover:bg-black/10 hover:text-[color:var(--fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60",
        "dark:border-white/10 dark:bg-white/5 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] dark:hover:bg-white/10",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {resolvedTheme ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
      <span className="ml-2 hidden text-xs font-medium sm:inline">
        {resolvedTheme ? (isDark ? "Light" : "Dark") : "Theme"}
      </span>
    </button>
  );
}

