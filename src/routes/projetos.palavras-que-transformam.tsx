import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetail } from "../components/site/ProjectDetail";

export const Route = createFileRoute("/projetos/palavras-que-transformam")({
  component: () => <ProjectDetail slug="palavras-que-transformam" />,
  head: () => ({
    meta: [
      { title: "Palavras que Transformam — Biblioteca Comunitária" },
      { name: "description", content: "Oficinas de leitura, escrita e criação literária junto à comunidade." },
    ],
    links: [{ rel: "canonical", href: "/projetos/palavras-que-transformam" }],
  }),
});