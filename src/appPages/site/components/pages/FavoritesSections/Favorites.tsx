// src/components/Favorites.tsx
"use client";
import scss from "./Favorites.module.scss";
import Card from "@/ui/MovieTvCard/Card";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface IFavorite {
  movieName: string;
  poster: string;
  movieID: number;
  releaseDate: string;
  voteAverage: number;
  mediaType?: "tv" | "movie";
  userId?: number;
  genre_ids: number[];
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Favorites = () => {
  const { data: session } = useSession();
  const [favList, setFavList] = useState<IFavorite[]>([]);
  const [myId, setMyId] = useState<IUser[] | null>(null);

  const getMe = async () => {
    const { data: res } = await axios.get("/api/auth/me");
    setMyId(res);
  };

  const getFavlist = async () => {
    const { data: res } = await axios.get("/api/auth/favorites");
    setFavList(res);
  };

  const deleteFavorite = async (movieID: number) => {
    try {
      await axios.delete("/api/auth/favorites", {
        data: { movieID, userId: userId?.id },
      });
      setFavList((prev) => prev.filter((fav) => fav.movieID !== movieID));
    } catch (error) {
      console.error("Failed to delete favorite:", error);
    }
  };

  useEffect(() => {
    getMe();
    getFavlist();
  }, []);

  const userId = myId?.find((u) => u?.email === session?.user?.email);
  const result = favList?.filter((el) => el?.userId === userId?.id) || [];

  return (
    <div className={scss.Favorites}>
      <div className={scss.content}>
        {result.map((item, index) => (
          <div key={index}>
            <Card
              img={item.poster}
              nameTvMovie={item.mediaType === "movie" ? "movie" : "tv"}
              title={item.movieName}
              rating={item.voteAverage}
              data={item.releaseDate}
              ganreId={item.genre_ids}
              index={index}
              id={item.movieID}
            />
            <button onClick={() => deleteFavorite(item.movieID)}>
              Удалить из избранного
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
