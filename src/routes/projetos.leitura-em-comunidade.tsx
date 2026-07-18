import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "../components/site/ProjectDetail";

export const Route = createFileRoute("/projetos/leitura-em-comunidade")({
  component: () => <ProjectDetail slug="leitura-em-comunidade" />,
  head: () => ({
    meta: [
      { title: "Leitura em Comunidade — Biblioteca Comunitária" },
      { name: "description", content: "Rodas de leitura, contação de histórias e mediação literária junto à comunidade." },
    ],
    links: [{ rel: "canonical", href: "/projetos/leitura-em-comunidade" }],
  }),
});