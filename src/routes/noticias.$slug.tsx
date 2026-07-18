import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { news } from "../lib/site-data";
import { ArrowLeft, ArrowRight, Copy, Facebook, Linkedin, Mail, MessageCircle, Twitter, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `${loaderData.title} — Notícias` }, { name: "description", content: loaderData.excerpt }, { property: "og:type", content: "article" }]
      : [{ title: "Notícia não encontrada" }, { name: "robots", content: "noindex" }],
  }),
  component: NoticiaDetalhe,
});

function NoticiaDetalhe() {
  const item = Route.useLoaderData();
  const params = Route.useParams();
  const [copied, setCopied] = useState(false);
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <section className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: "Notícias", to: "/noticias" }, { label: item.title }]} />
        </div>
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-8 md:grid-cols-[1.15fr_1fr] md:items-center md:py-12">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--brand-blue)" }}>
              {item.tag}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{item.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {item.date}</span>
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {item.author}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {item.readingTime}</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div aria-hidden className="absolute -left-3 -top-3 h-16 w-16 rounded-2xl" style={{ backgroundColor: "var(--brand-orange)", opacity: 0.2 }} />
              <div aria-hidden className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.2 }} />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <img src={item.image} alt="" className="aspect-[16/10] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[820px] px-4 py-10">
          <article className="prose prose-slate max-w-none">
            {item.body.map((p: string, i: number) => (
              <p key={i} className="mt-4 text-foreground/85 leading-relaxed">{p}</p>
            ))}

            <h2 className="mt-8 font-display text-2xl font-bold">Registros da atividade</h2>
            <ul className="mt-3 list-disc pl-6 text-muted-foreground">
              <li>Participação da comunidade em diferentes momentos.</li>
              <li>Mediação de leitura conduzida pela equipe.</li>
              <li>Compartilhamento de impressões pelos leitores.</li>
            </ul>

            <blockquote className="mt-6 rounded-2xl border-l-4 bg-[var(--surface)] p-5 italic text-muted-foreground" style={{ borderColor: "var(--brand-blue)" }}>
              “Trecho demonstrativo de citação relacionada à atividade — conteúdo editável pelo painel administrativo.”
            </blockquote>
          </article>

          {/* Compartilhar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <span className="text-sm font-semibold">Compartilhar:</span>
            <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(item.title + " " + shareUrl)}`} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted" aria-label="Compartilhar no WhatsApp"><MessageCircle className="h-4 w-4" /></a>
            <a target="_blank" rel="noopener noreferrer" href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted" aria-label="Compartilhar no Facebook"><Facebook className="h-4 w-4" /></a>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted" aria-label="Compartilhar no LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(item.title)}`} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted" aria-label="Compartilhar no X"><Twitter className="h-4 w-4" /></a>
            <a href={`mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(shareUrl)}`} className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted" aria-label="Compartilhar por e-mail"><Mail className="h-4 w-4" /></a>
            <button onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-sm hover:bg-muted"><Copy className="h-4 w-4" /> Copiar link</button>
            {copied && <span className="text-xs text-muted-foreground">Link copiado.</span>}
          </div>

          {/* Galeria */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold">Galeria da atividade</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-[oklch(0.94_0.02_240)] grid place-items-center text-xs text-muted-foreground">Imagem {i + 1}</div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar para todas as notícias</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <h2 className="font-display text-2xl font-bold">Notícias relacionadas</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((n) => (
              <article key={n.slug} className="overflow-hidden rounded-2xl border border-border bg-white">
                <Link to={`/noticias/${n.slug}`} className="block aspect-[16/10] overflow-hidden bg-[oklch(0.94_0.02_240)]">
                  <img src={n.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </Link>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{n.tag} · {n.date}</div>
                  <h3 className="mt-2 font-display text-base font-semibold">{n.title}</h3>
                  <Link to={`/noticias/${n.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Leia mais <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}