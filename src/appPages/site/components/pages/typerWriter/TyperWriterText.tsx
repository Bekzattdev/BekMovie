import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypeWriterText: FC = () => {
  const welcome: string[] = [
    "Welcome to BekoNovies - Enjoy Watching!",
    "Discover Movie Magic at BekoMovies",
    "Get ready for the journey",
    "Добро Пожаловать в BekoNovies - Приятного Просмотра!",
    "Откройте для Себя Чудо в BekoMovies",
    "Приготовьтесь к Путешествию",
  ];

  return (
    <>
      <Typewriter
        words={welcome}
        loop={true}
        cursor={true}
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={10}
        delaySpeed={2700}
      />
    </>
  );
};
