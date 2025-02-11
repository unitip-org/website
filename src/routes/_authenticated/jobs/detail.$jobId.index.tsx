import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/jobs/detail/$jobId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { jobId } = Route.useParams();

  return (
    <div>
      <p>Hello "/_authenticated/jobs/$jobId/"!</p>
      <p>jobId: {jobId}</p>
    </div>
  );
}
