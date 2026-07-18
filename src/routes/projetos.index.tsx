import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { projects, projectImages } from "../lib/site-data";
import { ArrowRight, BookMarked, Users, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/projetos/")({
  component: Projetos,
  head: () => ({
    meta: [
      { title: "Projetos — Biblioteca Comunitária" },
      { name: "description", content: "Frentes de atuação da biblioteca comunitária: leitura, formação e circulação de livros." },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
});

function Projetos() {
  return (
    <>
      <PageHero title="Projetos" breadcrumbs={[{ label: "Projetos" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-4 py-14 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-primary">
            <BookMarked className="h-3.5 w-3.5" /> Frentes de atuação
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold">Três frentes que sustentam a biblioteca viva</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Cada projeto é uma página do nosso trabalho comunitário — leitura compartilhada, cuidado com o acervo
            e formação literária caminham juntos para aproximar pessoas dos livros.
          </p>
        </div>
      </section>

      {projects.map((p, idx) => {
        const reverse = idx % 2 === 1;
        const bg = idx % 2 === 0 ? "bg-[var(--surface)]" : "bg-white";
        return (
          <section key={p.slug} className={bg}>
            <div className="mx-auto max-w-[1280px] px-4 py-16">
              <div className={`grid gap-10 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                {/* IMAGEM — página de livro */}
                <div className="relative">
                  <div aria-hidden className="absolute -inset-2 rounded-[28px]" style={{ backgroundColor: p.accent, opacity: 0.12 }} />
                  <div className="relative overflow-hidden rounded-[24px] border-2 bg-white shadow-lg" style={{ borderColor: p.accent }}>
                    <div aria-hidden className={`absolute top-0 h-full w-3 ${reverse ? "right-0" : "left-0"}`} style={{ backgroundColor: p.accent }}>
                      <div className="absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-white/50" />
                    </div>
                    <img src={projectImages[p.slug]} alt={p.name} loading="lazy" className="aspect-[5/4] w-full object-cover" />
                    <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider shadow" style={{ color: p.accent }}>
                      Projeto {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* CONTEÚDO — como página editorial */}
                <div className="relative">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                    Capítulo {String(idx + 1).padStart(2, "0")} · {p.category}
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">{p.name}</h2>
                  <div aria-hidden className="mt-3 h-1 w-20 rounded-full" style={{ backgroundColor: p.accent }} />
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.summary}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-border bg-white p-3">
                      <Users className="h-4 w-4" style={{ color: p.accent }} />
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Público</div>
                      <div className="mt-0.5 text-xs font-semibold line-clamp-2">{p.audience.split(",")[0]}</div>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-3">
                      <Calendar className="h-4 w-4" style={{ color: p.accent }} />
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Período</div>
                      <div className="mt-0.5 text-xs font-semibold">{p.period}</div>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-3">
                      <MapPin className="h-4 w-4" style={{ color: p.accent }} />
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Onde</div>
                      <div className="mt-0.5 text-xs font-semibold line-clamp-2">{p.locations[0]}</div>
                    </div>
                  </div>

                  <Link
                    to={`/projetos/${p.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                    style={{ backgroundColor: p.accent }}
                  >
                    Abrir este capítulo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}