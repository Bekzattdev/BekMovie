import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query<SEARCH.GetSearchResponse, SEARCH.GetSearchRequest>({
      query: (query) => ({
        url: `/search/multi?query=${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSearchQuery } = api;
