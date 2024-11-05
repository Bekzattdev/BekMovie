import scss from "./Skelet.module.scss";
const Skelet = () => {
  return (
    <div className={scss.skeletonContainer}>
      {Array.from({ length: 5 }).map((_, index) => (
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
