"use client";

import {
  useGetCreditsMovieQuery,
  useGetCreditsTvQuery,
} from "@/redux/api/details";
import scss from "./Credits.module.scss";
import { FC } from "react";
import { useParams } from "next/navigation";

const Creadits: FC = () => {
  const { tvQuery, movieQuery } = useParams();

  const { data: castMovie } = useGetCreditsMovieQuery(+movieQuery);
  const { data: castTv } = useGetCreditsTvQuery(+tvQuery);

  const cast = castMovie ? castMovie : castTv;
  return (
    <div className={scss.Creadits}>
      <div className={scss.content}>
        {cast?.cast[0] ? <h1>Top Cast</h1> : null}
        <div className={scss.cast}>
          {cast?.cast.map((item, index) => (
            <div key={index} className={scss.cast_block}>
              {item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt="img"
                />
              ) : (
                <img
                  src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-PNG.png"
                  alt="img"
                />
              )}
              <h2>{item.name}</h2>
              <h5>{item.character}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creadits;
