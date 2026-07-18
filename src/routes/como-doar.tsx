import { createFileRoute, Link } from "@tanstack/react-router";
import { heroImages } from "../lib/site-data";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import {
  ArrowRight, BookOpen, Users, Sparkles, GraduationCap, School, BookMarked,
  Heart, MessageCircle, Handshake, Megaphone, PenLine, Bookmark, Package,
  HandHeart, Inbox, Compass, Send, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/como-doar")({
  component: ComoDoar,
  head: () => ({
    meta: [
      { title: "Como Doar — Biblioteca Comunitária" },
      { name: "description", content: "Contribua com a biblioteca comunitária por meio de doação de livros, voluntariado e parcerias." },
    ],
    links: [{ rel: "canonical", href: "/como-doar" }],
  }),
});

function ComoDoar() {
  const helps = [
    { icon: BookOpen, title: "Aquisição de livros", desc: "Ampliação constante do acervo comunitário com títulos escolhidos pelos leitores.", color: "var(--brand-blue)", shape: "cover" },
    { icon: Users, title: "Mediação de leitura", desc: "Rodas, contação de histórias e encontros literários em bairros e escolas.", color: "var(--brand-orange)", shape: "card" },
    { icon: BookMarked, title: "Manutenção do espaço", desc: "Cuidado com o ambiente, mobiliário e conservação do acervo.", color: "var(--brand-red)", shape: "fold" },
    { icon: Sparkles, title: "Oficinas e atividades", desc: "Ciclos formativos de leitura, escrita e cultura para toda a comunidade.", color: "var(--brand-purple)", shape: "bookmark" },
    { icon: GraduationCap, title: "Formação de leitores", desc: "Apoio a novos leitores e mediadores da comunidade.", color: "var(--brand-green)", shape: "card" },
    { icon: School, title: "Ações com escolas", desc: "Atividades em escolas parceiras, coletivos e territórios da região.", color: "var(--brand-pink)", shape: "cover" },
  ] as const;

  const otherWays = [
    { icon: BookOpen, title: "Doação de livros", desc: "Livros em bom estado ampliam o acervo comunitário.", cta: "Saiba como doar livros", color: "var(--brand-green)" },
    { icon: Heart, title: "Voluntariado", desc: "Ajude como mediador(a), em eventos ou na organização do acervo.", cta: "Quero ser voluntário", color: "var(--brand-orange)" },
    { icon: Handshake, title: "Parceria institucional", desc: "Empresas e instituições podem apoiar projetos culturais.", cta: "Propor parceria", color: "var(--brand-blue)" },
    { icon: Megaphone, title: "Divulgação", desc: "Compartilhe nossas ações e fortaleça a rede de leitores.", cta: "Falar com a equipe", color: "var(--brand-purple)" },
    { icon: PenLine, title: "Serviços profissionais", desc: "Ofereça design, comunicação, tradução ou apoio jurídico.", cta: "Falar com a equipe", color: "var(--brand-red)" },
    { icon: Package, title: "Apoio à manutenção", desc: "Materiais, mobiliário e itens para o espaço da biblioteca.", cta: "Falar com a equipe", color: "var(--brand-yellow)" },
  ] as const;

  const journey = [
    { icon: Inbox, title: "A biblioteca recebe o apoio", desc: "Toda contribuição — financeira, em livros ou tempo — é registrada e agradecida." },
    { icon: Compass, title: "O recurso encontra sua prioridade", desc: "Direcionamos onde faz mais diferença: acervo, oficinas ou manutenção do espaço." },
    { icon: Send, title: "Livros e ações chegam à comunidade", desc: "Novas rodas, oficinas e pontos de leitura são ativados nos bairros parceiros." },
    { icon: Sparkles, title: "Novos leitores são alcançados", desc: "Crianças, jovens e adultos encontram, na biblioteca, um espaço para crescer." },
  ];

  return (
    <>
      {/* HERO — livro aberto institucional */}
      <section className="relative overflow-hidden bg-[var(--surface)]">
        <div aria-hidden className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full" style={{ backgroundColor: "var(--brand-yellow)", opacity: 0.35 }} />
        <div aria-hidden className="pointer-events-none absolute -right-10 bottom-10 h-52 w-52 rounded-full" style={{ backgroundColor: "var(--brand-pink)", opacity: 0.25 }} />
        <div className="mx-auto max-w-[1280px] px-4 pt-6">
          <Breadcrumbs items={[{ label: "Como Doar" }]} />
        </div>
        <div className="mx-auto max-w-[1280px] px-4 pb-14 pt-6 md:pb-20">
          <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[28px] border border-border bg-white shadow-xl">
            {/* dobra central */}
            <div aria-hidden className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-6 -translate-x-1/2 md:block" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.10) 55%, transparent 100%)" }} />
            {/* nervuras superior/inferior — bordas de página */}
            <div aria-hidden className="absolute inset-x-8 top-3 h-px bg-border/70" />
            <div aria-hidden className="absolute inset-x-8 bottom-3 h-px bg-border/70" />

            <div className="grid md:grid-cols-2">
              {/* Página esquerda */}
              <div className="relative px-6 py-10 md:px-12 md:py-14">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  <Heart className="h-3.5 w-3.5" /> Apoie a biblioteca
                </span>
                <h1 className="mt-5 font-display text-3xl font-bold leading-tight md:text-[2.6rem]">
                  Seu apoio coloca mais <span className="text-primary">livros em circulação</span>.
                </h1>
                <p className="mt-5 max-w-md text-muted-foreground">
                  Contribua com o acervo, com as oficinas e com as ações culturais que aproximam a comunidade da leitura — do seu jeito.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#apoiar" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110">
                    Escolher uma forma de apoiar <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-muted">
                    <MessageCircle className="h-4 w-4" /> Falar com a equipe
                  </Link>
                </div>
                {/* rodapé de página — número */}
                <div className="mt-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>Capítulo I · Apoio</span>
                  <span>— 1 —</span>
                </div>
              </div>

              {/* Página direita */}
              <div className="relative bg-[var(--surface)] px-6 py-10 md:px-12 md:py-14">
                <div className="relative mx-auto max-w-[420px]">
                  {/* páginas sobrepostas atrás */}
                  <div aria-hidden className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-border bg-white" />
                  <div aria-hidden className="absolute -left-1.5 -top-1.5 h-full w-full rounded-2xl border border-border bg-white" />
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-md">
                    <img src={heroImages.comoDoar} alt="Voluntários organizando livros doados" className="aspect-[4/5] w-full object-cover" />
                    {/* marcador */}
                    <div aria-hidden className="absolute right-6 -top-1 h-14 w-8" style={{ backgroundColor: "var(--brand-red)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)" }} />
                    {/* linha editorial */}
                    <div aria-hidden className="absolute inset-x-4 bottom-4 h-px bg-white/70" />
                    <div className="absolute inset-x-4 bottom-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/90">
                      <span>Edição comunitária</span>
                      <span>Vol. 01</span>
                    </div>
                  </div>
                  {/* formas coloridas */}
                  <span aria-hidden className="absolute -bottom-4 -right-3 h-14 w-14 rounded-2xl" style={{ backgroundColor: "var(--brand-green)", opacity: 0.85 }} />
                  <span aria-hidden className="absolute -top-5 right-10 h-6 w-24 rounded-md" style={{ backgroundColor: "var(--brand-yellow)" }} />
                </div>
                <div className="mt-8 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>Biblioteca Comunitária</span>
                  <span>— 2 —</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS DE VALORES / FORMAS DE APOIAR */}
      <section id="apoiar" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Escolha uma forma de apoiar</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Contribua com o que estiver ao seu alcance</h2>
            <p className="mt-2 text-muted-foreground">Cada apoio ajuda de um jeito diferente — do primeiro leitor à estante inteira.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-6 lg:grid-cols-12">
            {/* CARD 1 — Mini livro vertical */}
            <article className="md:col-span-3 lg:col-span-3">
              <div className="group relative flex h-full min-h-[360px] overflow-hidden rounded-r-2xl rounded-l-md bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div aria-hidden className="relative w-5 shrink-0" style={{ backgroundColor: "var(--brand-blue)" }}>
                  <div className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-white/50" />
                </div>
                <div className="relative flex flex-1 flex-col p-6" style={{ borderTop: "1px solid var(--border)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                  <div aria-hidden className="absolute right-5 -top-1 h-10 w-5" style={{ backgroundColor: "var(--brand-yellow)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)" }} />
                  <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--brand-blue)" }}>Volume I</div>
                  <h3 className="mt-2 font-display text-xl font-bold">Apoie 1 leitor</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-black" style={{ color: "var(--brand-blue)" }}>R$ 35</span>
                    <span className="text-xs text-muted-foreground">/ mês</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">Livros e materiais para uma criança participar das atividades da biblioteca.</p>
                  <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110" style={{ backgroundColor: "var(--brand-blue)" }}>
                    Doar agora <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>

            {/* CARD 2 — Página aberta horizontal */}
            <article className="md:col-span-6 lg:col-span-5">
              <div className="group relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-border bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div aria-hidden className="pointer-events-none absolute inset-y-6 left-1/2 hidden w-4 -translate-x-1/2 md:block" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.12) 50%, transparent)" }} />
                <div className="grid h-full md:grid-cols-2">
                  <div className="relative p-6 md:p-7">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white" style={{ backgroundColor: "var(--brand-orange)" }}>
                      <Users className="h-3 w-3" /> Selo Roda de Leitura
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-snug">Apoie uma roda de leitura</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Sustenta um encontro mensal de mediação literária em bairros e escolas parceiras.</p>
                  </div>
                  <div className="relative flex flex-col justify-between bg-[var(--surface)] p-6 md:p-7">
                    <div aria-hidden className="absolute right-3 top-3 h-8 w-8 rotate-45 rounded-sm bg-white shadow-sm" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Contribuição mensal</div>
                      <div className="mt-1 font-display text-4xl font-black" style={{ color: "var(--brand-orange)" }}>R$ 90</div>
                    </div>
                    <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110" style={{ backgroundColor: "var(--brand-orange)" }}>
                      Apoiar roda <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* CARD 3 — Ficha catalográfica */}
            <article className="md:col-span-3 lg:col-span-4">
              <div className="group relative h-full min-h-[360px] overflow-hidden rounded-lg bg-[var(--surface)] shadow-md transition hover:-translate-y-1 hover:shadow-xl" style={{ borderTop: "6px solid var(--brand-green)" }}>
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                    <span>Ficha nº 003</span>
                    <span className="rounded px-1.5 py-0.5 text-white" style={{ backgroundColor: "var(--brand-green)" }}>ACERVO</span>
                  </div>
                  <div aria-hidden className="mt-3 h-px w-full border-t border-dashed" style={{ borderColor: "var(--brand-green)" }} />
                  <h3 className="mt-4 font-display text-2xl font-bold">Fortaleça o acervo</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Ajuda a comprar novos títulos e conservar os livros que já circulam pela biblioteca.</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    <div>Classif.<br /><span className="font-sans text-sm font-semibold text-foreground normal-case">Acervo geral</span></div>
                    <div>Alcance<br /><span className="font-sans text-sm font-semibold text-foreground normal-case">Comunidade</span></div>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">A partir de</div>
                      <div className="font-display text-3xl font-black" style={{ color: "var(--brand-green)" }}>R$ 150</div>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110" style={{ backgroundColor: "var(--brand-green)" }}>
                      Doar <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  {/* carimbo */}
                  <div aria-hidden className="absolute right-4 top-16 rotate-[-8deg] rounded border-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase" style={{ color: "var(--brand-red)", borderColor: "var(--brand-red)" }}>Doação</div>
                </div>
              </div>
            </article>

            {/* CARD 4 — Marcador editorial (outro valor) */}
            <article className="md:col-span-6 lg:col-span-12">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-blue)] p-6 text-white shadow-md md:p-8">
                <div aria-hidden className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-white/10" />
                <div aria-hidden className="absolute left-10 -top-2 h-16 w-10" style={{ backgroundColor: "var(--brand-yellow)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)" }} />
                <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                      <Bookmark className="h-3 w-3" /> Marcador aberto
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">Escolha outro valor</h3>
                    <p className="mt-2 max-w-lg text-sm text-white/90">Contribua com o valor que faz sentido para você — mensal ou pontual. Cada apoio conta.</p>
                  </div>
                  <form className="flex flex-col gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur sm:flex-row sm:items-center">
                    <label className="flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">Valor da contribuição</span>
                      <div className="mt-1 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-foreground">
                        <span className="font-semibold">R$</span>
                        <input type="number" min={5} placeholder="50" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
                      </div>
                    </label>
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:brightness-105">
                      Doar <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE A DOAÇÃO AJUDA A MANTER — cards variados */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">O que seu apoio movimenta</div>
            <h2 className="mt-2 font-display text-3xl font-bold">O que sua doação ajuda a manter</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helps.map((h, i) => {
              const Icon = h.icon;
              if (h.shape === "cover") {
                return (
                  <article key={h.title} className="relative overflow-hidden rounded-2xl shadow-md">
                    <div className="relative flex h-full flex-col p-6 text-white" style={{ backgroundColor: h.color }}>
                      <div aria-hidden className="absolute inset-y-4 left-3 w-px bg-white/40" />
                      <div className="pl-3">
                        <Icon className="h-10 w-10" />
                        <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-white/80">Capítulo {String(i + 1).padStart(2, "0")}</div>
                        <h3 className="mt-1 font-display text-xl font-bold leading-snug">{h.title}</h3>
                        <p className="mt-2 text-sm text-white/90">{h.desc}</p>
                      </div>
                    </div>
                  </article>
                );
              }
              if (h.shape === "fold") {
                return (
                  <article key={h.title} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md" style={{ border: `2px solid ${h.color}` }}>
                    <div aria-hidden className="absolute right-0 top-0 h-0 w-0 border-b-[32px] border-l-[32px] border-b-transparent" style={{ borderLeftColor: h.color }} />
                    <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundColor: h.color }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                  </article>
                );
              }
              if (h.shape === "bookmark") {
                return (
                  <article key={h.title} className="relative overflow-hidden rounded-2xl bg-white p-6 pt-8 shadow-md">
                    <div aria-hidden className="absolute right-8 -top-1 h-12 w-6" style={{ backgroundColor: h.color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }} />
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-widest" style={{ color: h.color }}>Marcador</div>
                    <h3 className="mt-2 font-display text-lg font-bold">{h.title}</h3>
                    <div aria-hidden className="mt-3 h-px w-16" style={{ backgroundColor: h.color }} />
                    <p className="mt-3 text-sm text-muted-foreground">{h.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: h.color }}>
                      <Icon className="h-4 w-4" /> Ação contínua
                    </div>
                  </article>
                );
              }
              // ficha catalográfica
              return (
                <article key={h.title} className="relative overflow-hidden rounded-lg bg-white p-6 shadow-md" style={{ borderTop: `6px solid ${h.color}` }}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span>Ficha nº {String(i + 1).padStart(3, "0")}</span>
                    <span className="rounded px-1.5 py-0.5 text-white" style={{ backgroundColor: h.color }}>ACERVO</span>
                  </div>
                  <div aria-hidden className="mt-3 h-px w-full border-t border-dashed" style={{ borderColor: h.color }} />
                  <div className="mt-4 flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: h.color }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">{h.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACTO — trilha de páginas sequenciais */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">O caminho da sua contribuição</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Do apoio à página aberta em comunidade</h2>
            <p className="mt-2 text-muted-foreground">Cada contribuição percorre um caminho até chegar a novos leitores.</p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {journey.map((step, i) => {
              const colors = ["var(--brand-blue)", "var(--brand-orange)", "var(--brand-green)", "var(--brand-red)"];
              const c = colors[i];
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative">
                  <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-md" style={{ borderTop: `6px solid ${c}` }}>
                    <div aria-hidden className="absolute right-0 top-0 h-0 w-0 border-b-[26px] border-l-[26px] border-b-transparent" style={{ borderLeftColor: c }} />
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl font-black" style={{ color: c }}>{String(i + 1).padStart(2, "0")}</span>
                      <div className="grid h-11 w-11 place-items-center rounded-full text-white" style={{ backgroundColor: c }}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div aria-hidden className="mt-4 h-px w-full border-t border-dashed" style={{ borderColor: c }} />
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                    <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      <span>Página</span>
                      <span>— {i + 1} —</span>
                    </div>
                  </div>
                  {i < journey.length - 1 && (
                    <ChevronRight aria-hidden className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-muted-foreground md:block" />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* OUTRAS FORMAS DE APOIO — etiquetas de estante */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Outras formas de participar</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Existem muitos jeitos de apoiar</h2>
            <p className="mt-2 text-muted-foreground">Além da contribuição financeira, você pode fortalecer a biblioteca de muitas maneiras.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWays.map((w) => {
              const Icon = w.icon;
              return (
                <article key={w.title} className="group relative flex overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  {/* etiqueta de estante lateral */}
                  <div aria-hidden className="relative flex w-14 flex-col items-center justify-between py-4" style={{ backgroundColor: w.color }}>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/90">EST.</span>
                    <Icon className="h-6 w-6 text-white" />
                    <span className="text-[10px] font-mono font-bold text-white/90">A-Z</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold">{w.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                    <Link to="/contato" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: w.color }}>
                      {w.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <HandHeart className="h-4 w-4" /> Transparência no uso dos recursos
            </div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Todos os recursos recebidos são aplicados nos projetos, no acervo e nas ações culturais da biblioteca. A prestação de contas está disponível na página de{" "}
              <Link to="/quem-somos/transparencia" className="font-semibold text-primary hover:underline">Transparência</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL — estante sendo preenchida */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-green)] via-[var(--brand-blue)] to-[var(--brand-purple)] p-8 text-white shadow-lg md:p-12">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div aria-hidden className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-white/10" />

            <div className="relative grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                  <BookMarked className="h-3.5 w-3.5" /> Estante em formação
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Há sempre espaço para mais uma história</h2>
                <p className="mt-4 max-w-lg text-white/90">
                  Seu apoio fortalece o acervo, mantém as atividades e amplia o acesso à leitura na comunidade.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#apoiar" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:brightness-105">
                    <Heart className="h-4 w-4" /> Apoiar agora
                  </a>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
                    <MessageCircle className="h-4 w-4" /> Entrar em contato
                  </Link>
                </div>
              </div>

              {/* Estante ilustrada */}
              <div aria-hidden className="relative">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  {/* prateleira 1 */}
                  <div className="flex items-end gap-1.5">
                    {[
                      { c: "var(--brand-yellow)", h: 100, w: 22 },
                      { c: "var(--brand-red)", h: 120, w: 26 },
                      { c: "var(--brand-orange)", h: 90, w: 20 },
                      { c: "var(--brand-pink)", h: 115, w: 24 },
                      { c: "var(--brand-green)", h: 105, w: 22 },
                      { c: "var(--brand-blue)", h: 130, w: 28 },
                      { c: "transparent", h: 110, w: 24, empty: true },
                    ].map((b, i) => (
                      <div key={i} className={b.empty ? "rounded-t-sm border-2 border-dashed border-white/60" : "rounded-t-sm shadow"} style={{ backgroundColor: b.empty ? "transparent" : b.c, height: b.h, width: b.w }} />
                    ))}
                  </div>
                  <div className="h-1.5 rounded-full bg-white/70" />
                  {/* prateleira 2 */}
                  <div className="mt-4 flex items-end gap-1.5">
                    {[
                      { c: "var(--brand-purple)", h: 90, w: 22 },
                      { c: "transparent", h: 100, w: 22, empty: true },
                      { c: "var(--brand-green)", h: 120, w: 26 },
                      { c: "var(--brand-yellow)", h: 100, w: 22 },
                      { c: "var(--brand-red)", h: 130, w: 28 },
                      { c: "var(--brand-blue)", h: 95, w: 22 },
                      { c: "var(--brand-orange)", h: 115, w: 24 },
                    ].map((b, i) => (
                      <div key={i} className={b.empty ? "rounded-t-sm border-2 border-dashed border-white/60" : "rounded-t-sm shadow"} style={{ backgroundColor: b.empty ? "transparent" : b.c, height: b.h, width: b.w }} />
                    ))}
                  </div>
                  <div className="h-1.5 rounded-full bg-white/70" />
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80">
                    <span>Espaço reservado</span>
                    <span>para o seu apoio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}