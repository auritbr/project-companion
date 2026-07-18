import { useEffect, useState } from "react";

type Prefs = { necessary: true; preference: boolean; analytics: boolean; marketing: boolean };
const DEFAULT: Prefs = { necessary: true, preference: false, analytics: false, marketing: false };

export function CookieBanner({ openPrefsSignal }: { openPrefsSignal: number }) {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookie-consent");
      if (!saved) setVisible(true);
      else setPrefs({ ...DEFAULT, ...JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    if (openPrefsSignal > 0) {
      setShowPrefs(true);
      setVisible(true);
    }
  }, [openPrefsSignal]);

  const save = (p: Prefs) => {
    setPrefs(p);
    try { localStorage.setItem("cookie-consent", JSON.stringify(p)); } catch {}
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-4 shadow-xl sm:p-5">
        {!showPrefs ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm text-foreground">
              Utilizamos cookies para melhorar sua experiência de navegação, medir audiência e apoiar a comunicação da biblioteca. Você pode personalizar suas preferências.{" "}
              <a href="/politica-de-cookies" className="text-primary underline">Política de Cookies</a>.
            </p>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setShowPrefs(true)} className="rounded-full border border-border px-4 py-2 text-sm">Personalizar</button>
              <button onClick={() => save({ necessary: true, preference: false, analytics: false, marketing: false })} className="rounded-full border border-border px-4 py-2 text-sm">Recusar não essenciais</button>
              <button onClick={() => save({ necessary: true, preference: true, analytics: true, marketing: true })} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Aceitar todos</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-display text-base font-bold text-primary">Preferências de cookies</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { key: "necessary", label: "Cookies necessários", desc: "Essenciais para o funcionamento do site.", disabled: true },
                { key: "preference", label: "Cookies de preferência", desc: "Guardam suas escolhas de navegação." },
                { key: "analytics", label: "Cookies de análise", desc: "Ajudam a entender a utilização do site." },
                { key: "marketing", label: "Cookies de marketing", desc: "Utilizados em campanhas de comunicação." },
              ].map((c) => (
                <li key={c.key} className="flex items-start justify-between gap-4 rounded-lg border border-border p-3">
                  <div>
                    <div className="font-medium">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.desc}</div>
                  </div>
                  <input
                    type="checkbox"
                    disabled={c.disabled}
                    checked={c.disabled ? true : (prefs as any)[c.key]}
                    onChange={(e) => setPrefs({ ...prefs, [c.key]: e.target.checked } as Prefs)}
                    aria-label={c.label}
                    className="mt-1 h-4 w-4"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => save({ necessary: true, preference: false, analytics: false, marketing: false })} className="rounded-full border border-border px-4 py-2 text-sm">Recusar não essenciais</button>
              <button onClick={() => save(prefs)} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Salvar preferências</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}