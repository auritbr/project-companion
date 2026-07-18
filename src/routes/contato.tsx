import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "../components/site/PageHero";
import { Mail, MapPin, Phone, Clock, CheckCircle2, MessageCircle, Instagram, Facebook, Youtube, Send } from "lucide-react";
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
  phone: z.string().trim().max(30).optional(),
  contactType: z.string().trim().min(1, "Selecione o tipo de contato."),
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
      phone: String(fd.get("phone") ?? ""),
      contactType: String(fd.get("contactType") ?? ""),
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
        <div className="mx-auto max-w-[1180px] px-4 py-12">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
            {/* Formulário — mais estreito */}
            <div className="mx-auto w-full max-w-[560px]">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-primary">
                  <Send className="h-3.5 w-3.5" /> Envie uma mensagem
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold">Fale com a biblioteca</h2>
                <p className="mt-1 text-sm text-muted-foreground">Preencha o formulário e retornaremos em breve.</p>

                {sent ? (
                  <div className="mt-6 grid gap-3 rounded-xl border border-border bg-[var(--surface)] p-6 text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-7 w-7" /></div>
                    <h3 className="font-display text-xl font-bold">Mensagem enviada</h3>
                    <p className="text-sm text-muted-foreground">Obrigado pelo contato. A equipe responderá em breve.</p>
                    <button onClick={() => setSent(false)} className="mx-auto mt-2 inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm">Enviar nova mensagem</button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4">
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium">Nome</span>
                      <input name="name" required maxLength={100} className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none" />
                      {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                    </label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1 text-sm">
                        <span className="font-medium">E-mail</span>
                        <input name="email" type="email" required maxLength={255} className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none" />
                        {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                      </label>
                      <label className="grid gap-1 text-sm">
                        <span className="font-medium">Telefone <span className="font-normal text-muted-foreground">(opcional)</span></span>
                        <input name="phone" maxLength={30} className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none" />
                      </label>
                    </div>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium">Tipo de contato</span>
                      <select name="contactType" required defaultValue="" className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none">
                        <option value="" disabled>Selecione</option>
                        <option>Pessoa física</option>
                        <option>Instituição de ensino</option>
                        <option>Empresa ou parceiro</option>
                        <option>Imprensa</option>
                        <option>Voluntariado</option>
                      </select>
                      {errors.contactType && <span className="text-xs text-destructive">{errors.contactType}</span>}
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="font-medium">Assunto</span>
                      <select name="subject" required defaultValue="" className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none">
                        <option value="" disabled>Selecione</option>
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
                      <textarea name="message" required maxLength={1000} rows={5} className="rounded-lg border border-border bg-white px-3 py-2 focus:border-primary focus:outline-none" />
                      {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                    </label>
                    <label className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" name="consent" className="mt-1" />
                      <span>Li e concordo com a <a href="/politica-de-privacidade" className="font-semibold text-primary hover:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para retorno deste contato.</span>
                    </label>
                    {errors.consent && <span className="text-xs text-destructive">{errors.consent}</span>}
                    <div>
                      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110">
                        Enviar mensagem <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Card de informações — inspirado em ficha de biblioteca */}
            <aside className="grid gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div aria-hidden className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: "var(--brand-blue)" }} />
                <div aria-hidden className="absolute left-1.5 top-0 h-full w-px bg-white/60" />
                <div className="p-6 pl-7">
                  <h3 className="font-display text-xl font-bold">Informações da biblioteca</h3>

                  <ul className="mt-5 space-y-4 text-sm">
                    {[
                      { icon: MapPin, color: "var(--brand-red)", label: "Endereço", value: "Endereço a cadastrar — bairro, cidade/UF" },
                      { icon: Phone, color: "var(--brand-green)", label: "Telefone", value: "(00) 0000-0000" },
                      { icon: MessageCircle, color: "var(--brand-orange)", label: "WhatsApp", value: "+55 (00) 00000-0000" },
                      { icon: Mail, color: "var(--brand-blue)", label: "E-mail", value: "contato@biblioteca.org" },
                      { icon: Clock, color: "var(--brand-purple)", label: "Horário", value: "Seg. a sex., horário a informar" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white" style={{ backgroundColor: item.color }}>
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                          <div className="mt-0.5 font-medium text-foreground">{item.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-dashed border-border pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Nas redes</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a href="#" aria-label="Instagram" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-muted"><Instagram className="h-3.5 w-3.5" /> Instagram</a>
                      <a href="#" aria-label="Facebook" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-muted"><Facebook className="h-3.5 w-3.5" /> Facebook</a>
                      <a href="#" aria-label="YouTube" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-muted"><Youtube className="h-3.5 w-3.5" /> YouTube</a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-[var(--surface)]">
                <iframe
                  title="Mapa da biblioteca"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6600%2C-23.5600%2C-46.6200%2C-23.5300&layer=mapnik"
                  loading="lazy"
                  className="block h-[300px] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}