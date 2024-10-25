import scss from "./Trending.module.scss"

const Trending = () => {
    return (
        <section className={scss.Trending}>
            <div className="container">
                <div className={scss.content}>
                    Trending
                </div>
            </div>
        </section>
    );
};

export default Trending;