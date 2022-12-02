import About from "./About";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import useFetch from "../customHook/useFetch";
import DetailMovieBlock from "./DetailMovieBlock";

const MovieDetail = (props) => {
  const { id } = useParams();
  console.log(id);
  const { data, isPending, error } = useFetch(
    `https://www.omdbapi.com/?apikey=ea9cad3&i=${id}`
  );

  if (!isPending) {
    console.log(data);
  }
  return (
    <>
      <Navigation />
      {!isPending && data && <DetailMovieBlock data={data} />}

      {error && (
        <p>
          <h1>Something Went Wrong</h1>
        </p>
      )}
      {!isPending && data && <About plot={data.Plot} id={id} />}
    </>
  );
};

export default MovieDetail;
