import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query<POPU.GetResoponse, POPU.GetRequest>({
      query: (query) => ({
        url: `/${query}/popular`,
        method: "GET",
      }),
      providesTags: ["popular"],
    }),
  }),
});

export const { useGetPopularQuery } = api;
