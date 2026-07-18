import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { documents } from "../lib/site-data";
import { ChevronDown, Download, Eye, FileText, X, Archive, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos/transparencia")({
  component: Transparencia,
  head: () => ({
    meta: [
      { title: "Transparência — Biblioteca Comunitária" },
      {
        name: "description",
        content:
          "Documentos institucionais, relatórios de atividades, prestações de contas e demais registros públicos da biblioteca comunitária.",
      },
      { property: "og:title", content: "Transparência — Biblioteca Comunitária" },
      {
        property: "og:description",
        content: "Consulta pública de documentos e prestações de contas da biblioteca comunitária.",
      },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
});

const SAMPLE_PDF = "https://www.africau.edu/images/default/sample.pdf";

const accentPool = [
  "var(--brand-blue)",
  "var(--brand-green)",
  "var(--brand-orange)",
  "var(--brand-red)",
  "var(--brand-pink)",
  "var(--brand-purple)",
  "var(--brand-yellow)",
];

type Viewer = { name: string; url: string } | null;

function Transparencia() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [viewer, setViewer] = useState<Viewer>(null);

  const categories = Array.from(new Set(documents.map((d) => d.category)));
  const toggle = (c: string) => setOpen((o) => ({ ...o, [c]: !o[c] }));

  useEffect(() => {
    if (!viewer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewer(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [viewer]);

  return (
    <>
      <PageHero
        title="Transparência"
        breadcrumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-primary">
            <Archive className="h-3.5 w-3.5" /> Consulta pública
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Acervo institucional</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Acesse documentos, certificados, reconhecimentos, portfólios e registros da organização,
            organizados por categoria para facilitar a consulta pública.
          </p>
        </div>

        <div className="mx-auto max-w-[1080px] px-4 pb-12">

          <div className="mt-8 space-y-3">
            {categories.map((category, i) => {
              const items = documents.filter((d) => d.category === category);
              const isOpen = !!open[category];
              const accent = accentPool[i % accentPool.length];
              const panelId = `cat-${i}`;
              return (
                <div key={category} className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => toggle(category)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-[var(--surface)]"
                  >
                    <span
                      className="inline-block h-8 w-1.5 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                    <div className="flex-1">
                      <div className="font-display text-base font-bold">{category}</div>
                      <div className="text-xs text-muted-foreground">
                        {items.length} documento{items.length === 1 ? "" : "s"}
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <ul id={panelId} className="divide-y divide-border border-t border-border">
                      {items.map((d, k) => (
                        <li key={k} className="flex flex-wrap items-center gap-3 px-5 py-4">
                          <FileText className="h-4 w-4 shrink-0 text-primary" />
                          <span className="flex-1 font-medium">{d.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {d.year} · {d.format} · {d.size}
                          </span>
                          <button
                            type="button"
                            onClick={() => setViewer({ name: d.name, url: SAMPLE_PDF })}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold hover:bg-muted"
                          >
                            <Eye className="h-3.5 w-3.5" /> Visualizar
                          </button>
                          <a
                            href={SAMPLE_PDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold hover:bg-muted"
                          >
                            <Download className="h-3.5 w-3.5" /> Baixar
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {viewer && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização do documento ${viewer.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 md:p-6"
          onClick={() => setViewer(null)}
        >
          <div
            className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Visualização de documento</div>
                <div className="truncate font-display text-base font-bold">{viewer.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={viewer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted"
                >
                  <Download className="h-3.5 w-3.5" /> Baixar
                </a>
                <button
                  type="button"
                  onClick={() => setViewer(null)}
                  aria-label="Fechar visualização"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe title={viewer.name} src={viewer.url} className="min-h-0 w-full flex-1" />
          </div>
        </div>
      )}
    </>
  );
}