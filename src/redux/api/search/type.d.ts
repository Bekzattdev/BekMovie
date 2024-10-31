namespace SEARCH {
  type GetSearchResponse = {
    page: number;
    results: Array<{
      adult: boolean;
      backdrop_path?: string;
      id: number;
      title?: string;
      original_language: string;
      original_title?: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: Array<number>;
      popularity: number;
      release_date?: string;
      video?: boolean;
      vote_average: number;
      vote_count: number;
      name?: string;
      original_name?: string;
      first_air_date?: string;
      origin_country?: Array<string>;
    }>;
    total_pages: number;
    total_results: number;
  };
  type GetSearchRequest = string;
}
