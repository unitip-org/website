import { $api } from "@/shared/commons/openapi";

export const useHomeLogic = () => {
  const prices = $api.useQuery("get", "/api/v1/services/prices");

  return {
    states: {
      prices: {
        data: prices.data,
        isLoading: prices.isLoading,
        isRefetching: prices.isRefetching,
        isSuccess: prices.isSuccess,
        isError: prices.isError,
      },
    },
    actions: {
      refetch: () => prices.refetch(),
    },
  };
};
