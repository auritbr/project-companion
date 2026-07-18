import { useEffect, useState } from "react";
import { X, Accessibility } from "lucide-react";

type Prefs = {
  fontScale: number;
  contrast: "none" | "high" | "invert" | "grayscale";
  highlightLinks: boolean;
  lineSpacing: boolean;
  letterSpacing: boolean;
  readableFont: boolean;
  pauseAnimations: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
};

const DEFAULTS: Prefs = {
  fontScale: 1,
  contrast: "none",
  highlightLinks: false,
  lineSpacing: false,
  letterSpacing: false,
  readableFont: false,
  pauseAnimations: false,
  bigCursor: false,
  readingGuide: false,
};

function applyPrefs(p: Prefs) {
  const html = document.documentElement;
  html.style.fontSize = `${p.fontScale * 100}%`;
  html.classList.toggle("a11y-contrast-high", p.contrast === "high");
  html.classList.toggle("a11y-contrast-invert", p.contrast === "invert");
  html.classList.toggle("a11y-contrast-grayscale", p.contrast === "grayscale");
  html.classList.toggle("a11y-links", p.highlightLinks);
  html.classList.toggle("a11y-line-spacing", p.lineSpacing);
  html.classList.toggle("a11y-letter-spacing", p.letterSpacing);
  html.classList.toggle("a11y-readable", p.readableFont);
  html.classList.toggle("a11y-no-anim", p.pauseAnimations);
  html.classList.toggle("a11y-big-cursor", p.bigCursor);
  html.classList.toggle("a11y-reading-guide", p.readingGuide);
}

export function AccessibilityPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("a11y-prefs");
      if (saved) {
        const parsed = { ...DEFAULTS, ...JSON.parse(saved) } as Prefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {}
  }, []);

  const update = (patch: Partial<Prefs>) => {
    const next = { ...prefs, ...patch };
    setPrefs(next);
    applyPrefs(next);
    try { localStorage.setItem("a11y-prefs", JSON.stringify(next)); } catch {}
  };

  const reset = () => {
    setPrefs(DEFAULTS);
    applyPrefs(DEFAULTS);
    try { localStorage.removeItem("a11y-prefs"); } catch {}
  };

  if (!open) return null;

  const Toggle = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
        active ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-muted"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[60] bg-black/40" onClick={onClose} role="dialog" aria-modal="true" aria-label="Painel de acessibilidade">
      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-primary">
            <Accessibility className="h-5 w-5" /> Acessibilidade
          </h2>
          <button aria-label="Fechar" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-md border border-border">
            <X className="h-4 w-4" />
          </button>
        </div>

        <section className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tamanho do texto</h3>
          <div className="mt-2 flex gap-2">
            <button onClick={() => update({ fontScale: Math.max(0.85, prefs.fontScale - 0.1) })} className="flex-1 rounded-md border border-border py-2 text-sm">A−</button>
            <button onClick={() => update({ fontScale: 1 })} className="flex-1 rounded-md border border-border py-2 text-sm">A</button>
            <button onClick={() => update({ fontScale: Math.min(1.5, prefs.fontScale + 0.1) })} className="flex-1 rounded-md border border-border py-2 text-sm">A+</button>
          </div>
        </section>

        <section className="mt-6 grid gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contraste</h3>
          <Toggle label="Alto contraste" active={prefs.contrast === "high"} onClick={() => update({ contrast: prefs.contrast === "high" ? "none" : "high" })} />
          <Toggle label="Contraste invertido" active={prefs.contrast === "invert"} onClick={() => update({ contrast: prefs.contrast === "invert" ? "none" : "invert" })} />
          <Toggle label="Escala de cinza" active={prefs.contrast === "grayscale"} onClick={() => update({ contrast: prefs.contrast === "grayscale" ? "none" : "grayscale" })} />
        </section>

        <section className="mt-6 grid gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Leitura</h3>
          <Toggle label="Destacar links" active={prefs.highlightLinks} onClick={() => update({ highlightLinks: !prefs.highlightLinks })} />
          <Toggle label="Espaçamento entre linhas" active={prefs.lineSpacing} onClick={() => update({ lineSpacing: !prefs.lineSpacing })} />
          <Toggle label="Espaçamento entre letras" active={prefs.letterSpacing} onClick={() => update({ letterSpacing: !prefs.letterSpacing })} />
          <Toggle label="Fonte de alta legibilidade" active={prefs.readableFont} onClick={() => update({ readableFont: !prefs.readableFont })} />
          <Toggle label="Guia de leitura" active={prefs.readingGuide} onClick={() => update({ readingGuide: !prefs.readingGuide })} />
        </section>

        <section className="mt-6 grid gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Interação</h3>
          <Toggle label="Pausar animações" active={prefs.pauseAnimations} onClick={() => update({ pauseAnimations: !prefs.pauseAnimations })} />
          <Toggle label="Ampliar cursor" active={prefs.bigCursor} onClick={() => update({ bigCursor: !prefs.bigCursor })} />
        </section>

        <button onClick={reset} className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
          Restaurar configurações
        </button>
      </div>
    </div>
  );
}