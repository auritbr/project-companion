import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { documents, heroImages } from "../lib/site-data";
import { ChevronDown, Download, FileText, Search } from "lucide-react";

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
  const [open, setOpen] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(documents.map((d) => d.category))),
    [],
  );

  const filtered = documents.filter(
    (d) => !q || d.name.toLowerCase().includes(q.toLowerCase()) || d.category.toLowerCase().includes(q.toLowerCase()),
  );
  const grouped = categories.map((c) => ({ category: c, items: filtered.filter((d) => d.category === c) }));
  const accentPool = ["var(--brand-blue)","var(--brand-green)","var(--brand-orange)","var(--brand-red)","var(--brand-pink)","var(--brand-purple)","var(--brand-yellow)"];

  return (
    <>
      <PageHero title="Transparência" breadcrumbs={[{ label: "Transparência" }]} image={heroImages.transparencia} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-4 py-12">
          <label className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              aria-label="Buscar documento"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar documento por nome ou categoria"
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </label>

          <div className="mt-8 space-y-3">
            {grouped.map(({ category, items }, i) => {
              const isOpen = q ? items.length > 0 : open === category;
              const accent = accentPool[i % accentPool.length];
              return (
                <div key={category} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen((o) => (o === category ? null : category))}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-[var(--surface)]"
                  >
                    <span className="inline-block h-8 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    <div className="flex-1">
                      <div className="font-display text-base font-bold">{category}</div>
                      <div className="text-xs text-muted-foreground">{items.length} documento(s)</div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <ul className="divide-y divide-border border-t border-border">
                      {items.length === 0 ? (
                        <li className="px-5 py-6 text-sm text-muted-foreground">Nenhum documento nesta categoria.</li>
                      ) : (
                        items.map((d, k) => (
                          <li key={k} className="flex flex-wrap items-center gap-3 px-5 py-4">
                            <FileText className="h-4 w-4 shrink-0 text-primary" />
                            <span className="flex-1 font-medium">{d.name}</span>
                            <span className="text-xs text-muted-foreground">{d.year} · {d.format} · {d.size}</span>
                            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold hover:bg-muted"><Download className="h-3.5 w-3.5" /> Baixar</a>
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
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