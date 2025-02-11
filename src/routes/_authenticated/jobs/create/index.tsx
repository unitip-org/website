import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/jobs/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jobs/create"!</div>
}
