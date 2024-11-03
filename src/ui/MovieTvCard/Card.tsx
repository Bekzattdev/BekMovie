"use client";
import { FC } from "react";
import scss from "./Card.module.scss";
import CircularRating from "../Raiting/CircularRating";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import Ganre from "../Ganre/Ganre";
import Image from "next/image";
interface ICard {
  title: string;
  img: string;
  data: string;
  rating: number;
  ganreId: number[];
  index: number;
  id: number;
  nameTvMovie: "tv" | "movie";
}
const Card: FC<ICard> = ({
  title,
  img,
  nameTvMovie,
  index,
  data,
  id,
  rating,
  ganreId = [],
}) => {
  const router = useRouter();
  return (
    <div
      key={index}
      onClick={() => {
        router.push(`/${nameTvMovie}/${id}`);
      }}
      className={scss.Card}
    >
      {img ? (
        <img src={`https://image.tmdb.org/t/p/original${img}`} alt="img" />
      ) : (
        <img
          src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
          alt="img"
        />
      )}

      <div className={scss.rating}>
        <CircularRating rating={rating} />
      </div>
      <div className={scss.ganre}>
        <Ganre ganreId={ganreId} type={nameTvMovie} />
      </div>
      <h1>{title}</h1>
      <span>{dayjs(data).format("MMM D, YYYY")}</span>
    </div>
  );
};

export default Card;
