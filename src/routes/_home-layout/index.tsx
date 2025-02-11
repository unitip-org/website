import { useAuth } from "@/shared/hooks/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home-layout/")({
  // beforeLoad: ({ context, location }) => {
  //   throw redirect({ to: "/auth/login" });
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, quasi
        reprehenderit aliquid fugit corporis provident deserunt, porro modi
        explicabo recusandae dolore ipsum asperiores rem assumenda. Culpa
        molestiae earum rem voluptas!
      </p>

      <p>status autentikasi: {isAuthenticated ? "true" : "false"}</p>
    </div>
  );
}
