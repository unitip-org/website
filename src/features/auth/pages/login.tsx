import { Button } from "@/components/ui/button";
import { useLoginLogic } from "../logics/login";

export default function LoginPage() {
  const { counter, ...logic } = useLoginLogic();

  return (
    <>
      <p>hello world {counter}</p>
      <Button onClick={logic.increment}>Increment</Button>
      <Button onClick={logic.decrement}>Decrement</Button>
    </>
  );
}
