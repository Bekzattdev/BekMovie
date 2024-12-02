import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const TypeWriterText: FC = () => {
  const welcome: string[] = [
    "Welcome to BekMovie - Enjoy Watching!",
    "Discover Movie Magic at BekMovie",
    "Get Ready for the Journey",
  ];

  return (
    <>
      <Typewriter
        words={welcome}
        loop={true}
        cursor={true}
        cursorStyle="📍"
        typeSpeed={80}
        deleteSpeed={10}
        delaySpeed={2700}
      />
    </>
  );
};
