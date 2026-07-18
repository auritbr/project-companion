import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { BookOpen, Heart, Users, Sparkles, Handshake, GraduationCap, Library, MessagesSquare, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quem-somos/")({
  component: QuemSomos,
  head: () => ({
    meta: [
      { title: "Quem Somos — Biblioteca Comunitária" },
      { name: "description", content: "Conheça a biblioteca comunitária, sua missão, valores e atuação como Ponto de Cultura." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
});

function QuemSomos() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        description="Uma biblioteca comunitária dedicada ao acesso à leitura, à formação de leitores e à realização de atividades culturais junto à comunidade."
        breadcrumbs={[{ label: "Quem Somos" }]}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Uma biblioteca próxima da comunidade</h2>
            <p className="mt-4 text-muted-foreground">
              Atuamos como um espaço de convivência, acesso aos livros e formação cultural. Nossas
              ações reúnem crianças, jovens, adultos, famílias e educadores em torno da leitura e
              da experiência de contar e criar histórias.
            </p>
            <p className="mt-3 text-muted-foreground">
              Como Ponto de Cultura, articulamos leitura, educação e cidadania para fortalecer o
              vínculo entre a comunidade e o universo dos livros.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quem-somos/nossa-historia" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Nossa história <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/quem-somos/equipe" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold">Equipe</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Território de atuação", value: "Comunidade e bairros da região" },
              { label: "Comunidade atendida", value: "Crianças, jovens, adultos, famílias e educadores" },
              { label: "Atuação", value: "Biblioteca comunitária e Ponto de Cultura" },
              { label: "Formato das ações", value: "Presenciais, comunitárias e em rede" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-[var(--surface)] p-4">
                <div className="text-xs font-semibold uppercase text-primary">{c.label}</div>
                <div className="mt-1 text-sm text-foreground">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          <h2 className="font-display text-3xl font-bold">Missão, visão e valores</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Missão", desc: "Ampliar o acesso à leitura, promover a formação de leitores e fortalecer a vida cultural da comunidade.", color: "var(--brand-blue)" },
              { icon: Sparkles, title: "Visão", desc: "Ser referência comunitária de leitura, mediação cultural e educação como direito coletivo.", color: "var(--brand-orange)" },
              { icon: Heart, title: "Valores", desc: "Acesso democrático, diversidade, participação, respeito, acolhimento, educação, cultura e transparência.", color: "var(--brand-red)" },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ backgroundColor: v.color }}>
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold">Valores que orientam a atuação</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Acesso democrático","Diversidade","Participação comunitária","Educação","Cultura","Respeito","Acolhimento","Transparência"].map((v, i) => (
                <span key={v} className="rounded-full border border-border bg-white px-3 py-1 text-sm" style={{ color: ["var(--brand-blue)","var(--brand-green)","var(--brand-orange)","var(--brand-red)","var(--brand-pink)","var(--brand-purple)","var(--brand-yellow)","var(--brand-blue)"][i % 8] }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          <h2 className="font-display text-3xl font-bold">Como atuamos</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Etapas que orientam o trabalho da biblioteca em diálogo com a comunidade.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: MessagesSquare, title: "Escuta da comunidade", color: "var(--brand-blue)" },
              { icon: Library, title: "Organização do acervo", color: "var(--brand-green)" },
              { icon: BookOpen, title: "Acesso aos livros", color: "var(--brand-yellow)" },
              { icon: Users, title: "Mediação cultural", color: "var(--brand-orange)" },
              { icon: GraduationCap, title: "Formação", color: "var(--brand-red)" },
              { icon: Handshake, title: "Acompanhamento", color: "var(--brand-purple)" },
            ].map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-white p-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg text-white" style={{ backgroundColor: s.color }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground">Etapa {i + 1}</div>
                <h3 className="mt-1 font-display text-base font-semibold">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}