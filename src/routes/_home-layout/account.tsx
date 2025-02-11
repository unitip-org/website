import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home-layout/account')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home-layout/account"!</div>
}
