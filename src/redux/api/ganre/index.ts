import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getGanreMovie: build.query<
      GANRE.GetGanreResponse,
      GANRE.GetGanreRequest
    >({
      query: () => ({
        url: `/genre/movie/list`,
        method: "GET",
      }),
      providesTags: ["ganre"],
    }),

    getGanreTv: build.query<GANRE.GetGanreResponse, GANRE.GetGanreRequest>({
      query: () => ({
        url: `/genre/tv/list`,
        method: "GET",
      }),
      providesTags: ["ganre"],
    }),
  }),
});

export const { useGetGanreMovieQuery, useGetGanreTvQuery } = api;
