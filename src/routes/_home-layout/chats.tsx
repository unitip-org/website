import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home-layout/chats')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home-layout/chats"!</div>
}
