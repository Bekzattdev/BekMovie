import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUpComing: build.query<COMMING.GetResoponse, COMMING.GetRequest>({
      query: () => ({
        url: "/movie/upcoming",
        method: "GET",
      }),
      providesTags: ["coming"],
    }),
  }),
});

export const { useGetUpComingQuery } = api;
