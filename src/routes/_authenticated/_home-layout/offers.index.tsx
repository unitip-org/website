import { Button } from '@/shared/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_home-layout/offers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_home-layout/offers"!
      <div>
        <Button asChild>
          <Link to="/offers/create">create a new offer</Link>
        </Button>
      </div>
    </div>
  )
}
