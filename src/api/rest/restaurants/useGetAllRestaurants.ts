import { useCallback } from "react";
import { useAPI } from "../APIProvider";
import { paths } from "../constants";
import { RestaurantResponseItem, restaurantResponseItemToModel } from "./types";

interface Result {
  count: number;
  restaurants: RestaurantResponseItem[];
}

type Params = { keyword: string; page?: number; perPage?: number };

export const useGetAllRestaurants = () => {
  const client = useAPI();

  return useCallback(
    async ({ keyword = "", page = 1, perPage = 10 }: Params) => {
      return client
        .get<Result>(paths.restaurants, {
          params: { keyword, page, perPage },
        })
        .then((r) => ({
          ...r.data,
          restaurants: r.data.restaurants.map(restaurantResponseItemToModel),
        }));
    },
    [client]
  );
};
