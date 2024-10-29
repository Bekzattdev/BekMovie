namespace TVLIST {
  type GetResponse = ITvList;
  type GetRequest = {
    page: number;
    genres: string;
    sort: string;
  };
}
