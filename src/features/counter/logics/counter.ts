import { useState } from "react";

export const useCounterLogic = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return {
    states: { counter },
    actions: { increment, decrement },
  };
};
