namespace POPU {
  type GetResoponse = {
    page: number;
    results: Array<{
      first_air_date: string;
      name: string;
      adult: boolean;
      backdrop_path: string;
      genre_ids: Array<number>;
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetRequest = string;
}
