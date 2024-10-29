import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMovieList: build.query<MOVIELIST.GetResponse, MOVIELIST.GetRequest>({
      query: ({ page, genres, sort }) => ({
        url: `/discover/movie`,
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

export const { useGetMovieListQuery } = api;
