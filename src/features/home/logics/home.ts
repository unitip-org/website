import { useQuery } from "@tanstack/react-query";

const url = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = async (): Promise<
  {
    id: number;
    name: string;
    email: string;
  }[]
> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useHomeLogic = () => {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  return {
    states: {
      users,
    },
    actions: {},
  };
};
