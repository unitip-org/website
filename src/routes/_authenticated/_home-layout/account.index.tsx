import { Button } from "@/shared/components/ui/button";
import { useAuth } from "@/shared/contexts/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_home-layout/account/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, save: login, clear: logout } = useAuth();

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
