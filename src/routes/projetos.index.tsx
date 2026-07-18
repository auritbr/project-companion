import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { projects, projectImages, heroImages } from "../lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos/")({
  component: Projetos,
  head: () => ({
    meta: [
      { title: "Projetos — Biblioteca Comunitária" },
      { name: "description", content: "Conheça os projetos da biblioteca comunitária: leitura, formação, circulação de livros e ações culturais." },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
});

const filters = ["todos","leitura","formação","circulação de livros","oficinas","comunidade","projetos em andamento","projetos concluídos"];

function Projetos() {
  const [filter, setFilter] = useState("todos");
  const items = useMemo(() => {
    if (filter === "todos") return projects;
    if (filter === "projetos em andamento") return projects.filter((p) => p.status === "Em andamento");
    if (filter === "projetos concluídos") return projects.filter((p) => p.status === "Concluído");
    return projects.filter((p) => p.category.toLowerCase().includes(filter));
  }, [filter]);

  return (
    <>
      <PageHero title="Nossos Projetos" breadcrumbs={[{ label: "Projetos" }]} image={heroImages.projetos} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-sm capitalize ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:bg-muted"}`}>{f}</button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <article key={p.slug} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: p.accent }}>
                  <img src={projectImages[p.slug]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold">{p.category}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">{p.status}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-3 grid gap-1 text-xs text-muted-foreground">
                    <div><span className="font-semibold text-foreground">Público:</span> {p.audience}</div>
                    <div><span className="font-semibold text-foreground">Período:</span> {p.period}</div>
                  </div>
                  <Link to={`/projetos/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Ver projeto <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>

          {items.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-[var(--surface)] p-10 text-center text-muted-foreground">Nenhum projeto encontrado para este filtro.</div>
          )}
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="rounded-3xl bg-white border border-border p-8 md:p-10 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold">Vamos construir parcerias?</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">Convidamos instituições, empresas e pessoas da comunidade a desenvolver parcerias que ampliem o acesso à leitura e à cultura.</p>
            </div>
            <Link to="/contato" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground md:mt-0">Entrar em contato <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}