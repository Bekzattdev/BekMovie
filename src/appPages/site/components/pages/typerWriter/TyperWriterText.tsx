import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypeWriterText: FC = () => {
  const welcome: string[] = [
    "Welcome to BekNovie - Enjoy Watching!",
    "Discover Movie Magic at BekMovie",
    "Get ready for the journey",
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
