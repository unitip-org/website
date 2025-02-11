import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jobs/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jobs/create"!</div>
}
