"use client";
import {
  useGetSimilarMovieQuery,
  useGetSimilarTvQuery,
} from "@/redux/api/details";
import scss from "./Similar.module.scss";
import { FC } from "react";
import dayjs from "dayjs";
import CircularRating from "@/ui/Raiting/CircularRating";
import { useParams, useRouter } from "next/navigation";
import Ganre from "@/ui/Ganre/Ganre";

const Similar: FC = () => {
  const { tvQuery, movieQuery } = useParams();
  const { data: tvSimilar } = useGetSimilarTvQuery(+tvQuery);
  const { data: movieSimilar } = useGetSimilarMovieQuery(+movieQuery);
  const router = useRouter();
  const similar = movieSimilar ? movieSimilar : tvSimilar;

  return (
    <div className={scss.Similar}>
      {similar?.results[0] ? <h1>Similar Movies</h1> : null}
      <div className={scss.content}>
        {similar?.results.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <div
              onClick={() => {
                router.push(`/${movieSimilar ? "movie" : "tv"}/${item.id}`);
              }}
              className={scss.slider}
            >
              {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt="movie"
                />
              ) : (
                <img
                  src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                  alt="img"
                />
              )}
              <div className={scss.rating}>
                <CircularRating rating={item.vote_average} />
              </div>
              <div className={scss.ganre}>
                <Ganre
                  ganreId={item.genre_ids}
                  type={"movie" === "movie" ? "movie" : "tv"}
                />
              </div>
              <h1>{item.title || item.name}</h1>
              <span>
                {dayjs(item.release_date || item?.first_air_date).format(
                  "MMM D, YYYY"
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similar;
