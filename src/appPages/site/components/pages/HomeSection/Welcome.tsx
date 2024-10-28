"use client";
import { useGetUpComingQuery } from "@/redux/api/coming";
import scss from "./Welcome.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import PreLoader from "@/ui/preLoader/PreLoader";

const Welcome = () => {
  const { data } = useGetUpComingQuery();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const backgroundRandomImage = () => {
    if (data?.results) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const backdropImage = data?.results[randomIndex].backdrop_path;
      setBackgroundImage(`https://image.tmdb.org/t/p/original${backdropImage}`);
    }
  };

  useEffect(() => {
    backgroundRandomImage();
  }, [data]);

  return (
    <section className={scss.Welcome}>
      {isLoading && <PreLoader />}
      {backgroundImage && (
        <Image
          className={scss.bgImage}
          src={backgroundImage}
          alt="movieImage"
          width={1920}
          height={700}
          priority
          loading="eager"
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default Welcome;
