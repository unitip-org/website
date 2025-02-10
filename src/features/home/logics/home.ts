import { $api } from "@/shared/commons/openapi";

export const useHomeLogic = () => {
  const prices = $api.useQuery("get", "/api/v1/services/prices");
  const login = $api.useMutation("post", "/api/v1/auth/login");

  const states = {
    prices: {
      data: prices.data,
      isLoading: prices.isLoading,
      isRefetching: prices.isRefetching,
      isSuccess: prices.isSuccess,
      isError: prices.isError,
    },
  };

  const actions = {
    refetch: () => prices.refetch(),
    login: () =>
      login.mutate({
        body: {
          email: "",
          password: "",
          role: "",
        },
      }),
  };

  return { states, actions };
};
