import { Breadcrumbs } from "./Breadcrumbs";

const palette = [
  "var(--brand-blue)",
  "var(--brand-green)",
  "var(--brand-orange)",
  "var(--brand-red)",
  "var(--brand-pink)",
  "var(--brand-purple)",
  "var(--brand-yellow)",
];

type Book = {
  color: string;
  h: number;
  w: number;
  label?: string;
  tilt?: number;
};

function buildBooks(title: string): Book[] {
  const words = title.split(/\s+/).filter(Boolean);
  const decorLeft: Book[] = [
    { color: "var(--brand-green)", h: 140, w: 26 },
    { color: "var(--brand-orange)", h: 170, w: 22 },
    { color: "var(--brand-pink)", h: 150, w: 30, tilt: -5 },
    { color: "var(--brand-purple)", h: 130, w: 24 },
  ];
  const decorMid: Book[] = [
    { color: "var(--brand-yellow)", h: 155, w: 20 },
    { color: "var(--brand-blue)", h: 145, w: 28 },
    { color: "var(--brand-orange)", h: 160, w: 22 },
  ];
  const decorRight: Book[] = [
    { color: "var(--brand-red)", h: 165, w: 26, tilt: 4 },
    { color: "var(--brand-green)", h: 140, w: 22 },
    { color: "var(--brand-orange)", h: 175, w: 30 },
    { color: "var(--brand-purple)", h: 150, w: 24 },
  ];
  const titleBooks: Book[] = words.map((w, i) => ({
    color: palette[i % palette.length],
    h: 210 - (i % 2) * 18,
    w: Math.max(58, w.length * 12 + 22),
    label: w,
  }));
  const woven: Book[] = [];
  titleBooks.forEach((b, i) => {
    woven.push(b);
    if (i < titleBooks.length - 1) woven.push(decorMid[i % decorMid.length]);
  });
  return [...decorLeft, ...woven, ...decorRight];
}

export function PageHero({
  title,
  breadcrumbs,
  accent = "var(--brand-blue)",
}: {
  title: string;
  /** Aceito por compatibilidade — não é mais renderizado. */
  description?: string;
  breadcrumbs: { label: string; to?: string }[];
  accent?: string;
  /** Aceito por compatibilidade — o hero agora usa estante de livros. */
  image?: string;
}) {
  const books = buildBooks(title);
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 opacity-10"
        style={{ backgroundColor: "var(--brand-orange)", borderRadius: "60% 40% 45% 55% / 55% 55% 45% 45%" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 opacity-10"
        style={{ backgroundColor: accent, borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 pt-8 md:pt-10">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="sr-only">{title}</h1>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 pb-8 pt-6 md:pb-14 md:pt-10">
        <div
          aria-hidden
          className="flex items-end justify-center gap-1 overflow-hidden sm:gap-1.5"
        >
          {books.map((b, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-t-md shadow-[0_6px_10px_-6px_rgba(0,0,0,0.25)]"
              style={{
                backgroundColor: b.color,
                height: `clamp(${Math.round(b.h * 0.55)}px, ${(b.h / 10).toFixed(2)}vw, ${b.h}px)`,
                width: `clamp(${Math.round(b.w * 0.72)}px, ${(b.w / 14).toFixed(2)}vw, ${b.w}px)`,
                transform: b.tilt ? `rotate(${b.tilt}deg)` : undefined,
                transformOrigin: "bottom center",
              }}
            >
              <div className="pointer-events-none absolute inset-x-1 top-2 h-px bg-white/40" />
              <div className="pointer-events-none absolute inset-x-1 bottom-3 h-px bg-white/40" />
              {b.label && (
                <div className="flex h-full w-full items-center justify-center px-1">
                  <span
                    className="font-display font-bold uppercase text-white"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "clamp(11px, 1.2vw, 16px)",
                      letterSpacing: "0.18em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="mx-auto -mt-px h-3 max-w-[1200px] rounded-sm"
          style={{ background: "linear-gradient(180deg, oklch(0.72 0.07 60) 0%, oklch(0.55 0.08 60) 100%)" }}
        />
        <div aria-hidden className="mx-auto h-1.5 max-w-[1180px] rounded-b-sm bg-[oklch(0.45_0.07_60)]" />
      </div>
    </section>
  );
}