import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  component: NossaHistoria,
  head: () => ({
    meta: [
      { title: "Nossa História — Biblioteca Comunitária" },
      { name: "description", content: "A trajetória da biblioteca comunitária: origens, marcos e perspectivas para o futuro." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/nossa-historia" }],
  }),
});

const timeline = [
  { year: "Ano de fundação", title: "Início da biblioteca", desc: "Criação da biblioteca a partir da mobilização da comunidade e da doação dos primeiros livros.", color: "var(--brand-blue)" },
  { year: "Ano do primeiro espaço", title: "Primeiro espaço físico", desc: "Organização de um espaço de leitura aberto ao público em parceria com moradores.", color: "var(--brand-green)" },
  { year: "Ano da primeira ampliação", title: "Ampliação do acervo", desc: "Campanha comunitária que ampliou a diversidade de obras disponíveis.", color: "var(--brand-yellow)" },
  { year: "Ano do primeiro projeto", title: "Criação dos primeiros projetos", desc: "Início de rodas de leitura, oficinas e mediação literária.", color: "var(--brand-orange)" },
  { year: "Ano das parcerias", title: "Novas parcerias", desc: "Articulação com escolas, coletivos culturais e apoiadores.", color: "var(--brand-red)" },
  { year: "Ano do reconhecimento", title: "Atuação como Ponto de Cultura", desc: "Ampliação das ações culturais e educativas em rede.", color: "var(--brand-purple)" },
];

function NossaHistoria() {
  return (
    <>
      <PageHero title="Nossa História" description="Uma trajetória construída coletivamente, ligada à leitura, à educação e à vida cultural da comunidade." breadcrumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Nossa História" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12">
          <p className="text-muted-foreground">
            A biblioteca surgiu do desejo comunitário de garantir acesso aos livros, à leitura e a
            atividades culturais. Ao longo dos anos, ampliamos o acervo, os projetos e as parcerias,
            sempre em diálogo com moradores, educadores e coletivos locais. Este é um resumo
            demonstrativo da nossa história — os marcos reais serão cadastrados no painel administrativo.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1000px] px-4 py-14">
          <ol className="space-y-6">
            {timeline.map((m, i) => (
              <li key={i} className="relative rounded-2xl border border-border bg-white p-5 shadow-sm">
                <span className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl" style={{ backgroundColor: m.color }} />
                <div className="pl-3">
                  <div className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold text-white" style={{ backgroundColor: m.color }}>{m.year}</div>
                  <h3 className="mt-2 font-display text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}