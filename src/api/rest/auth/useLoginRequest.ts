import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useAPI } from "../APIProvider";
import { paths } from "../constants";

type LoginResponse = AxiosResponse<{
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: number;
    email: string;
    nickname: string;
  };
}>;

export const useLoginRequest = () => {
  const client = useAPI();

  return useCallback(
    async (email: string, password: string) => {
      return client
        .post<LoginResponse>(paths.login, { email, password })
        .then((r) => r.data.data);
    },
    [client]
  );
};
