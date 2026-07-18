import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./PageHero";
import { projects, projectImages, news, type ProjectSlug } from "../../lib/site-data";
import {
  ArrowRight, Users, MapPin, ChevronLeft, ChevronRight, X, Quote,
  BookOpen, Target, Sparkles, Compass, BookMarked, Heart, MessageCircle,
} from "lucide-react";

const projectExtras: Record<ProjectSlug, { longIntro: string; approach: string; results: { label: string; value: string }[] }> = {
  "leitura-em-comunidade": {
    longIntro:
      "O Leitura em Comunidade nasce da vontade de fazer o livro circular para além das paredes da biblioteca. Com rodas de leitura, contação de histórias e mediação literária, aproxima diferentes gerações da experiência viva de ler junto. Cada encontro é uma página aberta em praças, escolas e espaços comunitários.",
    approach:
      "Trabalhamos com escuta ativa da comunidade, seleção cuidadosa do acervo e encontros conduzidos por mediadores locais. A leitura é sempre compartilhada, comentada e celebrada em roda — respeitando ritmos, interesses e histórias de cada participante.",
    results: [
      { label: "Encontros comunitários", value: "Ciclos regulares em bairros e escolas" },
      { label: "Público envolvido", value: "Crianças, jovens, famílias e educadores" },
      { label: "Territórios atendidos", value: "Diversos pontos da região" },
    ],
  },
  "estante-viva": {
    longIntro:
      "A Estante Viva cuida do coração da biblioteca: o acervo. Recebe, organiza, conserva e faz circular livros doados pela comunidade, criando novos pontos de leitura em bairros, escolas e espaços coletivos. É um projeto de mãos que costuram redes de leitura vivas e acessíveis.",
    approach:
      "Cada livro passa por uma trajetória de cuidado: recebimento, triagem, catalogação por área e faixa etária, conservação preventiva e distribuição em pontos comunitários. O acervo é dinâmico — sai da estante para chegar a novos leitores.",
    results: [
      { label: "Acervo em circulação", value: "Ampliado continuamente" },
      { label: "Pontos de leitura", value: "Rede em expansão nos bairros" },
      { label: "Campanhas de doação", value: "Realizadas ao longo do ano" },
    ],
  },
  "palavras-que-transformam": {
    longIntro:
      "O Palavras que Transformam é um espaço de criação. Reúne crianças, jovens e adultos em oficinas de leitura, escrita e produção literária, com encontros formativos e trocas com autores. Aqui, cada participante descobre a própria voz — e o poder das palavras de mudar realidades.",
    approach:
      "As oficinas seguem ciclos temáticos, articulando leitura, escuta e produção coletiva. Publicações demonstrativas registram os resultados dos participantes, valorizando a autoria e a expressão de cada leitor-escritor.",
    results: [
      { label: "Oficinas realizadas", value: "Ciclos ao longo do ano" },
      { label: "Novos mediadores", value: "Formados nas turmas" },
      { label: "Produções coletivas", value: "Publicadas e compartilhadas" },
    ],
  },
};

export function ProjectDetail({ slug }: { slug: ProjectSlug }) {
  const project = projects.find((p) => p.slug === slug)!;
  const extra = projectExtras[slug];
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
      />

      {/* Apresentação */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold" style={{ color: project.accent }}>
                <BookMarked className="h-3.5 w-3.5" /> {project.category}
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{project.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{project.summary}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{extra.longIntro}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-[var(--surface)] p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Status</div>
                  <div className="mt-0.5 text-sm font-semibold">{project.status}</div>
                </div>
                <div className="rounded-xl border border-border bg-[var(--surface)] p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Período</div>
                  <div className="mt-0.5 text-sm font-semibold">{project.period}</div>
                </div>
                <div className="rounded-xl border border-border bg-[var(--surface)] p-3 sm:col-span-2">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Público atendido</div>
                  <div className="mt-0.5 flex items-start gap-2 text-sm"><Users className="mt-0.5 h-4 w-4 shrink-0" style={{ color: project.accent }} />{project.audience}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div aria-hidden className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl" style={{ backgroundColor: project.accent, opacity: 0.18 }} />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl" style={{ backgroundColor: "var(--brand-orange)", opacity: 0.15 }} />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <img src={projectImages[project.slug]} alt="" className="aspect-[4/5] w-full object-cover" />
                <div aria-hidden className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: project.accent }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.accent }}>Objetivos</div>
              <h2 className="mt-2 font-display text-3xl font-bold">O que queremos alcançar</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.objectives.map((o, i) => (
              <div key={o} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div aria-hidden className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: project.accent }} />
                <div className="pl-2">
                  <div className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ backgroundColor: project.accent }}>
                    <Target className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Objetivo {i + 1}</div>
                  <p className="mt-1 text-sm font-medium leading-relaxed">{o}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atividades — cards como "livros" */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.accent }}>Atividades</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Ações que colocam livros em movimento</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.activities.map((a, i) => {
              const pool = ["var(--brand-blue)","var(--brand-orange)","var(--brand-green)","var(--brand-red)","var(--brand-purple)","var(--brand-yellow)","var(--brand-pink)"];
              const c = pool[i % pool.length];
              return (
                <div key={a} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div aria-hidden className="h-2" style={{ backgroundColor: c }} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5" style={{ color: c }} /> Ficha {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-2 font-display text-base font-bold leading-snug">{a}</p>
                    <div aria-hidden className="mt-4 h-px w-full" style={{ backgroundColor: c, opacity: 0.3 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.accent }}>Como atuamos</div>
              <h2 className="mt-2 font-display text-3xl font-bold">Nossa metodologia</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{extra.approach}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.locations.map((l) => (
                  <span key={l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5" style={{ color: project.accent }} /> {l}
                  </span>
                ))}
              </div>
            </div>
            <ol className="relative space-y-4">
              {project.methodology.map((m, i) => (
                <li key={m} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold text-white" style={{ backgroundColor: project.accent }}>{i + 1}</div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Etapa {i + 1}</div>
                    <div className="mt-0.5 font-medium">{m}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.accent }}>Resultados esperados</div>
              <h2 className="mt-2 font-display text-3xl font-bold">O que este projeto move</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {extra.results.map((r, i) => {
              const icons = [Sparkles, Compass, Users];
              const Icon = icons[i % icons.length];
              return (
                <div key={r.label} className="relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)] p-6">
                  <div aria-hidden className="absolute -right-6 -top-6 h-24 w-24 rounded-full" style={{ backgroundColor: project.accent, opacity: 0.1 }} />
                  <div className="relative">
                    <div className="grid h-10 w-10 place-items-center rounded-lg text-white" style={{ backgroundColor: project.accent }}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.label}</div>
                    <div className="mt-1 font-display text-lg font-bold">{r.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Galeria + Depoimento */}
          <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="font-display text-2xl font-bold">Galeria de fotos</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((i) => (
                  <button key={i} onClick={() => setLightbox(i)} className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-[var(--surface)] text-xs text-muted-foreground transition hover:shadow-md">
                    <div className="grid h-full place-items-center">Imagem {i + 1}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-[var(--surface)] p-6">
              <Quote className="h-6 w-6" style={{ color: project.accent }} />
              <p className="mt-2 text-muted-foreground leading-relaxed">
                "Depoimento demonstrativo sobre a participação no projeto — conteúdo editável pelo painel administrativo."
              </p>
              <div className="mt-3 text-sm font-semibold">Nome demonstrativo</div>
              <div className="text-xs text-muted-foreground">Participante</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12">
            <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full" style={{ backgroundColor: project.accent, opacity: 0.12 }} />
            <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full" style={{ backgroundColor: "var(--brand-orange)", opacity: 0.08 }} />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold" style={{ color: project.accent }}>
                  <Heart className="h-3.5 w-3.5" /> Faça parte deste capítulo
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Some sua página à nossa história</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Participe, apoie ou traga sua ideia. Este projeto cresce quando a comunidade se aproxima —
                  como leitor, mediador, voluntário ou parceiro.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110" style={{ backgroundColor: project.accent }}>
                    Apoiar este projeto <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-muted">
                    <MessageCircle className="h-4 w-4" /> Entrar em contato
                  </Link>
                </div>
              </div>
              <div aria-hidden className="hidden items-end justify-center gap-1 md:flex">
                {[
                  { c: project.accent, h: 140 },
                  { c: "var(--brand-orange)", h: 160 },
                  { c: "var(--brand-green)", h: 120 },
                  { c: "var(--brand-yellow)", h: 135 },
                  { c: "var(--brand-red)", h: 150 },
                ].map((b, i) => (
                  <div key={i} className="rounded-t-md shadow-sm" style={{ backgroundColor: b.c, height: b.h, width: 22 }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Notícias relacionadas</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {news.slice(0, 3).map((n) => (
                <Link key={n.slug} to={`/noticias/${n.slug}`} className="group overflow-hidden rounded-xl border border-border bg-white p-4 transition hover:shadow-md">
                  <div className="text-xs text-muted-foreground">{n.tag} · {n.date}</div>
                  <div className="mt-1 font-display text-sm font-semibold group-hover:text-primary">{n.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4" onClick={close} onKeyDown={(e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); }} tabIndex={-1}>
          <button aria-label="Fechar" onClick={close} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><X className="h-5 w-5" /></button>
          <button aria-label="Anterior" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label="Próxima" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"><ChevronRight className="h-5 w-5" /></button>
          <div className="max-h-[80vh] w-full max-w-3xl rounded-2xl bg-[oklch(0.94_0.02_240)] p-10 text-center text-muted-foreground" onClick={(e) => e.stopPropagation()}>
            <div className="grid aspect-[16/10] place-items-center">Imagem {lightbox + 1}</div>
            <div className="mt-3 text-xs">Legenda demonstrativa · {lightbox + 1}/{gallery.length}</div>
          </div>
        </div>
      )}
    </>
  );
}