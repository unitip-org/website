import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useHomeLogic } from "../logics/home";

export const HomePage = () => {
  const { states, actions } = useHomeLogic();

  return (
    <>
      <p>ini adalah halaman home</p>
      <Button onClick={() => states.users.refetch()}>refresh</Button>
      {(states.users.isLoading || states.users.isRefetching) && <>loading...</>}
      {states.users.isSuccess && states.users.data && (
        <>
          {states.users.data.map((user) => (
            <>
              <p>id: {user.id}</p>
              <p>name: {user.name}</p>
              <p>email: {user.email}</p>
            </>
          ))}
        </>
      )}
      <Link to="/counter">ke halaman counter</Link>
    </>
  );
};
