import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { team, heroImages } from "../lib/site-data";

export const Route = createFileRoute("/quem-somos/equipe")({
  component: Equipe,
  head: () => ({
    meta: [
      { title: "Equipe — Biblioteca Comunitária" },
      { name: "description", content: "Conheça as pessoas que fazem parte da biblioteca comunitária." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
});

const spineColors = [
  "var(--brand-blue)",
  "var(--brand-green)",
  "var(--brand-orange)",
  "var(--brand-red)",
  "var(--brand-pink)",
  "var(--brand-purple)",
  "var(--brand-yellow)",
];

function Equipe() {
  // Agrupamento por área — sem filtros, todos visíveis simultaneamente.
  const grouped = team.reduce<Record<string, typeof team>>((acc, m) => {
    (acc[m.area] ||= []).push(m);
    return acc;
  }, {});
  const areasOrdered = ["Diretoria", "Coordenação", "Educadores", "Mediação", "Administrativo", "Voluntariado"].filter(
    (a) => grouped[a]?.length,
  );

  return (
    <>
      <PageHero title="Nossa equipe" breadcrumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]} image={heroImages.equipe} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          {areasOrdered.map((area, ai) => (
            <div key={area} className="mt-12 first:mt-0">
              <div className="flex items-center gap-3">
                <span className="inline-block h-8 w-1.5 rounded-full" style={{ backgroundColor: spineColors[ai % spineColors.length] }} />
                <h2 className="font-display text-2xl font-bold">{area}</h2>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {grouped[area].map((m, i) => {
                  const spine = spineColors[(ai + i) % spineColors.length];
                  return (
                    <article
                      key={i}
                      className="group relative overflow-hidden rounded-r-2xl rounded-l-md border border-border bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
                      style={{ borderLeft: `10px solid ${spine}` }}
                    >
                      {/* "lombada" com pequenas linhas decorativas */}
                      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-2.5" style={{ backgroundColor: spine }}>
                        <div className="absolute left-1/2 top-4 h-1 w-1 -translate-x-1/2 rounded-full bg-white/60" />
                        <div className="absolute left-1/2 bottom-4 h-1 w-1 -translate-x-1/2 rounded-full bg-white/60" />
                      </div>

                      <div className="aspect-[3/4] w-full overflow-hidden bg-[oklch(0.94_0.02_240)]">
                        <img src={(m as { photo: string }).photo} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>

                      <div className="px-4 py-4">
                        <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: spine }}>{m.role}</div>
                        <div className="mt-1 font-display text-base font-bold leading-snug">{m.name}</div>
                        <div className="mt-2 h-px w-8" style={{ backgroundColor: spine }} />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}