import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  beforeLoad: () => {
    throw redirect({ to: "/quem-somos" });
  },
  component: () => null,
});