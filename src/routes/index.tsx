import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen, Users, Heart, Sparkles, Library, BookMarked,
  MessagesSquare, GraduationCap, Handshake, ArrowRight,
  ChevronLeft, ChevronRight, Feather, Mic, PenLine, School, Bookmark,
} from "lucide-react";
import { projects, news, partners, heroImages, projectImages } from "../lib/site-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Biblioteca Comunitária — Ponto de Cultura" },
      {
        name: "description",
        content:
          "Livros que aproximam pessoas e transformam comunidades. Biblioteca comunitária e Ponto de Cultura com acesso gratuito à leitura, projetos culturais e formação de leitores.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const slides = [
    {
      badge: "Biblioteca Comunitária",
      title: "Livros que aproximam pessoas",
      highlight: "e transformam comunidades.",
      desc: "Um espaço aberto de leitura, encontros e formação cultural, construído junto à comunidade.",
      image: heroImages.quemSomos,
      cta: { to: "/quem-somos" as const, label: "Conheça a Biblioteca" },
      accent: "var(--brand-blue)",
    },
    {
      badge: "Projetos e ações",
      title: "Rodas de leitura, oficinas",
      highlight: "e livros em movimento.",
      desc: "Nossos projetos aproximam pessoas de todas as idades da experiência da leitura compartilhada.",
      image: projectImages["leitura-em-comunidade"],
      cta: { to: "/projetos/leitura-em-comunidade" as const, label: "Conheça os projetos" },
      accent: "var(--brand-orange)",
    },
    {
      badge: "Impacto comunitário",
      title: "Uma biblioteca que se constrói",
      highlight: "com a comunidade.",
      desc: "Formação de leitores, valorização da memória local e fortalecimento do território pela leitura.",
      image: heroImages.nossaHistoria,
      cta: { to: "/quem-somos" as const, label: "Nossa história" },
      accent: "var(--brand-green)",
    },
    {
      badge: "Apoie a biblioteca",
      title: "Some sua página",
      highlight: "à nossa história.",
      desc: "Com o seu apoio, mais livros circulam e mais histórias ganham espaço na comunidade.",
      image: heroImages.comoDoar,
      cta: { to: "/como-doar" as const, label: "Como apoiar" },
      accent: "var(--brand-red)",
    },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);
  const s = slides[i];

  return (
    <>
      {/* HERO — livro aberto */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] to-white">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--brand-yellow) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--brand-blue) 0%, transparent 40%)", opacity: 0.08 }} />
        <div className="relative mx-auto max-w-[1320px] px-4 py-10 md:py-16">
          {/* Livro aberto */}
          <div className="relative mx-auto max-w-[1200px]">
            {/* sombra sob o livro */}
            <div aria-hidden className="absolute -bottom-4 left-6 right-6 h-8 rounded-full bg-black/20 blur-2xl" />
            {/* capa/base do livro */}
            <div className="relative rounded-[28px] p-2 md:p-3 shadow-2xl" style={{ background: `linear-gradient(135deg, ${s.accent} 0%, oklch(0.35 0.05 260) 100%)` }}>
              {/* Miolo — duas páginas */}
              <div className="relative overflow-hidden rounded-[20px] bg-[oklch(0.985_0.005_85)]">
                {/* Textura de páginas */}
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #000 0 1px, transparent 1px 24px)" }} />
                {/* Lombada central */}
                <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-8 -translate-x-1/2 md:block" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.12) 55%, transparent 100%)" }} />
                {/* Curva das páginas (bordas) */}
                <div aria-hidden className="pointer-events-none absolute inset-y-3 left-3 w-1 rounded-full bg-gradient-to-b from-transparent via-black/10 to-transparent" />
                <div aria-hidden className="pointer-events-none absolute inset-y-3 right-3 w-1 rounded-full bg-gradient-to-b from-transparent via-black/10 to-transparent" />

                <div key={i} className="grid md:grid-cols-2">
                  {/* Página esquerda — texto */}
                  <div className="relative p-6 md:p-12 md:pr-14">
                    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm" style={{ backgroundColor: s.accent }}>
                      <BookMarked className="h-3.5 w-3.5" /> {s.badge}
                    </span>
                    <h1 className="mt-5 font-display text-3xl font-black leading-[1.05] text-foreground md:text-5xl">
                      {s.title}
                      <span className="block" style={{ color: s.accent }}>{s.highlight}</span>
                    </h1>
                    <div aria-hidden className="mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: s.accent }} />
                    <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg leading-relaxed">{s.desc}</p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link to={s.cta.to} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110" style={{ backgroundColor: s.accent }}>
                        {s.cta.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted" style={{ borderColor: s.accent }}>
                        Apoie a biblioteca
                      </Link>
                    </div>
                    {/* número de página */}
                    <div aria-hidden className="mt-10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">— página {String((i * 2) + 2).padStart(2, "0")} —</div>
                  </div>

                  {/* Página direita — imagem */}
                  <div className="relative min-h-[280px] md:min-h-[520px]">
                    <div className="absolute inset-4 overflow-hidden rounded-2xl shadow-inner md:inset-6">
                      <img src={s.image} alt="" className="h-full w-full object-cover" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                      {/* marcador */}
                      <div aria-hidden className="absolute right-4 -top-2 h-16 w-8 shadow-md" style={{ backgroundColor: s.accent, clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }} />
                    </div>
                    <div aria-hidden className="absolute bottom-4 right-6 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">— página {String((i * 2) + 3).padStart(2, "0")} —</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles do carrossel */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button aria-label="Slide anterior" onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-sm hover:bg-muted"><ChevronLeft className="h-4 w-4" /></button>
              <div className="flex gap-1.5">
                {slides.map((sl, k) => (
                  <button key={k} onClick={() => setI(k)} aria-label={`Ir para slide ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-10" : "w-2 opacity-30"}`} style={{ backgroundColor: sl.accent }} />
                ))}
              </div>
              <button aria-label="Próximo slide" onClick={() => setI((v) => (v + 1) % slides.length)} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-sm hover:bg-muted"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-[28px] bg-[oklch(0.94_0.02_240)]">
              <div className="grid h-full place-items-center text-muted-foreground">
                <div className="text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-primary" />
                  <div className="mt-2 text-sm">Fotografia demonstrativa do espaço</div>
                </div>
              </div>
            </div>
            <span className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl" style={{ backgroundColor: "var(--brand-pink)" }} />
            <span className="absolute -top-3 right-6 h-10 w-10 rounded-full" style={{ backgroundColor: "var(--brand-yellow)" }} />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Uma biblioteca construída com a comunidade
            </h2>
            <p className="mt-4 text-muted-foreground">
              Somos um espaço de convivência, acesso aos livros, fortalecimento de vínculos
              e formação cultural. Atuamos como um Ponto de Cultura dedicado a democratizar
              a leitura, valorizar histórias locais e ampliar o repertório cultural do território.
            </p>
            <p className="mt-3 text-muted-foreground">
              Nossas ações reúnem crianças, jovens, adultos, famílias, educadores e voluntários
              em torno da experiência de ler, escutar, contar e criar histórias.
            </p>
            <Link to="/quem-somos/nossa-historia" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold">Nosso alcance</h2>
            <p className="mt-2 text-muted-foreground">Indicadores demonstrativos, editáveis pelo painel administrativo.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, label: "Livros disponíveis", value: "Indicador editável", color: "var(--brand-blue)" },
              { icon: Users, label: "Leitores cadastrados", value: "Indicador editável", color: "var(--brand-green)" },
              { icon: BookMarked, label: "Empréstimos realizados", value: "Indicador editável", color: "var(--brand-orange)" },
              { icon: Sparkles, label: "Atividades culturais", value: "Indicador editável", color: "var(--brand-red)" },
              { icon: Heart, label: "Pessoas atendidas", value: "Indicador editável", color: "var(--brand-pink)" },
              { icon: Handshake, label: "Comunidades alcançadas", value: "Indicador editável", color: "var(--brand-purple)" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ backgroundColor: color }}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display text-lg font-bold">{value}</div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <p className="mt-1 text-xs text-muted-foreground">Informação a ser cadastrada.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO A LEITURA SE TRANSFORMA EM IMPACTO */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold">Como a leitura se transforma em impacto</h2>
            <p className="mt-2 text-muted-foreground">Um caminho que começa no acesso aos livros e se estende à participação cultural da comunidade.</p>
          </div>
          <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: 1, title: "Acervo acessível", desc: "Organização e disponibilização gratuita de livros para a comunidade.", color: "var(--brand-blue)" },
              { n: 2, title: "Livros adequados", desc: "Seleção de obras para diferentes faixas etárias, interesses e necessidades.", color: "var(--brand-green)" },
              { n: 3, title: "Mediação de leitura", desc: "Atividades que aproximam leitores, histórias, educadores e comunidade.", color: "var(--brand-orange)" },
              { n: 4, title: "Novas possibilidades", desc: "Autonomia, imaginação, repertório e participação cultural.", color: "var(--brand-pink)" },
            ].map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-border bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl font-display text-lg font-bold text-white" style={{ backgroundColor: s.color }}>
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold">Projetos em destaque</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Iniciativas que aproximam livros, pessoas e territórios.
              </p>
            </div>
            <Link to="/projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Ver todos os projetos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: p.accent }}>
                  <div className="absolute inset-0 grid place-items-center text-white/90">
                    <BookOpen className="h-14 w-14" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2 py-1">{p.audience.split(",")[0]}</span>
                    <span className="rounded-full bg-muted px-2 py-1">{p.status}</span>
                  </div>
                  <Link to={`/projetos/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Conheça o projeto <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEITURA EM MOVIMENTO */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <h2 className="font-display text-3xl font-bold">Leitura em movimento</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Atividades regulares que conectam livros e comunidade.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessagesSquare, title: "Rodas de leitura", desc: "Encontros para ler e conversar em conjunto." },
              { icon: BookOpen, title: "Contação de histórias", desc: "Narrativas para crianças, jovens e adultos." },
              { icon: BookMarked, title: "Empréstimo de livros", desc: "Acesso gratuito ao acervo comunitário." },
              { icon: GraduationCap, title: "Oficinas literárias", desc: "Formação e criação em torno da palavra." },
              { icon: Users, title: "Encontros com autores", desc: "Diálogos entre leitores e escritores." },
              { icon: Library, title: "Ações em escolas", desc: "Atividades de leitura junto a educadores." },
              { icon: Sparkles, title: "Formação de mediadores", desc: "Capacitação para novas mediações." },
              { icon: Heart, title: "Campanhas de arrecadação", desc: "Doações que ampliam o acervo." },
            ].map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-white p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="grid gap-8 rounded-3xl border border-border bg-[var(--surface)] p-6 md:grid-cols-[220px_1fr] md:p-10">
            <div className="mx-auto grid h-40 w-40 place-items-center rounded-full text-white md:h-52 md:w-52" style={{ backgroundColor: "var(--brand-blue)" }}>
              <Users className="h-16 w-16" />
            </div>
            <div>
              <Quote className="h-10 w-10 text-primary" />
              <p className="mt-2 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                “A biblioteca abriu portas para leituras, encontros e novas amizades. É um espaço
                onde a comunidade se reconhece nas histórias.”
              </p>
              <div className="mt-4 text-sm font-semibold">Nome demonstrativo</div>
              <div className="text-xs text-muted-foreground">Participante das atividades — depoimento demonstrativo</div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS RECENTES */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold">Notícias recentes</h2>
              <p className="mt-2 text-muted-foreground">Registros demonstrativos das atividades da biblioteca.</p>
            </div>
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Ver todas as notícias <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((n) => (
              <article key={n.slug} className="overflow-hidden rounded-2xl border border-border bg-white">
                <div className="aspect-[16/10] bg-[oklch(0.94_0.02_240)] grid place-items-center text-muted-foreground text-sm">Imagem demonstrativa</div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full px-2 py-0.5 font-semibold text-white" style={{ backgroundColor: "var(--brand-blue)" }}>{n.tag}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{n.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{n.excerpt}</p>
                  <Link to={`/noticias/${n.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Leia mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APOIO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white" style={{ backgroundColor: "var(--brand-blue)" }}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold md:text-4xl">Apoie a biblioteca e amplie o acesso à leitura</h2>
              <p className="mt-3 text-white/90">
                Sua contribuição fortalece o acervo, as atividades culturais e a formação de
                leitores em nossa comunidade. Existem muitas formas de participar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90">
                  Quero apoiar <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/como-doar" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Conheça outras formas de ajudar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <h2 className="font-display text-2xl font-bold">Parceiros e apoiadores</h2>
          <p className="mt-2 text-muted-foreground">Logotipos demonstrativos — informações a serem cadastradas.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div key={p} className="grid h-20 place-items-center rounded-xl border border-border bg-white text-center text-xs text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
