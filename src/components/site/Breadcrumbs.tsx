import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-primary">Início</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {it.to ? <Link to={it.to} className="hover:text-primary">{it.label}</Link> : <span className="text-foreground">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}