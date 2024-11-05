"use client";
import { useGetUpComingQuery } from "@/redux/api/coming";
import scss from "./Welcome.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TypeWriterText } from "../typerWriter/TyperWriterText";

const Welcome = () => {
  const { data } = useGetUpComingQuery();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const backgroundRandomImage = () => {
    if (data?.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const backdropImage = data?.results[randomIndex].backdrop_path;
      setBackgroundImage(`https://image.tmdb.org/t/p/original${backdropImage}`);
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      router.push(`/search/${searchValue}`);
    }
  };

  useEffect(() => {
    backgroundRandomImage();
  }, [data]);

  return (
    <section className={scss.Welcome}>
      {isLoading && <div className={scss.skeletonBG} />}
      {backgroundImage && (
        <Image
          className={`${scss.bgImage} ${isLoading ? scss.hidden : ""}`}
          src={backgroundImage}
          alt="movieImage"
          width={1920}
          height={700}
          priority
          loading="eager"
          onLoad={() => setIsLoading(false)}
        />
      )}
      <div className="container">
        <div className={scss.content}>
          <h1>
            <TypeWriterText />
          </h1>
          <h4>
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>
          <div className={scss.search_movie}>
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search for a movie or tv show...."
            />
            <button onClick={() => router.push(`/search/${searchValue}`)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
