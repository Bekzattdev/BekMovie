import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTvList: build.query<TVLIST.GetResponse, TVLIST.GetRequest>({
      query: ({ page, genres, sort }) => ({
        url: `/discover/tv`,
        method: "GET",
        params: {
          page: page,
          with_genres: genres,
          sort_by: sort,
        },
      }),
      providesTags: ["discover"],
    }),
  }),
});

export const { useGetTvListQuery } = api;
