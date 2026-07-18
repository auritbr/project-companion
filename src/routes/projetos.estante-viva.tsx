import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "../components/site/ProjectDetail";

export const Route = createFileRoute("/projetos/estante-viva")({
  component: () => <ProjectDetail slug="estante-viva" />,
  head: () => ({
    meta: [
      { title: "Estante Viva — Biblioteca Comunitária" },
      { name: "description", content: "Formação do acervo, campanhas de doação e circulação de livros pela comunidade." },
    ],
    links: [{ rel: "canonical", href: "/projetos/estante-viva" }],
  }),
});