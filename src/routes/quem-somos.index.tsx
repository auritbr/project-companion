import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import {
  BookOpen, Heart, Sparkles, ArrowRight, Library, BookMarked, Feather,
  Baby, GraduationCap, Landmark, Users, ScrollText, Bookmark, NotebookPen,
  BookHeart, BookText, Scroll, School, Activity,
} from "lucide-react";
import { heroImages } from "../lib/site-data";

export const Route = createFileRoute("/quem-somos/")({
  component: QuemSomos,
  head: () => ({
    meta: [
      { title: "Quem Somos — Biblioteca Comunitária" },
      { name: "description", content: "Conheça a biblioteca comunitária: história, missão, visão, valores e acervo." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
});

const bookTypes = [
  { icon: Baby, label: "Literatura infantil", color: "var(--brand-yellow)" },
  { icon: BookOpen, label: "Literatura juvenil", color: "var(--brand-orange)" },
  { icon: BookHeart, label: "Romances", color: "var(--brand-red)" },
  { icon: Feather, label: "Poesia", color: "var(--brand-pink)" },
  { icon: BookText, label: "Contos", color: "var(--brand-purple)" },
  { icon: Users, label: "Biografias", color: "var(--brand-blue)" },
  { icon: GraduationCap, label: "Livros educativos", color: "var(--brand-green)" },
  { icon: ScrollText, label: "Obras de pesquisa", color: "var(--brand-blue)" },
  { icon: Landmark, label: "Cultura popular", color: "var(--brand-orange)" },
  { icon: Scroll, label: "História e memória", color: "var(--brand-red)" },
  { icon: NotebookPen, label: "Livros de formação", color: "var(--brand-green)" },
  { icon: Bookmark, label: "Materiais paradidáticos", color: "var(--brand-purple)" },
];

const valuesList = [
  "Acesso à leitura", "Acolhimento", "Diversidade", "Participação comunitária",
  "Respeito", "Educação", "Cultura", "Transparência", "Cuidado com a memória",
];

const indicators = [
  { icon: BookOpen, label: "Livros no acervo", value: "A cadastrar", color: "var(--brand-blue)" },
  { icon: Users, label: "Leitores atendidos", value: "A cadastrar", color: "var(--brand-orange)" },
  { icon: School, label: "Escolas alcançadas", value: "A cadastrar", color: "var(--brand-green)" },
  { icon: Activity, label: "Atividades realizadas", value: "A cadastrar", color: "var(--brand-red)" },
];

const timeline = [
  { year: "Fundação", title: "Início da biblioteca", desc: "Mobilização comunitária e doação dos primeiros livros.", color: "var(--brand-blue)" },
  { year: "Primeiro acervo", title: "Organização do espaço", desc: "Primeiras estantes montadas em parceria com moradores.", color: "var(--brand-green)" },
  { year: "Primeiras ações", title: "Rodas de leitura", desc: "Início das atividades de mediação literária e contação.", color: "var(--brand-yellow)" },
  { year: "Ampliação", title: "Novos projetos e parcerias", desc: "Chegada de oficinas, encontros com autores e ampliação do acervo.", color: "var(--brand-orange)" },
  { year: "Reconhecimento", title: "Ponto de Cultura", desc: "Consolidação como referência cultural do território.", color: "var(--brand-red)" },
  { year: "Atuação atual", title: "Uma biblioteca viva", desc: "Ações contínuas de leitura, formação e cuidado com a memória.", color: "var(--brand-purple)" },
];

function QuemSomos() {
  return (
    <>
      <PageHero title="Quem Somos" breadcrumbs={[{ label: "Quem Somos" }]} image={heroImages.quemSomos} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-4 py-12 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-primary">
            <Library className="h-3.5 w-3.5" /> Ponto de Cultura
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Uma biblioteca viva, feita com a comunidade</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Somos um espaço comunitário de leitura, encontro e formação cultural. Reunimos livros, pessoas
            e histórias em torno do direito ao acesso à cultura e à imaginação.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Nossa trajetória</div>
              <h2 className="mt-2 font-display text-3xl font-bold">Uma história tecida entre livros e pessoas</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A biblioteca nasceu do desejo coletivo de aproximar moradores da região do universo dos livros.
                  Começou pequena, com poucas estantes e muitos sonhos, reunindo crianças em rodas de leitura
                  improvisadas e educadores voluntários dispostos a compartilhar histórias.
                </p>
                <p>
                  Com o tempo, a iniciativa cresceu com o apoio da comunidade. Doações de vizinhos, escolas e coletivos
                  fortaleceram o acervo, e novas atividades surgiram: oficinas, encontros com autores, contação de
                  histórias e projetos que levam livros a diferentes territórios.
                </p>
                <p>
                  Hoje, atuamos como Ponto de Cultura reconhecido pela comunidade, comprometidos com o acesso ao livro,
                  a formação de leitores e o cuidado com a memória do bairro. Cada ação é uma nova página de uma
                  história que continua sendo escrita a muitas mãos.
                </p>
              </div>
              <div className="mt-6">
                <a href="#linha-do-tempo" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Ver linha do tempo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[320px]">
              <div aria-hidden className="absolute -left-3 -top-3 h-16 w-16 rounded-2xl" style={{ backgroundColor: "var(--brand-orange)", opacity: 0.2 }} />
              <div aria-hidden className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.2 }} />
              <div className="relative overflow-hidden rounded-2xl border-2 bg-white shadow-lg" style={{ borderColor: "var(--brand-blue)" }}>
                <img src={heroImages.nossaHistoria} alt="Livros e leitores da biblioteca comunitária" className="aspect-[3/4] w-full object-cover" />
                <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] shadow">
                  <div className="font-semibold text-primary">Ponto de Cultura</div>
                  <div className="text-muted-foreground">Biblioteca comunitária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Nosso alcance</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Indicadores de impacto</h2>
            <p className="mt-2 text-muted-foreground">Números demonstrativos — serão atualizados pelo painel administrativo.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {indicators.map((k) => (
              <div key={k.label} className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div aria-hidden className="absolute -right-6 -top-6 h-20 w-20 rounded-full" style={{ backgroundColor: k.color, opacity: 0.12 }} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ backgroundColor: k.color }}>
                    <k.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 font-display text-2xl font-bold">{k.value}</div>
                  <div className="text-sm font-semibold text-foreground">{k.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Fundamentos</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Missão, visão e valores</h2>
            <p className="mt-3 text-muted-foreground">Os princípios que orientam nossa atuação como biblioteca comunitária.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Missão", color: "var(--brand-blue)", desc: "Promover o acesso democrático à leitura, à cultura e ao conhecimento por meio de um espaço comunitário acolhedor, formativo e conectado à realidade do território." },
              { icon: Sparkles, title: "Visão", color: "var(--brand-orange)", desc: "Ser referência local na formação de leitores, no fortalecimento comunitário e na valorização da biblioteca como espaço vivo de encontro, imaginação e transformação social." },
              { icon: Heart, title: "Valores", color: "var(--brand-red)", desc: "Acesso à leitura, acolhimento, diversidade, participação comunitária, respeito, educação, cultura, transparência e cuidado com a memória." },
            ].map((v) => (
              <div key={v.title} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div aria-hidden className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: v.color }} />
                <div aria-hidden className="absolute left-2 top-0 h-full w-px bg-white/60" />
                <div className="p-6 pl-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundColor: v.color }}>
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {valuesList.map((v, i) => {
              const pool = ["var(--brand-blue)","var(--brand-green)","var(--brand-orange)","var(--brand-red)","var(--brand-pink)","var(--brand-purple)","var(--brand-yellow)"];
              const c = pool[i % pool.length];
              return (
                <span key={v} className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1 text-xs font-medium" style={{ borderColor: c, color: c }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} /> {v}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section id="linha-do-tempo" className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Linha do tempo</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Páginas da nossa história</h2>
            <p className="mt-2 text-muted-foreground">Marcos que registram a trajetória da biblioteca comunitária.</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((m, i) => (
              <li key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div aria-hidden className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: m.color }} />
                <div aria-hidden className="absolute left-1.5 top-0 h-full w-px bg-white/70" />
                <div className="p-5 pl-7">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: m.color }}>Página {String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{m.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Nosso acervo</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Um acervo diverso, aberto a todas as idades</h2>
            <p className="mt-3 text-muted-foreground">
              A biblioteca reúne obras de gêneros e temas variados, com títulos voltados para crianças, jovens
              e adultos. Da poesia à pesquisa, do conto à memória do território — há sempre uma página esperando
              cada leitor.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {bookTypes.map((t) => (
              <div key={t.label} className="group relative overflow-hidden rounded-xl border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                <div aria-hidden className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: t.color }} />
                <div className="flex items-center gap-3 pl-2">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: t.color }}>
                    <t.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{t.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[var(--surface)] to-white p-8 md:p-12">
            <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full" style={{ backgroundColor: "var(--brand-orange)", opacity: 0.1 }} />
            <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.1 }} />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  <BookMarked className="h-3.5 w-3.5" /> Faça parte
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Uma biblioteca viva se constrói com a comunidade</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Conheça nossos projetos, acompanhe nossas ações e descubra como apoiar este espaço de leitura,
                  cultura e encontro.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/projetos/leitura-em-comunidade" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110">
                    Conheça os projetos <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-muted">
                    Como apoiar
                  </Link>
                </div>
              </div>
              <div aria-hidden className="hidden items-end justify-center gap-1 md:flex">
                {[
                  { c: "var(--brand-blue)", h: 120 },
                  { c: "var(--brand-orange)", h: 150 },
                  { c: "var(--brand-green)", h: 110 },
                  { c: "var(--brand-red)", h: 160 },
                  { c: "var(--brand-yellow)", h: 130 },
                  { c: "var(--brand-purple)", h: 145 },
                ].map((b, i) => (
                  <div key={i} className="rounded-t-md shadow-sm" style={{ backgroundColor: b.c, height: b.h, width: 22 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}