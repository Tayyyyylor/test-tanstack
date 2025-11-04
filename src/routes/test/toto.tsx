import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/toto')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/test/toto"!</div>
}
