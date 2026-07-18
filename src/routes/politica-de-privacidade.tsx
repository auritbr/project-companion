import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [{ title: "Política de Privacidade — Biblioteca Comunitária" }, { name: "description", content: "Política de Privacidade e tratamento de dados pessoais conforme a LGPD." }], links: [{ rel: "canonical", href: "/politica-de-privacidade" }] }),
  component: () => (
    <LegalPage
      title="Política de Privacidade"
      breadcrumb="Política de Privacidade"
      sections={[
        { heading: "1. Apresentação", body: ["Esta política demonstrativa descreve como a biblioteca comunitária trata os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."] },
        { heading: "2. Dados coletados", body: ["Coletamos apenas os dados estritamente necessários para o atendimento das solicitações realizadas pelos usuários, como nome, e-mail e conteúdo das mensagens enviadas por formulários."] },
        { heading: "3. Finalidades", body: ["Os dados são utilizados para retorno de contato, envio de comunicações institucionais e cumprimento de obrigações legais."] },
        { heading: "4. Compartilhamento", body: ["Não realizamos comercialização de dados pessoais. Eventuais compartilhamentos ocorrem apenas com prestadores essenciais e mediante contrato."] },
        { heading: "5. Direitos do titular", body: ["Você pode solicitar acesso, correção, portabilidade, anonimização ou exclusão dos seus dados a qualquer momento pelos canais oficiais indicados na página de Contato."] },
        { heading: "6. Segurança", body: ["Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perdas ou alterações."] },
        { heading: "7. Contato do Encarregado", body: ["Encarregado de Proteção de Dados (DPO): a designar — contato disponibilizado em breve."] },
      ]}
    />
  ),
});