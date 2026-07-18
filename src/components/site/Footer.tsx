import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Clock, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24">
      {/* Decorative divider — lombadas/marcadores */}
      <div aria-hidden className="mx-auto max-w-[1280px] px-4">
        <div className="flex h-3 gap-1 overflow-hidden rounded-t-md">
          {[
            "var(--brand-blue)",
            "var(--brand-green)",
            "var(--brand-yellow)",
            "var(--brand-orange)",
            "var(--brand-red)",
            "var(--brand-pink)",
            "var(--brand-purple)",
          ].map((c, i) => (
            <span key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>

      <div className="bg-[oklch(0.18_0.04_260)] text-white/85">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 font-display font-bold">B</span>
              <div>
                <div className="font-display font-bold text-white">Biblioteca Comunitária</div>
                <div className="text-[11px] uppercase tracking-wide text-white/60">Ponto de Cultura</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Uma biblioteca comunitária dedicada ao acesso livre à leitura, à formação
              de leitores e à realização de atividades culturais e educativas junto à
              comunidade.
            </p>
            <p className="mt-3 text-xs text-white/60">Atuação como Ponto de Cultura — informações a serem cadastradas.</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Institucional</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/quem-somos" className="hover:text-white">Quem Somos</Link></li>
              <li><Link to="/quem-somos/nossa-historia" className="hover:text-white">Nossa História</Link></li>
              <li><Link to="/quem-somos/equipe" className="hover:text-white">Equipe</Link></li>
              <li><Link to="/transparencia" className="hover:text-white">Transparência</Link></li>
              <li><Link to="/noticias" className="hover:text-white">Notícias</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Projetos & Apoio</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/projetos" className="hover:text-white">Todos os Projetos</Link></li>
              <li><Link to="/projetos/leitura-em-comunidade" className="hover:text-white">Leitura em Comunidade</Link></li>
              <li><Link to="/projetos/estante-viva" className="hover:text-white">Estante Viva</Link></li>
              <li><Link to="/projetos/palavras-que-transformam" className="hover:text-white">Palavras que Transformam</Link></li>
              <li><Link to="/como-doar" className="hover:text-white">Como Doar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Endereço a ser cadastrado</li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> Telefone a ser informado</li>
              <li className="flex gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp demonstrativo</li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> contato@informacao-editavel</li>
              <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" /> Horário a ser cadastrado</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Biblioteca Comunitária — Ponto de Cultura. Conteúdo demonstrativo.</div>
            <div className="flex flex-wrap gap-4">
              <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
              <Link to="/politica-de-cookies" className="hover:text-white">Política de Cookies</Link>
              <Link to="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}