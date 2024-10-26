import Popular from "./HomeSection/popular/Popular";
import TopRated from "./HomeSection/rated/TopRated";
import Trending from "./HomeSection/trend/Trending";
import Welcome from "./HomeSection/Welcome";
const HomePAge = () => {
  return (
    <>
      <Welcome />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default HomePAge;
