import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { heroImages } from "../lib/site-data";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import {
  BookOpen, Building2, Copy, HandHeart, Heart, ShieldCheck, Users,
  BookMarked, Sparkles, GraduationCap, School, Megaphone, Handshake, ArrowRight, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/como-doar")({
  component: ComoDoar,
  head: () => ({
    meta: [
      { title: "Como Doar — Biblioteca Comunitária" },
      { name: "description", content: "Contribua com a biblioteca comunitária por meio de doação financeira, livros ou voluntariado." },
    ],
    links: [{ rel: "canonical", href: "/como-doar" }],
  }),
});

function ComoDoar() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (label: string, value: string) => {
    try { await navigator.clipboard.writeText(value); setCopied(label); setTimeout(() => setCopied(null), 2000); } catch {}
  };

  const tiers = [
    { seal: "Apoie 1 leitor", value: "R$ 35", freq: "por mês", desc: "Contribui com livros e materiais para uma criança participar das atividades da biblioteca.", color: "var(--brand-blue)" },
    { seal: "Apoie 2 leitores", value: "R$ 70", freq: "por mês", desc: "Fortalece rodas de leitura e mediação literária em bairros e escolas parceiras.", color: "var(--brand-orange)" },
    { seal: "Apoie 3 leitores", value: "R$ 105", freq: "por mês", desc: "Amplia o alcance das oficinas e da formação de novos mediadores de leitura.", color: "var(--brand-green)" },
  ];

  const helps = [
    { icon: BookOpen, title: "Aquisição de livros", desc: "Ampliação constante do acervo comunitário.", color: "var(--brand-blue)" },
    { icon: Users, title: "Mediação de leitura", desc: "Rodas, contação de histórias e encontros literários.", color: "var(--brand-orange)" },
    { icon: BookMarked, title: "Manutenção do espaço", desc: "Cuidado com o ambiente, mobiliário e conservação do acervo.", color: "var(--brand-red)" },
    { icon: Sparkles, title: "Oficinas e atividades", desc: "Ciclos formativos de leitura, escrita e cultura.", color: "var(--brand-purple)" },
    { icon: GraduationCap, title: "Formação de leitores", desc: "Apoio a novos leitores e mediadores da comunidade.", color: "var(--brand-green)" },
    { icon: School, title: "Ações com escolas", desc: "Atividades em escolas parceiras e coletivos locais.", color: "var(--brand-pink)" },
  ];

  const otherWays = [
    { icon: BookOpen, title: "Doação de livros", desc: "Doe livros em bom estado para ampliar o acervo comunitário.", color: "var(--brand-green)" },
    { icon: Heart, title: "Voluntariado", desc: "Participe como mediador(a), apoiador(a) de eventos ou na organização do acervo.", color: "var(--brand-orange)" },
    { icon: Handshake, title: "Apoio institucional", desc: "Empresas e instituições podem apoiar projetos e ações culturais.", color: "var(--brand-blue)" },
    { icon: Megaphone, title: "Divulgação", desc: "Compartilhe nossas ações e ajude a fortalecer a rede de leitores.", color: "var(--brand-purple)" },
    { icon: Handshake, title: "Parceria cultural", desc: "Coletivos e artistas podem construir ações conjuntas com a biblioteca.", color: "var(--brand-red)" },
  ];

  return (
    <>
      {/* HERO — imagem ampla + faixa de impacto */}
      <section className="relative overflow-hidden bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 pt-6"><Breadcrumbs items={[{ label: "Como Doar" }]} /></div>
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 pb-10 pt-6 md:grid-cols-[1.05fr_1fr] md:pb-14">
          <div className="relative">
            <span aria-hidden className="absolute -left-4 -top-4 h-16 w-16 rounded-2xl" style={{ backgroundColor: "var(--brand-yellow)", opacity: 0.7 }} />
            <span aria-hidden className="absolute -right-3 -bottom-3 h-20 w-20 rounded-full" style={{ backgroundColor: "var(--brand-pink)", opacity: 0.7 }} />
            <span aria-hidden className="absolute right-6 top-6 h-6 w-24 rounded-md" style={{ backgroundColor: "var(--brand-green)" }} />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <img src={heroImages.comoDoar} alt="Leitores e livros da biblioteca comunitária" className="aspect-[5/4] w-full object-cover" />
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Heart className="h-3.5 w-3.5" /> Apoie a biblioteca
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Cada apoio abre uma <span className="text-primary">nova página.</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Sua contribuição ajuda a manter o acervo, as rodas de leitura, as oficinas e todas as ações culturais que aproximam a comunidade dos livros.
            </p>
          </div>
        </div>
        {/* Faixa de impacto */}
        <div className="mx-auto max-w-[1280px] px-4 pb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-white px-6 py-4 text-center shadow-sm">
            <BookMarked className="h-5 w-5 text-primary" />
            <span className="font-display text-base font-bold md:text-lg">Cada doação ajuda a escrever novas histórias.</span>
            <BookMarked className="h-5 w-5 text-primary" />
          </div>
        </div>
      </section>

      {/* CARDS DE VALORES — formato de livro em pé */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Escolha um apoio mensal</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Doe e transforme histórias</h2>
            <p className="mt-2 text-muted-foreground">Cada valor tem um impacto direto na formação de novos leitores.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.seal} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div aria-hidden className="absolute left-0 top-0 h-full w-2.5" style={{ backgroundColor: t.color }} />
                <div aria-hidden className="absolute left-2.5 top-0 h-full w-px bg-white/70" />
                <div className="p-6 pl-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white" style={{ backgroundColor: t.color }}>
                    <BookMarked className="h-3 w-3" /> {t.seal}
                  </span>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-black" style={{ color: t.color }}>{t.value}</span>
                    <span className="text-sm text-muted-foreground">{t.freq}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110" style={{ backgroundColor: t.color }}>
                    Doar agora <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIX + BANCÁRIO */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary"><ShieldCheck className="h-4 w-4" /> Doação via PIX</div>
              <h2 className="mt-2 font-display text-2xl font-bold">Doe com PIX</h2>
              <p className="mt-1 text-sm text-muted-foreground">A chave PIX oficial será divulgada em breve pela equipe da biblioteca.</p>
              <div className="mt-4 rounded-2xl border border-dashed border-border p-4">
                <div className="text-xs font-semibold uppercase text-muted-foreground">Chave PIX (demonstrativa)</div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <code className="text-sm">chave-pix-a-cadastrar@biblioteca.org</code>
                  <button onClick={() => copy("pix", "chave-pix-a-cadastrar@biblioteca.org")} className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-3 py-1 text-xs"><Copy className="h-3.5 w-3.5" /> Copiar</button>
                </div>
                {copied === "pix" && <div className="mt-2 text-xs text-muted-foreground">Chave copiada.</div>}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary"><Building2 className="h-4 w-4" /> Depósito ou transferência</div>
              <h2 className="mt-2 font-display text-2xl font-bold">Dados bancários</h2>
              <p className="mt-1 text-sm text-muted-foreground">Dados demonstrativos — serão substituídos pelos dados oficiais da instituição.</p>
              <dl className="mt-4 grid gap-2 text-sm">
                {[["Instituição","Banco a informar"],["Agência","0000"],["Conta","00000-0"],["Titular","Razão social a informar"],["CNPJ","00.000.000/0000-00"]].map(([k,v]) => (
                  <div key={k} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-[var(--surface)] px-3 py-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-mono">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE A DOAÇÃO AJUDA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Sua doação ajuda a manter</div>
            <h2 className="mt-2 font-display text-3xl font-bold">O que seu apoio movimenta</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helps.map((h) => (
              <div key={h.title} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div aria-hidden className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: h.color }} />
                <div className="pl-2">
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundColor: h.color }}>
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTRAS FORMAS DE APOIO */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Outras formas de participar</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Existem muitos jeitos de apoiar</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWays.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ backgroundColor: w.color }}>
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                <Link to="/contato" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  Entrar em contato <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary"><HandHeart className="h-4 w-4" /> Transparência no uso dos recursos</div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Todos os recursos recebidos são aplicados nos projetos, no acervo e nas ações culturais da biblioteca. A prestação de contas está disponível na página de <Link to="/quem-somos/transparencia" className="font-semibold text-primary hover:underline">Transparência</Link>.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] p-8 text-white md:p-12">
            <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <BookMarked className="h-3.5 w-3.5" /> Some sua página à nossa história
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Ajude a manter esta biblioteca viva</h2>
                <p className="mt-3 max-w-xl text-white/90">
                  Com seu apoio, mais livros circulam, mais leitores se formam e mais histórias ganham espaço na comunidade.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#doar" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:brightness-105">
                    <Heart className="h-4 w-4" /> Doar agora
                  </a>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                    <MessageCircle className="h-4 w-4" /> Falar com a equipe
                  </Link>
                </div>
              </div>
              <div aria-hidden className="hidden items-end justify-center gap-1 md:flex">
                {[
                  { c: "var(--brand-yellow)", h: 140 },
                  { c: "var(--brand-orange)", h: 170 },
                  { c: "var(--brand-red)", h: 125 },
                  { c: "var(--brand-green)", h: 155 },
                  { c: "var(--brand-pink)", h: 135 },
                ].map((b, i) => (
                  <div key={i} className="rounded-t-md shadow-lg" style={{ backgroundColor: b.c, height: b.h, width: 24 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}