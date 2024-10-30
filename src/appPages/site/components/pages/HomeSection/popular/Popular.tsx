"use client";
import { useState } from "react";
import scss from "./Popular.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";
import CircularRating from "@/ui/Raiting/CircularRating";
import Ganre from "@/ui/Ganre/Ganre";
import dayjs from "dayjs";
import { useGetPopularQuery } from "@/redux/api/popular";

const Trending = () => {
  const route = useRouter();
  const [popular, setPopular] = useState("movie");
  const { data, isLoading } = useGetPopularQuery(popular);
  console.log("popular", data);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 15,
    },
  });
  return (
    <section className={scss.Popular}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h1>What's Popular</h1>
            <div className={scss.switcher}>
              <button
                onClick={() => setPopular("movie")}
                className={
                  popular === "movie"
                    ? `${scss.btn} ${scss.active}`
                    : `${scss.btn}`
                }
              >
                Movies
              </button>
              <button
                onClick={() => setPopular("tv")}
                className={
                  popular === "tv"
                    ? `${scss.btn} ${scss.active}`
                    : `${scss.btn}`
                }
              >
                TV Shows
              </button>
            </div>
          </div>
          <div className={scss.bottom}>
            <div className={scss.keenSlider}>
              {isLoading ? (
                <h1>isLoading...</h1>
              ) : (
                <div ref={ref} className="keen-slider">
                  {data?.results.map((item, index) => (
                    <div key={index} className="keen-slider__slide">
                      <div
                        onClick={() => route.push(`/${popular}/${item.id}`)}
                        className={scss.slider}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt="movie"
                        />
                        <div className={scss.rating}>
                          <CircularRating rating={item.vote_average} />
                        </div>
                        <div className={scss.ganre}>
                          <Ganre
                            ganreId={item.genre_ids}
                            type={popular === "tv" ? "tv" : "movie"}
                          />
                        </div>
                        <h1>{item.original_title || item.name}</h1>
                        <span>
                          {dayjs(
                            item?.release_date || item.first_air_date
                          ).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
