namespace TREND {
  type GetResoponse = {
    page: number;
    results: Array<{
      backdrop_path: string;
      id: number;
      title: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      adult: boolean;
      original_language: string;
      genre_ids: Array<number>;
      popularity: number;
      release_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetRequest = string;
}
