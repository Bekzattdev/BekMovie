namespace MOVIELIST {
  type GetResponse = IMovieList;
  type GetRequest = {
    page: number;
    genres: string;
    sort: string;
  };
}
