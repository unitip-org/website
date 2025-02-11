import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_home-layout/jobs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jobs/"!</div>
}
