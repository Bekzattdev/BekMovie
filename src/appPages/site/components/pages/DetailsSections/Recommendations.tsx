"use client";
import {
  useGetRecommendationsMovieQuery,
  useGetRecommendationsTvQuery,
} from "@/redux/api/details";
import scss from "./Recommendations.module.scss";
import { FC } from "react";
import dayjs from "dayjs";
import CircularRating from "@/ui/Raiting/CircularRating";
import { useParams, useRouter } from "next/navigation";
import Ganre from "@/ui/Ganre/Ganre";

const Recommendations: FC = () => {
  const { tvQuery, movieQuery } = useParams();
  const { data: tvRecommendations } = useGetRecommendationsTvQuery(+tvQuery);
  const { data: movieRecommendations } = useGetRecommendationsMovieQuery(
    +movieQuery
  );
  const router = useRouter();
  const recommendations = movieRecommendations
    ? movieRecommendations
    : tvRecommendations;

  return (
    <div className={scss.Recommendations}>
      {recommendations?.results[0] ? <h1>Recommendations</h1> : null}
      <div className={scss.content}>
        {recommendations?.results.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div
              onClick={() => {
                router.push(
                  `/${movieRecommendations ? "movie" : "tv"}/${item.id}`
                );
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
              <div>
                <Ganre
                  ganreId={item.genre_ids}
                  ganreId={item.genre_ids}
                  // type={ movieRecommendations === "tv" ? "tv" : "movie"}
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

export default Recommendations;
