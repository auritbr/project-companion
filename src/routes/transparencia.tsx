import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { documents } from "../lib/site-data";
import { Download, FileText, Search } from "lucide-react";

export const Route = createFileRoute("/transparencia")({
  component: Transparencia,
  head: () => ({
    meta: [
      { title: "Transparência — Biblioteca Comunitária" },
      { name: "description", content: "Documentos institucionais, relatórios de atividades, prestações de contas e demais registros públicos da biblioteca comunitária." },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
});

function Transparencia() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");

  const categories = useMemo(() => ["Todas", ...Array.from(new Set(documents.map((d) => d.category)))], []);
  const years = useMemo(() => ["Todos", ...Array.from(new Set(documents.map((d) => d.year)))], []);

  const items = documents.filter((d) => {
    const okQ = !q || d.name.toLowerCase().includes(q.toLowerCase());
    const okC = cat === "Todas" || d.category === cat;
    const okY = year === "Todos" || d.year === year;
    return okQ && okC && okY;
  });

  return (
    <>
      <PageHero title="Transparência" description="Compromisso público com a gestão transparente e o acesso à informação. Todos os documentos abaixo são demonstrativos e serão substituídos pelos arquivos definitivos." breadcrumbs={[{ label: "Transparência" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-10">
          <div className="rounded-2xl border border-border bg-[var(--surface)] p-5 md:p-6">
            <div className="grid gap-3 md:grid-cols-[1fr_220px_180px]">
              <label className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input aria-label="Buscar documento" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar documento" className="flex-1 bg-transparent text-sm outline-none" />
              </label>
              <select aria-label="Categoria" value={cat} onChange={(e) => setCat(e.target.value)} className="rounded-full border border-border bg-white px-3 py-2 text-sm">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <select aria-label="Ano" value={year} onChange={(e) => setYear(e.target.value)} className="rounded-full border border-border bg-white px-3 py-2 text-sm">
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white">
            <div className="hidden grid-cols-[1fr_200px_140px_140px_120px] items-center gap-3 border-b border-border bg-[var(--surface)] px-4 py-3 text-xs font-semibold uppercase text-muted-foreground md:grid">
              <div>Documento</div>
              <div>Categoria</div>
              <div>Ano</div>
              <div>Formato</div>
              <div className="text-right">Ação</div>
            </div>
            <ul className="divide-y divide-border">
              {items.map((d, i) => (
                <li key={i} className="grid gap-2 px-4 py-4 md:grid-cols-[1fr_200px_140px_140px_120px] md:items-center">
                  <div className="flex items-center gap-2 font-medium"><FileText className="h-4 w-4 text-primary" /> {d.name}</div>
                  <div className="text-sm text-muted-foreground md:text-foreground">{d.category}</div>
                  <div className="text-sm text-muted-foreground md:text-foreground">{d.year}</div>
                  <div className="text-sm text-muted-foreground md:text-foreground">{d.format} · {d.size}</div>
                  <div className="md:text-right">
                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold hover:bg-muted"><Download className="h-3.5 w-3.5" /> Baixar</a>
                  </div>
                </li>
              ))}
              {items.length === 0 && (
                <li className="px-4 py-10 text-center text-muted-foreground">Nenhum documento encontrado.</li>
              )}
            </ul>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Governança", d: "Estrutura organizacional, estatuto e conselhos deliberativos." },
              { t: "Gestão de recursos", d: "Origem dos recursos, aplicação e prestação de contas." },
              { t: "Acesso à informação", d: "Canais para solicitação e envio de documentos institucionais." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display text-lg font-bold">{b.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}