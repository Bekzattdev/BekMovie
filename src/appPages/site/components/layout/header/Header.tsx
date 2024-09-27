"use client";
import { useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [language, setLanguage] = useState("");
  return (
    <header className={scss.header}>
      <div className={scss.content}>
        <Link href={"/"}>
          <h1>TMDB</h1>
        </Link>
        <nav>
          <Link href={"/"}>
            {language === "en"
              ? "Home"
              : language === "ru"
              ? "Дом"
              : language === "es"
              ? "Homes"
              : "Home"}
          </Link>
          <Link href={"/Popular"}>
            {language === "en"
              ? "Popular"
              : language === "ru"
              ? "Популярные"
              : language === "es"
              ? "Populares"
              : "Popular"}
          </Link>
          <Link href={"/TopRated"}>
            {language === "en"
              ? "Top Rated"
              : language === "ru"
              ? "Топ Рейтинг"
              : language === "es"
              ? "Top Rateds"
              : "Top Rated"}
          </Link>
          <Link href={"/Favorite"}>
            {language === "en"
              ? "Favorite"
              : language === "ru"
              ? "Избранные"
              : language === "es"
              ? "favorites"
              : "Favorite"}
          </Link>
        </nav>
        <div className={scss.search}>
          <input type="text" placeholder="search ..." />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className={scss.language}>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="ru">РУ</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
