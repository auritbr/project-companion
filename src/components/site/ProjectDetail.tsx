import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./PageHero";
import { projects, projectImages, news, type ProjectSlug } from "../../lib/site-data";
import { ArrowRight, Users, MapPin, ChevronLeft, ChevronRight, X, Download, FileText, Quote } from "lucide-react";

export function ProjectDetail({ slug }: { slug: ProjectSlug }) {
  const project = projects.find((p) => p.slug === slug)!;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gallery = Array.from({ length: 6 }, (_, i) => i);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v === null ? v : (v - 1 + gallery.length) % gallery.length));
  const next = () => setLightbox((v) => (v === null ? v : (v + 1) % gallery.length));

  return (
    <>
      <PageHero
        title={project.name}
        breadcrumbs={[{ label: "Projetos", to: "/projetos" }, { label: project.name }]}
        accent={project.accent}
        image={projectImages[project.slug]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl" style={{ backgroundColor: project.accent }}>
                <img src={projectImages[project.slug]} alt="" className="h-full w-full object-cover" />
              </div>

              <div className="mt-8 space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold">Apresentação</h2>
                  <p className="mt-3 text-muted-foreground">{project.summary}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Justificativa</h2>
                  <p className="mt-3 text-muted-foreground">
                    O projeto responde à necessidade de ampliar o acesso à leitura na comunidade,
                    fortalecendo a formação de leitores e a circulação de livros junto a diferentes
                    públicos. Este é um texto demonstrativo e será substituído pelo conteúdo definitivo.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Objetivos</h2>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {project.objectives.map((o) => (
                      <li key={o} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Atividades</h2>
                  <ul className="mt-3 grid gap-2 md:grid-cols-2">
                    {project.activities.map((a) => (
                      <li key={a} className="rounded-xl border border-border bg-[var(--surface)] px-3 py-2 text-sm">{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Metodologia</h2>
                  <ol className="mt-3 space-y-2 text-muted-foreground">
                    {project.methodology.map((m, i) => (
                      <li key={m} className="flex gap-3">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: project.accent }}>{i + 1}</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Locais de realização</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.locations.map((l) => (
                      <li key={l} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm"><MapPin className="h-3.5 w-3.5" /> {l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Equipe e parceiros</h2>
                  <p className="mt-3 text-muted-foreground">Equipe formada por coordenação, mediadores de leitura, educadores e voluntários. Parcerias com escolas, coletivos e apoiadores — informações a serem cadastradas.</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Resultados e indicadores</h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {["Participantes atendidos","Atividades realizadas","Livros em circulação"].map((k) => (
                      <div key={k} className="rounded-2xl border border-border bg-white p-4">
                        <div className="text-xs font-semibold uppercase text-muted-foreground">{k}</div>
                        <div className="mt-1 font-display text-lg font-bold">Indicador editável</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Galeria */}
                <div>
                  <h2 className="font-display text-2xl font-bold">Galeria</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {gallery.map((i) => (
                      <button key={i} onClick={() => setLightbox(i)} className="aspect-[4/3] overflow-hidden rounded-xl bg-[oklch(0.94_0.02_240)] text-muted-foreground text-xs">
                        <div className="grid h-full place-items-center">Imagem {i + 1}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Documentos */}
                <div>
                  <h2 className="font-display text-2xl font-bold">Documentos</h2>
                  <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-white">
                    {["Plano do projeto","Relatório demonstrativo"].map((d) => (
                      <li key={d} className="flex items-center justify-between gap-3 p-4">
                        <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> {d}</span>
                        <a href="#" className="inline-flex items-center gap-2 text-sm text-primary"><Download className="h-4 w-4" /> Baixar</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Depoimento */}
                <div className="rounded-2xl border border-border bg-[var(--surface)] p-6">
                  <Quote className="h-6 w-6 text-primary" />
                  <p className="mt-2 text-muted-foreground">“Depoimento demonstrativo sobre a participação no projeto — conteúdo editável.”</p>
                  <div className="mt-2 text-sm font-semibold">Nome demonstrativo</div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Apoiar este projeto <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold">Entrar em contato</Link>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="text-xs font-semibold uppercase text-muted-foreground">Categoria</div>
                <div className="mt-1 font-semibold">{project.category}</div>
                <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Status</div>
                <div className="mt-1 font-semibold">{project.status}</div>
                <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Período</div>
                <div className="mt-1 font-semibold">{project.period}</div>
                <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Público</div>
                <div className="mt-1 flex items-start gap-2 text-sm"><Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{project.audience}</div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <div className="font-display text-base font-bold">Notícias relacionadas</div>
                <ul className="mt-3 space-y-3">
                  {news.slice(0, 3).map((n) => (
                    <li key={n.slug}>
                      <Link to={`/noticias/${n.slug}`} className="block text-sm font-medium hover:text-primary">{n.title}</Link>
                      <div className="text-xs text-muted-foreground">{n.date}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4" onClick={close} onKeyDown={(e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); }} tabIndex={-1}>
          <button aria-label="Fechar" onClick={close} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><X className="h-5 w-5" /></button>
          <button aria-label="Anterior" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label="Próxima" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><ChevronRight className="h-5 w-5" /></button>
          <div className="max-h-[80vh] w-full max-w-3xl rounded-2xl bg-[oklch(0.94_0.02_240)] p-10 text-center text-muted-foreground" onClick={(e) => e.stopPropagation()}>
            <div className="grid aspect-[16/10] place-items-center">Imagem {lightbox + 1}</div>
            <div className="mt-3 text-xs text-white/80">Legenda demonstrativa — Crédito demonstrativo · {lightbox + 1}/{gallery.length}</div>
          </div>
        </div>
      )}
    </>
  );
}