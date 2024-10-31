"use client";
import {
  useGetCreditsMovieQuery,
  useGetCreditsTvQuery,
  useGetDetailsMovieQuery,
  useGetDetailsTvQuery,
  useGetVideosMovieQuery,
  useGetVideosTvQuery,
} from "@/redux/api/details";
import scss from "./MovieDetails.module.scss";
import { useParams } from "next/navigation";
import Image from "next/image";
import CircularRating from "@/ui/Raiting/CircularRating";
import dayjs from "dayjs";
import moment from "moment";
import React, { useState } from "react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { useHeaderStore } from "@/stores/useHeaderStore";

const MovieDetails = () => {
  const { movieQuery, tvQuery } = useParams();
  const { data: movie } = useGetDetailsMovieQuery(+movieQuery);
  const { data: tv } = useGetDetailsTvQuery(+tvQuery);
  const { data: castMovie } = useGetCreditsMovieQuery(+movieQuery);
  const { data: castTv } = useGetCreditsTvQuery(+tvQuery);
  const { data: videosMovie } = useGetVideosMovieQuery(+movieQuery);
  const { data: videosTv } = useGetVideosTvQuery(+tvQuery);
  const videos = videosMovie?.results ? videosMovie : videosTv;
  const { videoKey, setVideoKey } = useHeaderStore();
  const directorMovie = castMovie?.crew.filter(
    (item) => item.job === "Director"
  );
  const directorTv = castTv?.crew.filter((item) => item.job === "Director");
  const writter = castMovie?.crew.filter(
    (item) => item.job === "Writer" || item.job === "Director"
  );

  const writterTV = castTv?.crew.filter(
    (item) => item.job === "Writer" || item.job === "Director"
  );

  return (
    <>
      <div className={scss.BG}></div>
      <div className={scss.MovieDetails}>
        {movie || tv ? (
          <Image
            className={scss.bgImage}
            src={`https://image.tmdb.org/t/p/original${
              movie?.backdrop_path || tv?.backdrop_path
            }`}
            alt="movieImage"
            width={1920}
            height={600}
            priority
            loading="eager"
          />
        ) : (
          <span className={scss.loader}></span>
        )}
        <div className="container">
          <div className={scss.content}>
            <div className={scss.details}>
              {movie?.backdrop_path || tv?.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    tv?.poster_path || movie?.poster_path
                  }`}
                  alt="movie"
                />
              ) : (
                <img
                  src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                  alt="img"
                />
              )}
              <div className={scss.details_text}>
                <h1>
                  {tv?.original_name || movie?.title}{" "}
                  <span>
                    {dayjs(tv?.last_air_date || movie?.release_date).format(
                      "(YYYY)"
                    )}
                  </span>
                </h1>
                <p>{tv?.tagline || movie?.tagline}</p>
                <div className={scss.genres}>
                  {tv || movie ? (
                    <h5>{tv?.genres[0]?.name || movie?.genres[0]?.name}</h5>
                  ) : null}
                  {tv?.genres[1]?.name || movie?.genres[1] ? (
                    <h5>{tv?.genres[1]?.name || movie?.genres[1]?.name}</h5>
                  ) : null}
                  {tv?.genres[2]?.name || movie?.genres[2] ? (
                    <h5>{tv?.genres[2]?.name || movie?.genres[2]?.name}</h5>
                  ) : null}
                  {tv?.genres[3]?.name || movie?.genres[3] ? (
                    <h5>{tv?.genres[3]?.name || movie?.genres[3]?.name}</h5>
                  ) : null}
                </div>
                <div className={scss.raiting}>
                  <div className={scss.circularRating}>
                    <CircularRating
                      rating={
                        Number(tv?.vote_average) || Number(movie?.vote_average)
                      }
                    />
                  </div>
                  <div
                    onClick={() => {
                      setVideoKey(videos?.results[0]?.key!);
                    }}
                    className={scss.circular}
                  >
                    <span>
                      <IoCaretForwardCircleOutline />
                    </span>
                    <h1>Watch Trailer</h1>
                  </div>
                </div>

                <h1>Overview</h1>
                <h6>{tv?.overview || movie?.overview}</h6>
                <div className={scss.status}>
                  <div className={scss.statusDay}>
                    <h4>
                      Status: <span>{tv?.status || movie?.status}</span>
                    </h4>
                    <h4>
                      Release Date:{" "}
                      <span>
                        {dayjs(tv?.last_air_date || movie?.release_date).format(
                          "MMM D, YYYY"
                        )}
                      </span>
                    </h4>
                    <h4>
                      Runtime:{" "}
                      <span>
                        {moment
                          .utc(
                            (tv?.episode_run_time?.[0] || movie?.runtime || 0) *
                              60 *
                              1000
                          )
                          .format("H")}
                        h
                      </span>{" "}
                      <span>
                        {moment
                          .utc(
                            (tv?.episode_run_time?.[0] || movie?.runtime || 0) *
                              60 *
                              1000
                          )
                          .format("mm")}
                        m
                      </span>
                    </h4>
                  </div>
                  <div className={scss.linia}></div>
                  <div className={scss.Director}>
                    {directorMovie?.length! > 0 ? (
                      <>
                        <h4>
                          Director:{" "}
                          {directorMovie?.map((item) => (
                            <span key={item.id}>{item.name}</span>
                          ))}
                        </h4>
                        <div className={scss.linia}></div>
                      </>
                    ) : null}
                    {tv?.created_by.length! > 0 ? (
                      <>
                        <h4>
                          Creator: <span>{tv?.created_by[0].name}</span>
                        </h4>
                        <div className={scss.linia}></div>
                      </>
                    ) : null}
                  </div>
                  <div className={scss.Writter}>
                    {writter?.length! > 0 ? (
                      <>
                        <h4>
                          Writter:{" "}
                          {writter?.map((item) => (
                            <span key={item.id}>
                              {item.name}
                              {writter.length > 1 ? ", " : null}
                            </span>
                          ))}
                        </h4>
                        <div className={scss.linia}></div>
                      </>
                    ) : null}
                    {writterTV?.length! > 0 ? (
                      <>
                        <h4>
                          Writter:{" "}
                          {writterTV?.map((item) => (
                            <span key={item.id}>
                              {item.name}
                              {writterTV.length > 1 ? ", " : null}
                            </span>
                          ))}
                        </h4>
                        <div className={scss.linia}></div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
