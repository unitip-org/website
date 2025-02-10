import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useCounterLogic } from "../logics/counter";

export const CounterPage = () => {
  const { states, actions } = useCounterLogic();

  return (
    <>
      <p>Value: {states.counter}</p>
      <Button onClick={actions.increment}>Increment</Button>
      <Button onClick={actions.decrement}>Decrement</Button>
      <div>
        <Link to="/">ke halaman home</Link>
      </div>
    </>
  );
};
