"use client";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import Select from "react-select";
import scss from "./MovieList.module.scss";
import { useGetMovieListQuery } from "@/redux/api/movieList";
import { useGetGanreMovieQuery } from "@/redux/api/ganre";
import PreLoader from "@/ui/preLoader/PreLoader";
import Card from "@/ui/MovieTvCard/Card";

const animatedComponents = makeAnimated();

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: genre } = useGetGanreMovieQuery();
  const [result, setResult] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<string>("");
  const { data, isLoading } = useGetMovieListQuery({
    page: currentPage,
    genres: genres.join(","),
    sort: sortBy,
  });

  const genreOptions = genre?.genres.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
  ];

  const changeGenres = (gen: any) => {
    setGenres(gen ? gen.map((item: any) => item.value) : []);
  };

  const changeSortBy = (value: any) => {
    setSortBy(value ? value.value : "");
  };

  useEffect(() => {
    setCurrentPage(1);
    setResult([]);
  }, [genres, sortBy]);

  useEffect(() => {
    if (data?.results) {
      setResult((prevResults) => [...prevResults, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 500
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scss.MovieList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.explore}>
            <h1>Explore Movies</h1>
          </div>
          <div className={scss.sort}>
            <div className={scss.select}>
              <Select
                instanceId="genre-select"
                placeholder="Select Genres"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={genres}
                isMulti
                options={genreOptions}
                onChange={changeGenres}
              />
            </div>
            <div className={scss.select}>
              <Select
                instanceId="sort-by-select"
                placeholder="Sort By"
                components={animatedComponents}
                options={sortOptions}
                onChange={changeSortBy}
              />
            </div>
          </div>
          <div className={scss.tv}>
            {!isLoading ? (
              result.map((item, index) => (
                <div key={index}>
                  <Card
                    title={item.title}
                    img={item.poster_path}
                    data={item.release_date}
                    rating={item.vote_average}
                    index={index}
                    ganreId={item.genre_ids}
                    id={item.id}
                    nameTvMovie="movie"
                  />
                </div>
              ))
            ) : (
              <PreLoader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
