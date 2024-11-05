"use client";
import { useState } from "react";
import scss from "./Trending.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { useGetTrendingQuery } from "@/redux/api/trending";
import { useRouter } from "next/navigation";
import CircularRating from "@/ui/Raiting/CircularRating";
import Ganre from "@/ui/Ganre/Ganre";
import dayjs from "dayjs";
import { useHeaderStore } from "@/stores/useHeaderStore";
import Skelet from "@/ui/Skeleton/Skelet";

const Trending = () => {
  const route = useRouter();
  const [trending, setTrending] = useState("day");
  const { data, isLoading } = useGetTrendingQuery(trending);
  const { isMobile } = useHeaderStore();

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: isMobile ? 2.8 : 5,
      spacing: 15,
    },
  });

  return (
    <section className={scss.Trending}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h1>Trending</h1>
            <div className={scss.switcher}>
              <button
                onClick={() => setTrending("day")}
                className={
                  trending === "day"
                    ? `${scss.btn} ${scss.active}`
                    : `${scss.btn}`
                }
              >
                Day
              </button>
              <button
                onClick={() => setTrending("week")}
                className={
                  trending === "week"
                    ? `${scss.btn} ${scss.active}`
                    : `${scss.btn}`
                }
              >
                Week
              </button>
            </div>
          </div>
          <div className={scss.bottom}>
            <div className={scss.keenSlider}>
              {isLoading ? (
                <Skelet />
              ) : (
                <div ref={ref} className="keen-slider">
                  {data?.results.map((item, index) => (
                    <div key={index} className="keen-slider__slide">
                      <div
                        onClick={() => route.push(`/movie/${item.id}`)}
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
                          <Ganre ganreId={item.genre_ids} type="movie" />
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
