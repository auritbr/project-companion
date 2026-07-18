import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  title,
  breadcrumbs,
  accent = "var(--brand-blue)",
  image,
}: {
  title: string;
  /** Aceito por compatibilidade — não é renderizado nos heros internos. */
  description?: string;
  breadcrumbs: { label: string; to?: string }[];
  accent?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--surface)]">
      {/* formas orgânicas inspiradas em livros abertos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-20 h-64 w-64 opacity-20"
        style={{ backgroundColor: "var(--brand-orange)", borderRadius: "60% 40% 45% 55% / 55% 55% 45% 45%" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 opacity-15"
        style={{ backgroundColor: accent, borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%" }}
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-10 md:py-16">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-5 flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-10 w-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="relative">
          {/* moldura em forma de livro aberto */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-0"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, var(--brand-orange) 100%)`,
              borderRadius: "60% 40% 55% 45% / 55% 55% 45% 45%",
              opacity: 0.25,
            }}
          />
          <div
            className="relative overflow-hidden shadow-lg"
            style={{ borderRadius: "48% 52% 46% 54% / 54% 46% 54% 46%" }}
          >
            <div className="aspect-[4/3] w-full bg-[oklch(0.94_0.02_240)]">
              {image ? (
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            {/* "lombada" central que sugere um livro aberto */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}