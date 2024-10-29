"use client";
import { useState } from "react";
import scss from "./Popular.module.scss";
import { useGetPopularQuery } from "@/redux/api/popular";
const Popular = () => {
  const [popular, setPopular] = useState("movie");
  const { data, isLoading } = useGetPopularQuery(popular);
  console.log(data);

  return (
    <section className={scss.Popular}>
      <div className="container">
        <div className={scss.content}>Popular</div>
      </div>
    </section>
  );
};

export default Popular;
