import { useAuth } from "~/lib/jwt";
import { useGetAllRestaurants } from "~/api/rest/restaurants/useGetAllRestaurants";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";
import { useCallback, useMemo } from "react";
import { flatten } from "lodash";

const perPage = 10;
type Params = { keyword: string; page?: number; perPage?: number };

const getKey: (isUser: boolean, search: string) => SWRInfiniteKeyLoader =
  (isUser, search) => (index, prev: unknown[]) => {
    if (!isUser) return null;

    if (index > 0 && (!prev?.length || prev.length < perPage)) return null;

    const props: Params = {
      page: Math.ceil(prev.length / perPage),
      perPage,
      keyword: search || "",
    };

    return JSON.stringify(props);
  };

const parseKey = (key: string): Params => {
  try {
    return JSON.parse(key);
  } catch (error) {
    return { keyword: "", page: 1, perPage: 10 };
  }
};

export const useSearchQuery = (search: string) => {
  const { isUser } = useAuth();

  const getAllRestaurants = useGetAllRestaurants();

  const { data, isValidating, size, setSize } = useSWRInfinite(
    getKey(isUser, search),
    async (key: string) => {
      const result = await getAllRestaurants(parseKey(key));
      return result.restaurants;
    }
  );

  const hasMore = (data?.[size - 1]?.length || 0) >= 1;
  const loadMore = useCallback(() => setSize(size + 1), [setSize, size]);
  const isLoading = !data && isValidating;
  const items = useMemo(() => flatten(data || []), [data]);

  return {
    items,
    hasMore,
    isLoading,
    loadMore,
  };
};
