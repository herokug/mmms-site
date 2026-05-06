import { cn } from "@/lib/utils";

export function Section({ className, children }) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </section>
  );
}

