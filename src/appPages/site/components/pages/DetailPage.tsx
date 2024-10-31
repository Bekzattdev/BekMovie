import Creadits from "./DetailsSections/Credits";
import DetailsVideos from "./DetailsSections/DetailsVideos";
import MovieDetails from "./DetailsSections/MovieDetails";
import Recommendations from "./DetailsSections/Recommendations";
import Similar from "./DetailsSections/Similar";

const DetailPage = () => {
  return (
    <div>
      <MovieDetails />
      <div className="container">
        <Creadits />
        <DetailsVideos />
        <Similar />
        <Recommendations />
      </div>
    </div>
  );
};

export default DetailPage;
