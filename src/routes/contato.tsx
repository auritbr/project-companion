import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "../components/site/PageHero";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { heroImages } from "../lib/site-data";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato — Biblioteca Comunitária" },
      { name: "description", content: "Entre em contato com a biblioteca comunitária para dúvidas, parcerias, doações e voluntariado." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100),
  email: z.string().trim().email("E-mail inválido.").max(255),
  subject: z.string().trim().min(2, "Selecione um assunto."),
  message: z.string().trim().min(10, "Mensagem muito curta.").max(1000),
  consent: z.boolean().refine((v) => v === true, { message: "É necessário concordar com a política." }),
});

function Contato() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero title="Contato" breadcrumbs={[{ label: "Contato" }]} image={heroImages.contato} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_360px]">
            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              {sent ? (
                <div className="grid gap-3 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-7 w-7" /></div>
                  <h2 className="font-display text-2xl font-bold">Mensagem enviada</h2>
                  <p className="text-muted-foreground">Obrigado pelo contato. A equipe responderá em breve.</p>
                  <button onClick={() => setSent(false)} className="mx-auto mt-2 inline-flex items-center rounded-full border border-border px-4 py-2 text-sm">Enviar nova mensagem</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium">Nome</span>
                      <input name="name" required maxLength={100} className="rounded-lg border border-border bg-white px-3 py-2" />
                      {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium">E-mail</span>
                      <input name="email" type="email" required maxLength={255} className="rounded-lg border border-border bg-white px-3 py-2" />
                      {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                    </label>
                  </div>
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium">Assunto</span>
                    <select name="subject" required className="rounded-lg border border-border bg-white px-3 py-2">
                      <option value="">Selecione</option>
                      <option>Dúvidas</option>
                      <option>Parcerias</option>
                      <option>Doações</option>
                      <option>Voluntariado</option>
                      <option>Imprensa</option>
                      <option>Outros assuntos</option>
                    </select>
                    {errors.subject && <span className="text-xs text-destructive">{errors.subject}</span>}
                  </label>
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium">Mensagem</span>
                    <textarea name="message" required maxLength={1000} rows={6} className="rounded-lg border border-border bg-white px-3 py-2" />
                    {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                  </label>
                  <label className="flex items-start gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" name="consent" className="mt-1" />
                    <span>Li e concordo com a <a href="/politica-de-privacidade" className="font-semibold text-primary hover:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para retorno deste contato.</span>
                  </label>
                  {errors.consent && <span className="text-xs text-destructive">{errors.consent}</span>}
                  <div>
                    <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Enviar mensagem</button>
                  </div>
                </form>
              )}
            </div>

            <aside className="grid gap-4">
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-display text-lg font-bold">Informações de contato</h3>
                <ul className="mt-3 grid gap-3 text-sm">
                  <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Endereço a cadastrar — bairro, cidade/UF</li>
                  <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> (00) 0000-0000 · WhatsApp demonstrativo</li>
                  <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> contato@biblioteca.org (demonstrativo)</li>
                  <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /> Seg. a sex., horário a informar</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-[var(--surface)]">
                <div className="aspect-[4/3] grid place-items-center text-sm text-muted-foreground">Mapa demonstrativo — a integrar</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}