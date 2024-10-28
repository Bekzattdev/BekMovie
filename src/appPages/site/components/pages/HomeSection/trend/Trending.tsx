"use client";
import { useState } from "react";
import scss from "./Trending.module.scss";
import { useGetTrendingQuery } from "@/redux/api/trending";

const Trending = () => {
  const [trending, setTrending] = useState("day");
  const { data, isLoading } = useGetTrendingQuery(trending);
  console.log(data);

  return (
    <section className={scss.Trending}>
      <div className="container">
        <div className={scss.content}>Trending</div>
      </div>
    </section>
  );
};

export default Trending;
