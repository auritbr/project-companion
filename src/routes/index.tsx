import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Users,
  Heart,
  Sparkles,
  Library,
  BookMarked,
  MessagesSquare,
  GraduationCap,
  Handshake,
  Quote,
  ArrowRight,
} from "lucide-react";
import { projects, news, partners } from "../lib/site-data";

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
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <BookMarked className="h-3.5 w-3.5" /> Biblioteca Comunitária e Ponto de Cultura
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Livros que aproximam pessoas e{" "}
              <span className="text-primary">transformam comunidades.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Um espaço de acesso à leitura, encontros, formação e construção de novas
              histórias junto à comunidade.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
                Conheça a Biblioteca <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                Conheça nossos projetos
              </Link>
            </div>
          </div>

          {/* Book-shaped composition */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* Book-open shape */}
              <div className="absolute inset-0 rounded-[40%_40%_20%_20%/30%_30%_15%_15%] bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)] shadow-xl" />
              <div className="absolute inset-3 rounded-[40%_40%_20%_20%/30%_30%_15%_15%] bg-[var(--surface)] p-4">
                <div className="grid h-full place-items-center rounded-[36%_36%_16%_16%/26%_26%_12%_12%] bg-[oklch(0.94_0.02_240)]">
                  <div className="p-6 text-center">
                    <Library className="mx-auto h-16 w-16 text-primary" />
                    <div className="mt-3 font-display text-sm font-semibold text-foreground">
                      Espaço aberto à leitura, à cultura e à comunidade.
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative bookmarks */}
              <span className="absolute -right-2 top-6 h-16 w-6 rounded-b-md" style={{ backgroundColor: "var(--brand-red)" }} />
              <span className="absolute -left-2 top-16 h-12 w-5 rounded-b-md" style={{ backgroundColor: "var(--brand-yellow)" }} />
              <span className="absolute -bottom-3 right-10 h-6 w-24 rounded-md" style={{ backgroundColor: "var(--brand-green)" }} />
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
