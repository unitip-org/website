import { useAuth } from "@/shared/contexts/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_home-layout/")({
  // beforeLoad: ({ context, location }) => {
  //   throw redirect({ to: "/auth/login" });
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { session } = useAuth();

  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, quasi
        reprehenderit aliquid fugit corporis provident deserunt, porro modi
        explicabo recusandae dolore ipsum asperiores rem assumenda. Culpa
        molestiae earum rem voluptas!
      </p>

      <p>status autentikasi: {session ? "true" : "false"}</p>
      <p>{session?.email}</p>
      <p>{session?.id}</p>
      <p>{session?.token}</p>
    </div>
  );
}
