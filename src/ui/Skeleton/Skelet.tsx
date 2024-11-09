"use client";
import { useEffect, useState } from "react";
import scss from "./Skelet.module.scss";
const Skelet = () => {
  const [isLarge, setIsLarge] = useState(5);

  useEffect(() => {
    const updateBlocks = () => {
      setIsLarge(window.innerWidth < 770 ? 3 : 5);
    };
    updateBlocks();
    window.addEventListener("resize", updateBlocks);
    return () => window.removeEventListener("resize", updateBlocks);
  }, []);
  return (
    <div className={scss.skeletonContainer}>
      {Array.from({ length: isLarge }).map((_, index) => (
        <div key={index} className={scss.skeletonCard}>
          <div className={scss.skeletonImage}></div>
          <div className={scss.skeletonText}></div>
          <div className={scss.skeletonSubtext}></div>
        </div>
      ))}
    </div>
  );
};

export default Skelet;
