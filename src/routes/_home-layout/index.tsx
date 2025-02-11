import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home-layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}
