"use client";
import { useState } from "react";
import scss from "./Trending.module.scss";
import { useGetTrendingQuery } from "@/redux/api/trending";

const Trending = () => {
  const [topRated, setTopRated] = useState("movie");
  const getTrendQery = useGetTrendingQuery(topRated);
  console.log(getTrendQery);
  return (
    <section className={scss.Trending}>
      <div className="container">
        <div className={scss.content}>Trending</div>
      </div>
    </section>
  );
};

export default Trending;
