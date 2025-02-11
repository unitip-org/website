import { $api } from "@/shared/commons/openapi";
import { extractErrorMessage } from "@/shared/commons/utils";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useAuth } from "@/shared/hooks/auth";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [credentials, setCredentials] = useState({
    email: "rizaldwianggoro@unitip.com",
    password: "password",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const { isPending, mutate, isError, error } = $api.useMutation(
    "post",
    "/api/v1/auth/login"
  );

  return (
    <>
      <div className="mx-auto max-w-md py-8">
        <Button
          onClick={() => {
            login();
            navigate({ to: "/" });
          }}
        >
          dummy login
        </Button>

        <p className="font-semibold text-2xl">Login</p>
        <p>Masukkan beberapa informasi berikut untuk masuk ke akun Unitip</p>

        {isError && error && <p>{extractErrorMessage(error)}</p>}

        <Label>Alamat email</Label>
        <Input
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />

        <Label>Kata sandi</Label>
        <Input
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />

        <Button
          onClick={() =>
            mutate({
              body: {
                ...credentials,
              },
            })
          }
        >
          {isPending && <Loader2 className="animate-spin" />}
          Masuk
        </Button>

        <Button asChild variant={"link"}>
          <Link to="/auth/register">Belum punya akun? Daftar sekarang</Link>
        </Button>
      </div>
    </>
  );
}
