namespace GANRE {
  type GetGanreResponse = {
    genres: Array<{
      id: number;
      name: string;
    }>;
  };
  type GetGanreRequest = void;
}
