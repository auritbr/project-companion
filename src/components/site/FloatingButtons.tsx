import { useState } from "react";
import { Accessibility, Cookie, MessageCircle } from "lucide-react";
import { AccessibilityPanel } from "./AccessibilityPanel";
import { CookieBanner } from "./CookieBanner";

export function FloatingButtons() {
  const [a11yOpen, setA11yOpen] = useState(false);
  const [cookieSignal, setCookieSignal] = useState(0);

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setCookieSignal((s) => s + 1)}
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
          className="group grid h-11 w-11 place-items-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-border hover:bg-muted"
        >
          <Cookie className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setA11yOpen(true)}
          aria-label="Abrir painel de acessibilidade"
          title="Acessibilidade"
          className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg hover:brightness-110"
        >
          <Accessibility className="h-5 w-5" />
        </button>
      </div>

      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="WhatsApp"
        className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl hover:brightness-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <AccessibilityPanel open={a11yOpen} onClose={() => setA11yOpen(false)} />
      <CookieBanner openPrefsSignal={cookieSignal} />
    </>
  );
}