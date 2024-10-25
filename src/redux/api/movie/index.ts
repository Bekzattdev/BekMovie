import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: () => ({
        url: "/movie",
        method: "GET",
      }),
      providesTags: ["movie"],
    }),
  }),
});

const { useGetMovieQuery } = api;
