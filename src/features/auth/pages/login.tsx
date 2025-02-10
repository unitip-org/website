import { useLoginLogic } from "../logics/login";

export default function LoginPage() {
  const { counter, ...logic } = useLoginLogic();

  return (
    <>
      <p>hello world {counter}</p>
      <button onClick={logic.increment}>increment</button>
      <button onClick={logic.decrement}>decrement</button>
    </>
  );
}
