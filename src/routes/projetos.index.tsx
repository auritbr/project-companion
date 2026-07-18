import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { projects, projectImages } from "../lib/site-data";
import { ArrowRight, BookMarked } from "lucide-react";

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
        <div className="mx-auto max-w-[1080px] px-4 py-12 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-primary">
            <BookMarked className="h-3.5 w-3.5" /> Frentes de atuação
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold">Três frentes que sustentam a biblioteca viva</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Cada projeto é uma página do nosso trabalho comunitário — leitura compartilhada, cuidado com o acervo
            e formação literária caminham juntos para aproximar pessoas dos livros.
          </p>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to={`/projetos/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div aria-hidden className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: p.accent }} />
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={projectImages[p.slug]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: p.accent }}>{p.category}</div>
                  <h3 className="mt-1 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Conheça o projeto <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}