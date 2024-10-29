"use client";
import { useState } from "react";
import scss from "./Trending.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { useGetTrendingQuery } from "@/redux/api/trending";

const Trending = () => {
  const [trending, setTrending] = useState("day");
  const { data, isLoading } = useGetTrendingQuery(trending);
  console.log("trending", data);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
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
                <h1>isLoading...</h1>
              ) : (
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide">
                    {data?.results.map((item, index) => (
                      <div key={index} className="keen-slider__slide">
                        <div className={scss.slider}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                            alt="movie"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
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
