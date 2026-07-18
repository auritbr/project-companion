import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { news, newsTags, heroImages } from "../lib/site-data";
import { Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  component: Noticias,
  head: () => ({
    meta: [
      { title: "Notícias — Biblioteca Comunitária" },
      { name: "description", content: "Registros das atividades, projetos e ações da biblioteca comunitária." },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
});

const PER_PAGE = 6;

function Noticias() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("Todas");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return news.filter((n) => {
      const matchTag = tag === "Todas" || n.tag === tag;
      const matchQ = !q || n.title.toLowerCase().includes(q.toLowerCase());
      return matchTag && matchQ;
    });
  }, [q, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <>
      <PageHero title="Notícias" breadcrumbs={[{ label: "Notícias" }]} image={heroImages.noticias} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <form onSubmit={(e) => { e.preventDefault(); setPage(1); }} className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input aria-label="Buscar notícias" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar notícias" className="flex-1 bg-transparent text-sm outline-none" />
              <button className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Buscar</button>
            </form>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Todas", ...newsTags].map((t) => (
              <button key={t} onClick={() => { setTag(t); setPage(1); }} className={`rounded-full border px-3 py-1.5 text-xs ${tag === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:bg-muted"}`}>{t}</button>
            ))}
          </div>

          {pageItems.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-[var(--surface)] p-10 text-center text-muted-foreground">
              {q ? "Nenhum resultado encontrado para a pesquisa." : "Nenhuma notícia cadastrada."}
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((n) => (
                <article key={n.slug} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <Link to={`/noticias/${n.slug}`} className="block aspect-[16/10] overflow-hidden bg-[oklch(0.94_0.02_240)]">
                    <img src={n.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full px-2 py-0.5 font-semibold text-white" style={{ backgroundColor: "var(--brand-blue)" }}>{n.tag}</span>
                      <span className="text-muted-foreground">{n.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{n.excerpt}</p>
                    <Link to={`/noticias/${n.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Leia mais <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Paginação" className="mt-10 flex flex-wrap items-center justify-center gap-1 text-sm">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-md border border-border bg-white px-3 py-1.5 disabled:opacity-50" disabled={currentPage === 1}>Anterior</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} onClick={() => setPage(n)} className={`rounded-md border px-3 py-1.5 ${currentPage === n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white"}`}>{n}</button>
              ))}
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-md border border-border bg-white px-3 py-1.5 disabled:opacity-50" disabled={currentPage === totalPages}>Próxima</button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}