import Navigation from "./Navigation";
import Search from "./Search";

const Home = ({ cache }) => {
  return (
    <>
      <Navigation />
      <Search cache={cache} />
    </>
  );
};

export default Home;
