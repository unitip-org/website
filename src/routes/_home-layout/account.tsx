import { Button } from "@/shared/components/ui/button";
import { useAuth } from "@/shared/hooks/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home-layout/account")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <p>ini halaman account</p>
      <p>ubah statsu autentikasi</p>
      <Button
        onClick={() => (isAuthenticated ? logout() : login())}
        variant={isAuthenticated ? "destructive" : "default"}
      >
        {isAuthenticated ? "logout" : "login"}
      </Button>
    </div>
  );
}
