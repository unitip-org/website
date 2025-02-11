import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/chats/conversation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/chats/conversation"!</div>
}
