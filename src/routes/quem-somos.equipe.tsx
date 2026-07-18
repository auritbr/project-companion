import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { team } from "../lib/site-data";
import { User } from "lucide-react";

export const Route = createFileRoute("/quem-somos/equipe")({
  component: Equipe,
  head: () => ({
    meta: [
      { title: "Equipe — Biblioteca Comunitária" },
      { name: "description", content: "Conheça as pessoas que fazem parte da biblioteca comunitária." },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
});

const areas = ["Todos","Diretoria","Coordenação","Educadores","Mediação","Administrativo","Voluntariado"];
const colors = ["var(--brand-blue)","var(--brand-green)","var(--brand-orange)","var(--brand-red)","var(--brand-pink)","var(--brand-purple)"];

function Equipe() {
  const [area, setArea] = useState("Todos");
  const filtered = useMemo(() => area === "Todos" ? team : team.filter((m) => m.area === area), [area]);

  return (
    <>
      <PageHero title="Nossa equipe" description="A atuação da biblioteca é realizada por pessoas comprometidas com a leitura, a educação e o desenvolvimento comunitário." breadcrumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-10">
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <button key={a} onClick={() => setArea(a)} className={`rounded-full border px-4 py-2 text-sm ${area === a ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:bg-muted"}`}>{a}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-[var(--surface)] p-10 text-center text-muted-foreground">
              Nenhum integrante cadastrado nesta área.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <article key={i} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-[45%_55%_45%_55%/55%_45%_55%_45%] text-white" style={{ backgroundColor: colors[i % colors.length] }}>
                    <User className="h-14 w-14" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-display text-lg font-semibold">{m.name}</div>
                    <div className="text-sm text-primary">{m.role}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
                    <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{m.area}</div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}