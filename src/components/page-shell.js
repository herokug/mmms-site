import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

export function PageShell({ title, subtitle, children, className }) {
  return (
    <div className={cn("pb-16", className)}>
      <Section className="pt-10 sm:pt-14">
        <div className="max-w-2xl">
          <div className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-4xl">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              {subtitle}
            </div>
          ) : null}
        </div>
      </Section>
      <Section className="pt-8 sm:pt-10">{children}</Section>
    </div>
  );
}

