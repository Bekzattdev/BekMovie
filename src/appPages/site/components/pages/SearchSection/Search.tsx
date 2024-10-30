"use client";
import scss from "./Search.module.scss";
import { FC } from "react";
import Card from "@/ui/MovieTvCard/Card";
import { useParams, useRouter } from "next/navigation";
import { useGetSearchQuery } from "@/redux/api/search";

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
            {data?.results.map(
              (
                item: {
                  media_type: any;
                  id: number;
                  name: any;
                  title: string;
                  poster_path: string;
                  first_air_date: any;
                  release_date: string;
                  vote_average: number;
                },
                index: number
              ) => (
                <div
                  onClick={() => router.push(`/${item.media_type}/${item.id}`)}
                  className={scss.detailsSearch}
                >
                  <Card
                    title={item.name || item.title!}
                    img={item.poster_path}
                    data={item.first_air_date || item.release_date!}
                    rating={item.vote_average}
                    index={index}
                    id={item.id}
                    nameTvMovie=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
