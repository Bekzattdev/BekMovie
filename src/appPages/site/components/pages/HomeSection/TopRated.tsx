import scss from "./TopRated.module.scss";

const TopRated = () => {
  return (
    <section className={scss.TopRated}>
      <div className="container">
        <div className={scss.content}> TopRated</div>
      </div>
    </section>
  );
};

export default TopRated;
