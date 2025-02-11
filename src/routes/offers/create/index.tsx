import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/offers/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/offers/create/"!</div>;
}
