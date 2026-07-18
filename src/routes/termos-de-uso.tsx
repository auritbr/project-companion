import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({ meta: [{ title: "Termos de Uso — Biblioteca Comunitária" }, { name: "description", content: "Termos e condições de uso do site institucional da biblioteca comunitária." }], links: [{ rel: "canonical", href: "/termos-de-uso" }] }),
  component: () => (
    <LegalPage
      title="Termos de Uso"
      breadcrumb="Termos de Uso"
      sections={[
        { heading: "1. Aceitação", body: ["Ao acessar este site, o usuário concorda com estes Termos de Uso demonstrativos. Caso não concorde, deve interromper o acesso."] },
        { heading: "2. Uso do conteúdo", body: ["Os conteúdos disponibilizados possuem finalidade informativa e institucional. É vedado o uso comercial sem autorização prévia da biblioteca."] },
        { heading: "3. Responsabilidades", body: ["A biblioteca se empenha em manter as informações atualizadas, porém não se responsabiliza por eventuais indisponibilidades ou imprecisões."] },
        { heading: "4. Propriedade intelectual", body: ["Textos, imagens e demais elementos são de titularidade da biblioteca ou de seus parceiros, sendo protegidos pela legislação vigente."] },
        { heading: "5. Alterações", body: ["Estes termos podem ser atualizados a qualquer momento, sendo recomendável consulta periódica."] },
        { heading: "6. Foro", body: ["Fica eleito o foro da comarca da sede da instituição para dirimir eventuais controvérsias, com renúncia expressa a qualquer outro."] },
      ]}
    />
  ),
});