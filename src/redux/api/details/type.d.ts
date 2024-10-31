namespace DETAILS {
  type GetMovieResponse = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Array<{
      id: number;
      name: string;
    }>;
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: Array<string>;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
      id: number;
      logo_path?: string;
      name: string;
      origin_country: string;
    }>;
    production_countries: Array<{
      iso_3166_1: string;
      name: string;
    }>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{
      english_name: string;
      iso_639_1: string;
      name: string;
    }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  type GetMovieRequest = number;

  type GetTvResponse = {
    adult: boolean;
    backdrop_path: string;
    created_by: Array<{
      id: number;
      credit_id: string;
      name: string;
      original_name: string;
      gender: number;
      profile_path: any;
    }>;
    episode_run_time: Array<any>;
    first_air_date: string;
    genres: Array<{
      id: number;
      name: string;
    }>;
    homepage: string;
    id: number;
    in_production: boolean;
    languages: Array<string>;
    last_air_date: string;
    last_episode_to_air: {
      id: number;
      name: string;
      overview: string;
      vote_average: number;
      vote_count: number;
      air_date: string;
      episode_number: number;
      episode_type: string;
      production_code: string;
      runtime: any;
      season_number: number;
      show_id: number;
      still_path: any;
    };
    name: string;
    next_episode_to_air: {
      id: number;
      name: string;
      overview: string;
      vote_average: number;
      vote_count: number;
      air_date: string;
      episode_number: number;
      episode_type: string;
      production_code: string;
      runtime: any;
      season_number: number;
      show_id: number;
      still_path: any;
    };
    networks: Array<{
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: Array<string>;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>;
    production_countries: Array<{
      iso_3166_1: string;
      name: string;
    }>;
    seasons: Array<{
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }>;
    spoken_languages: Array<{
      english_name: string;
      iso_639_1: string;
      name: string;
    }>;
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
  };
  type GetTvRequest = number;

  type GetCreditsTvResponse = {
    cast: Array<{
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      character: string;
      credit_id: string;
      order: number;
    }>;
    crew: Array<{
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path?: string;
      credit_id: string;
      department: string;
      job: string;
    }>;
    id: number;
  };
  type GetCreditsTvRequest = number;

  type GetCreditsMovieResponse = {
    id: number;
    cast: Array<{
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path?: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }>;
    crew: Array<{
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path?: string;
      credit_id: string;
      department: string;
      job: string;
    }>;
  };
  type GetCreditsMovieRequest = number;

  type GetVideosMovieResponse = {
    id: number;
    results: Array<{
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }>;
  };
  type GetVideosMovieRequest = number;

  type GetVideosTvResponse = {
    id: number;
    results: Array<{
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }>;
  };
  type GetVideosTvRequest = number;

  type GetSimilarTvResponse = {
    page: number;
    results: Array<{
      name: string;
      release_date: string;
      first_air_date: string;
      title: string;
      adult: boolean;
      backdrop_path?: string;
      genre_ids: Array<number>;
      id: number;
      origin_country: Array<string>;
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path?: string;
      z: string;
      vote_average: number;
      vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetSimilarTvRequest = number;

  type GetSimilarMovieResponse = {
    page: number;
    results: Array<{
      adult: boolean;
      backdrop_path?: string;
      genre_ids: Array<number>;
      id: number;
      name: string;
      first_air_date: string;

      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path?: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetSimilarMovieRequest = number;

  type GetRecommendationsTvResponse = {
    page: number;
    results: Array<{
      adult: boolean;
      backdrop_path: string;
      id: number;
      name: string;
      title: string;
      original_language: string;
      original_name: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: Array<number>;
      popularity: number;
      first_air_date: string;
      release_date: string;
      vote_average: number;
      vote_count: number;
      origin_country: Array<string>;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetRecommendationsTvRequest = number;

  type GetRecommendationsMovieResponse = {
    page: number;
    results: Array<{
      backdrop_path: string;
      id: number;
      title: string;
      name: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      adult: boolean;
      original_language: string;
      genre_ids: Array<number>;
      popularity: number;
      release_date: string;
      first_air_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetRecommendationsMovieRequest = number;
}
