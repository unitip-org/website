import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Outlet />
      <div className="border-t space-x-4">
        <p>ini navbar</p>
        <Link to="/">dashboard</Link>
        <Link to="/jobs">jobs</Link>
        <Link to="/offers">offers</Link>
        <Link to="/chats">chats</Link>
        <Link to="/account">account</Link>
      </div>
    </>
  );
}
