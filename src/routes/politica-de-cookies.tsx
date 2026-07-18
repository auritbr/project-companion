import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({ meta: [{ title: "Política de Cookies — Biblioteca Comunitária" }, { name: "description", content: "Como utilizamos cookies e tecnologias similares neste site." }], links: [{ rel: "canonical", href: "/politica-de-cookies" }] }),
  component: () => (
    <LegalPage
      title="Política de Cookies"
      breadcrumb="Política de Cookies"
      sections={[
        { heading: "1. O que são cookies", body: ["Cookies são pequenos arquivos armazenados no seu dispositivo para melhorar sua experiência de navegação neste site."] },
        { heading: "2. Tipos de cookies utilizados", body: ["Utilizamos cookies estritamente necessários para o funcionamento do site, cookies de preferência (como opções de acessibilidade) e, mediante consentimento, cookies estatísticos para compreender o uso das páginas."] },
        { heading: "3. Gestão do consentimento", body: ["Você pode aceitar, personalizar ou recusar os cookies não essenciais pelo banner de cookies exibido no site. As preferências podem ser revistas a qualquer momento pelo botão de configurações de cookies."] },
        { heading: "4. Cookies de terceiros", body: ["Eventuais integrações de terceiros (ex.: player de vídeo, mapas) podem utilizar cookies próprios. Nesses casos, aplicam-se também as políticas dos respectivos provedores."] },
      ]}
    />
  ),
});