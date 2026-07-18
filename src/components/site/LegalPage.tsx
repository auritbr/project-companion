import { PageHero } from "./PageHero";

export function LegalPage({ title, breadcrumb, sections }: { title: string; breadcrumb: string; sections: { heading: string; body: string[] }[] }) {
  return (
    <>
      <PageHero title={title} description="Conteúdo demonstrativo — será revisado e substituído por texto jurídico definitivo." breadcrumbs={[{ label: breadcrumb }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-[820px] px-4 py-12">
          <div className="rounded-2xl border border-border bg-white p-6 md:p-10">
            {sections.map((s) => (
              <div key={s.heading} className="mt-8 first:mt-0">
                <h2 className="font-display text-2xl font-bold">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
            <p className="mt-10 text-xs text-muted-foreground">Última atualização: data a informar.</p>
          </div>
        </div>
      </section>
    </>
  );
}