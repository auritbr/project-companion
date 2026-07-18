import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

const mainNav: Array<{
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}> = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Equipe", to: "/quem-somos/equipe" },
      { label: "Transparência", to: "/quem-somos/transparencia" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Leitura em Comunidade", to: "/projetos/leitura-em-comunidade" },
      { label: "Estante Viva", to: "/projetos/estante-viva" },
      { label: "Palavras que Transformam", to: "/projetos/palavras-que-transformam" },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Contato", to: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur transition-all ${
        scrolled ? "shadow-sm py-2" : "py-3"
      } rounded-b-2xl border-b border-border`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Página inicial">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
            B
          </span>
          <span className="hidden font-display text-base font-bold text-primary sm:block leading-tight">
            Biblioteca Comunitária
            <span className="block text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
              Ponto de Cultura
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1" aria-label="Menu principal">
          {mainNav.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-primary/5"
                activeProps={{ className: "text-primary bg-primary/5" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 group-hover:visible group-hover:opacity-100 transition">
                  <ul className="min-w-[220px] rounded-xl border border-border bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/como-doar"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            <Heart className="h-4 w-4" />
            Apoie a Biblioteca
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            className="xl:hidden grid h-10 w-10 place-items-center rounded-md border border-border text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 xl:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-bold text-primary">Menu</span>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-md border border-border"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-4 space-y-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-md px-3 py-2 font-medium text-foreground"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Abrir submenu de ${item.label}`}
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === item.to ? null : item.to)
                        }
                        className="grid h-9 w-9 place-items-center rounded-md hover:bg-primary/5"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition ${openSubmenu === item.to ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openSubmenu === item.to && (
                    <ul className="ml-3 border-l border-border pl-3">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-foreground/80"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to="/como-doar"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-red)] px-4 py-3 text-sm font-semibold text-white"
            >
              <Heart className="h-4 w-4" /> Apoie a Biblioteca
            </Link>
            <div className="mt-6 flex gap-3 text-sm text-muted-foreground">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}