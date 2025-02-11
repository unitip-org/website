import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./shared/hooks/auth";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    // auth will initially be undefined
    // We'll be passing down the auth state from within a React component
    auth: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

/**
 * perlu inner app karena dibutuhkan auth context provider terlebih dahulu
 * sehingga bisa menggunakan hooks useAuth
 */
function InnerApp() {
  const auth = useAuth();

  return (
    <>
      <RouterProvider router={router} context={{ auth }} />
    </>
  );
}
