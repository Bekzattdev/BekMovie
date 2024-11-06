"use client";
import Card from "@/ui/MovieTvCard/Card";
import axios from "axios";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";
interface IFavorite {
  movieName: string;
  poster: string;
  movieID: number;
  releaseDate: string;
  voteAverage: string;
  mediaType?: string;
  userId?: number;
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Page = () => {
  const { data: session } = useSession();
  const [favList, setFavList] = useState<IFavorite[]>([]);
  const [myId, setMyId] = useState<IUser[] | null>(null);

  const getMe = async () => {
    const { data: res } = await axios.get("/api/auth/me");
    console.log(res, "User Data");
    setMyId(res);
  };

  const getFavlist = async () => {
    const { data: res } = await axios.get("/api/auth/favorites");
    setFavList(res);
  };

  useEffect(() => {
    getMe();
    getFavlist();
  }, []);

  const userId = myId?.find((u) => u?.email === session?.user?.email);
  const result = favList?.filter((el) => el?.userId === userId?.id) || [];
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {result.map((el, index) => (
        <div key={index}>
          <Card
            img={el.poster}
            nameTvMovie={el.mediaType}
            title={el.movieName}
            rating={+el.voteAverage}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
