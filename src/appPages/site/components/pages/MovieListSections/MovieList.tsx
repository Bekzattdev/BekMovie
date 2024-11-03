"use client";
import Card from "@/ui/MovieTvCard/Card";
import scss from "./MovieList.module.scss";
import { useGetMovieListQuery } from "@/redux/api/movieList";
import MyLoader from "@/ui/MyLoader/MyLoader";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import { useGetGanreMovieQuery } from "@/redux/api/ganre";

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
  const animatedComponents = makeAnimated();
  const genreOptions = genre?.genres.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const sortOptions = [
    {
      value: "popularity.desc",
      label: "Popularity Descending",
    },
    {
      value: "popularity.asc",
      label: "Popularity Ascending",
    },
    {
      value: "vote_average.desc",
      label: "Rating Descending",
    },
    {
      value: "vote_average.asc",
      label: "Rating Ascending",
    },
    {
      value: "primary_release_date.desc",
      label: "Release Date Descending",
    },
    {
      value: "primary_release_date.asc",
      label: "Release Date Ascending",
    },
    {
      value: "original_title.asc",
      label: "Title (A-Z)",
    },
    // {
    //   value: ".asc",
    //   label: "Title (A-Z)",
    // },
  ];

  const changeGenres = (gen: any) => {
    if (gen) {
      setGenres(gen.map((item: any) => item.value));
    } else {
      setGenres([]);
    }
  };

  const changeSortBy = (value: any) => {
    if (value) {
      setSortBy(value.value);
    } else {
      setSortBy("");
    }
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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= documentHeight - 500) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                <Card
                  title={item.title}
                  img={item.poster_path}
                  data={item.release_date}
                  rating={item.vote_average}
                  // ganre_ids={item.genre_ids}
                  index={index}
                  id={item.id}
                  nameTvMovie="movie"
                />
              ))
            ) : (
              <div className="">
                <MyLoader />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
