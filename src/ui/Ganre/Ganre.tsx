"use client";
import scss from "./Ganre.module.scss";
import { useGetGanreMovieQuery, useGetGanreTvQuery } from "@/redux/api/ganre";
import React, { FC } from "react";

interface IGanreProps {
  ganreId: number[];
  type: "tv" | "movie";
}
const Ganre: FC<IGanreProps> = ({ ganreId, type }) => {
  const { data: ganreMovie } = useGetGanreMovieQuery();
  const { data: ganreTv } = useGetGanreTvQuery();
  let ganre;
  if (type === "tv") {
    ganre = ganreTv?.genres.filter((el) => ganreId.includes(el.id));
  } else {
    ganre = ganreMovie?.genres.filter((el) => ganreId.includes(el.id));
  }

  return (
    <div className={scss.Ganre}>
      {ganre?.slice(0, 2).map((el, index) => (
        <h5 key={index}>{el.name}</h5>
      ))}
    </div>
  );
};

export default Ganre;
