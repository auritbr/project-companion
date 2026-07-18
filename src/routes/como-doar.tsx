import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { heroImages } from "../lib/site-data";
import { BookOpen, Building2, Copy, HandHeart, Heart, ShieldCheck, Users } from "lucide-react";

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

  const impacts = [
    { icon: BookOpen, t: "R$ 30", d: "Contribui com a compra de livros para o acervo comunitário." },
    { icon: Users, t: "R$ 60", d: "Apoia uma roda de leitura em bairros e escolas." },
    { icon: HandHeart, t: "R$ 120", d: "Fortalece oficinas de formação de mediadores e leitores." },
  ];

  return (
    <>
      <PageHero title="Como Doar" breadcrumbs={[{ label: "Como Doar" }]} image={heroImages.comoDoar} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {impacts.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-[var(--surface)] p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></div>
                <div className="mt-3 font-display text-xl font-bold">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
              <div className="mt-4 aspect-square max-w-[200px] rounded-2xl border border-border bg-[var(--surface)] grid place-items-center text-xs text-muted-foreground">QR Code demonstrativo</div>
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ backgroundColor: "var(--brand-green)" }}><BookOpen className="h-5 w-5 text-white" /></div>
              <h3 className="mt-3 font-display text-xl font-bold">Doação de livros</h3>
              <p className="mt-2 text-sm text-muted-foreground">Aceitamos livros em bom estado para compor o acervo comunitário e ampliar os pontos de leitura. Entre em contato para combinar a entrega.</p>
              <Link to="/contato" className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline">Combinar entrega</Link>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ backgroundColor: "var(--brand-orange)" }}><Heart className="h-5 w-5 text-white" /></div>
              <h3 className="mt-3 font-display text-xl font-bold">Voluntariado</h3>
              <p className="mt-2 text-sm text-muted-foreground">Participe das atividades como mediador(a) de leitura, apoiador(a) de eventos ou colaborador(a) na organização do acervo.</p>
              <Link to="/contato" className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline">Quero ser voluntário(a)</Link>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-[var(--surface)] p-8">
            <h2 className="font-display text-2xl font-bold">Transparência no uso dos recursos</h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">Todos os recursos recebidos são aplicados nos projetos, no acervo e nas ações culturais da biblioteca. A prestação de contas está disponível na página de <Link to="/quem-somos/transparencia" className="font-semibold text-primary hover:underline">Transparência</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}