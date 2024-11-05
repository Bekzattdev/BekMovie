"use client";
import scss from "./Search.module.scss";
import { FC } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetSearchQuery } from "@/redux/api/search";
import Card from "@/ui/MovieTvCard/Card";

interface IMovieTVID {
  contentID: number;
}

const Search: FC<IMovieTVID> = () => {
  const { searchQuery } = useParams();
  const { data } = useGetSearchQuery(`${searchQuery}`);
  const router = useRouter();

  return (
    <div className={scss.Search}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.explore}>
            <h1>{`Search results of '${searchQuery}'`}</h1>
          </div>
          <div className={scss.tv}>
            {data?.results.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(`/${item.media_type}/${item.id}`)}
                className={scss.detailsSearch}
              >
                <Card
                  title={item.name || item.title!}
                  img={item.poster_path}
                  data={item.first_air_date || item.release_date!}
                  rating={item.vote_average}
                  index={index}
                  ganreId={item.genre_ids}
                  id={item.id}
                  nameTvMovie={"movie" === "movie" ? "movie" : "tv"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
