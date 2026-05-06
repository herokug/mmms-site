import { cn } from "@/lib/utils";

export function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        "dark:shadow-[0_18px_55px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      {children}
    </div>
  );
}

