import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingButtons } from "../components/site/FloatingButtons";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-center justify-center px-4 py-20 text-center">
        <div aria-hidden className="flex items-end justify-center gap-1.5">
          <div className="h-24 w-6 rounded-t-md bg-[var(--brand-blue)]" />
          <div className="h-32 w-7 rounded-t-md bg-[var(--brand-orange)]" />
          <div className="h-20 w-6 rounded-t-md bg-[var(--brand-pink)] opacity-40" />
          <div className="h-28 w-6 rounded-t-md bg-[var(--brand-green)] opacity-40" />
          <div className="h-24 w-7 rounded-t-md bg-[var(--brand-purple)]" />
        </div>
        <div aria-hidden className="mx-auto -mt-px h-2 w-64 rounded-sm bg-[oklch(0.55_0.08_60)]" />
        <div className="mt-6 text-5xl font-display font-bold text-primary">404</div>
        <h1 className="mt-3 font-display text-2xl font-bold text-foreground">
          Esta página não foi encontrada em nossa estante.
        </h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          O endereço acessado pode ter sido movido ou não existe mais. Você pode voltar
          ao início ou pesquisar outros conteúdos.
        </p>
        <form className="mt-6 flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Pesquisar no site"
            aria-label="Pesquisar"
            className="flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm"
          />
          <button type="submit" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Buscar
          </button>
        </form>
        <Link to="/" className="mt-6 inline-flex rounded-full border border-border bg-white px-5 py-2 text-sm font-medium hover:bg-muted">
          Voltar ao início
        </Link>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Biblioteca Comunitária — Ponto de Cultura" },
      {
        name: "description",
        content:
          "Biblioteca comunitária e Ponto de Cultura dedicada ao acesso gratuito à leitura, mediação literária, formação de leitores e ações culturais junto à comunidade.",
      },
      { property: "og:title", content: "Biblioteca Comunitária — Ponto de Cultura" },
      {
        property: "og:description",
        content:
          "Livros que aproximam pessoas e transformam comunidades. Acesso à leitura, formação e cultura para toda a comunidade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Biblioteca Comunitária" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as any },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </QueryClientProvider>
  );
}
