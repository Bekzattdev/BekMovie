import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getDetailsMovie: build.query<
      DETAILS.GetMovieResponse,
      DETAILS.GetMovieRequest
    >({
      query: (query) => ({
        url: `/movie/${query}`,
        method: "GET",
      }),
      providesTags: ["details"],
    }),

    getDetailsTv: build.query<DETAILS.GetTvResponse, DETAILS.GetTvRequest>({
      query: (query) => ({
        url: `/tv/${query}`,
        method: "GET",
      }),
      providesTags: ["details"],
    }),

    getCreditsTv: build.query<
      DETAILS.GetCreditsTvResponse,
      DETAILS.GetCreditsTvRequest
    >({
      query: (query) => ({
        url: `/tv/${query}/credits`,
        method: "GET",
      }),
      providesTags: ["credits"],
    }),

    getCreditsMovie: build.query<
      DETAILS.GetCreditsMovieResponse,
      DETAILS.GetCreditsMovieRequest
    >({
      query: (query) => ({
        url: `/movie/${query}/credits`,
        method: "GET",
      }),
      providesTags: ["credits"],
    }),

    getVideosMovie: build.query<
      DETAILS.GetVideosMovieResponse,
      DETAILS.GetVideosMovieRequest
    >({
      query: (query) => ({
        url: `/movie/${query}/videos`,
        method: "GET",
      }),
      providesTags: ["videos"],
    }),
    getVideosTv: build.query<
      DETAILS.GetVideosTvResponse,
      DETAILS.GetVideosTvRequest
    >({
      query: (query) => ({
        url: `/tv/${query}/videos`,
        method: "GET",
      }),
      providesTags: ["videos"],
    }),
    getSimilarTv: build.query<
      DETAILS.GetSimilarTvResponse,
      DETAILS.GetSimilarTvRequest
    >({
      query: (query) => ({
        url: `/tv/${query}/similar`,
        method: "GET",
      }),
      providesTags: ["similar"],
    }),

    getSimilarMovie: build.query<
      DETAILS.GetSimilarMovieResponse,
      DETAILS.GetSimilarMovieRequest
    >({
      query: (query) => ({
        url: `/movie/${query}/similar`,
        method: "GET",
      }),
      providesTags: ["similar"],
    }),

    getRecommendationsMovie: build.query<
      DETAILS.GetRecommendationsMovieResponse,
      DETAILS.GetRecommendationsMovieRequest
    >({
      query: (query) => ({
        url: `/movie/${query}/recommendations`,
        method: "GET",
      }),
      providesTags: ["recommendations"],
    }),

    getRecommendationsTv: build.query<
      DETAILS.GetRecommendationsTvResponse,
      DETAILS.GetRecommendationsTvRequest
    >({
      query: (query) => ({
        url: `/tv/${query}/recommendations`,
        method: "GET",
      }),
      providesTags: ["recommendations"],
    }),
  }),
});

export const {
  useGetDetailsMovieQuery,
  useGetDetailsTvQuery,
  useGetCreditsMovieQuery,
  useGetCreditsTvQuery,
  useGetVideosMovieQuery,
  useGetVideosTvQuery,
  useGetSimilarMovieQuery,
  useGetSimilarTvQuery,
  useGetRecommendationsMovieQuery,
  useGetRecommendationsTvQuery,
} = api;
