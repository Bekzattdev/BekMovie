"use client";
import { useGetTopRatedQuery } from "@/redux/api/topRated";
import scss from "./TopRated.module.scss";
import { useState } from "react";

const TopRated = () => {
  const [topRated, setTopRated] = useState("movie");
  const { data, isLoading } = useGetTopRatedQuery(topRated);
  return (
    <section className={scss.TopRated}>
      <div className="container">
        <div className={scss.content}> TopRated</div>
      </div>
    </section>
  );
};

export default TopRated;
