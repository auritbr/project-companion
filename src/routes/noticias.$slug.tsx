import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
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
      <section className="relative overflow-hidden border-b border-border bg-black">
        <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
        <div className="relative mx-auto max-w-[1280px] px-4 pb-12 pt-10 md:pb-16 md:pt-16">
          <Link to="/noticias" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur hover:bg-white/20">
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Notícias
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--brand-blue)" }}>{item.tag}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"><Calendar className="h-3.5 w-3.5" /> {item.date}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">{item.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {item.author}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {item.readingTime}</span>
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
            <h2 className="font-display text-2xl font-bold">Galeria de fotos</h2>
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