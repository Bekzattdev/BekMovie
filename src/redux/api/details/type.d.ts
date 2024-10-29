namespace DETAILS {
  type GetMovieResponse = IMovie;
  type GetMovieRequest = number;

  type GetTvResponse = ITVShow;
  type GetTvRequest = number;

  type GetCreditsTvResponse = ITvCredits;
  type GetCreditsTvRequest = number;

  type GetCreditsMovieResponse = IMovieCredits;
  type GetCreditsMovieRequest = number;

  type GetVideosMovieResponse = IMovieVideos;
  type GetVideosMovieRequest = number;

  type GetVideosTvResponse = ITvVideos;
  type GetVideosTvRequest = number;

  type GetSimilarTvResponse = ISimilarTv;
  type GetSimilarTvRequest = number;

  type GetSimilarMovieResponse = ISimilarMovie;
  type GetSimilarMovieRequest = number;

  type GetRecommendationsTvResponse = ITvRecommendations;
  type GetRecommendationsTvRequest = number;

  type GetRecommendationsMovieResponse = IMovieRecommendations;
  type GetRecommendationsMovieRequest = number;
}
