import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useHomeLogic } from "../logics/home";

export const HomePage = () => {
  const {
    states: { prices },
    actions,
  } = useHomeLogic();

  return (
    <>
      <p>ini adalah halaman home</p>
      <Button onClick={actions.refetch}>refresh</Button>
      <Button onClick={actions.login}>login</Button>

      {(prices.isLoading || prices.isRefetching) && <p>loading...</p>}
      {prices.isSuccess && <p>success</p>}
      {prices.isSuccess &&
        prices.data &&
        prices.data.categories?.map((category) => (
          <>
            <div>
              <p>{category.title}</p>
              <p>{JSON.stringify(category.prices)}</p>
            </div>
          </>
        ))}
      <Link to="/counter">ke halaman counter</Link>
    </>
  );
};
