import { Breadcrumbs } from "./Breadcrumbs";
import { BookOpen } from "lucide-react";

export function PageHero({
  title,
  description,
  breadcrumbs,
  accent = "var(--brand-blue)",
}: {
  title: string;
  description?: string;
  breadcrumbs: { label: string; to?: string }[];
  accent?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--surface)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10" style={{ backgroundColor: accent }} />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full opacity-10" style={{ backgroundColor: "var(--brand-orange)" }} />
      <div className="relative mx-auto max-w-[1280px] px-4 py-10 md:py-14">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-4 flex items-start gap-4">
          <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundColor: accent }}>
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h1>
            {description && <p className="mt-3 max-w-2xl text-base text-muted-foreground">{description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}