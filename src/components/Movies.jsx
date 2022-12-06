import classes from "./Movies.module.css";
import { Link, useLocation } from "react-router-dom";

const Movies = ({ movie }) => {
  let srcImg = movie.Poster;
  
  if (srcImg === "N/A") srcImg = "https://via.placeholder.com/300x450";

  const { search } = useLocation();

  return (
    <>
      <img className={classes.movieimg} src={srcImg} alt="movie poster" />
      <div className={classes.title}>{movie.Title}</div>
      <div className={classes.year}>-{movie.Year}</div>
      <div className={classes.mrgnUp}>
        <Link
          to={`/movie/${movie.imdbID}${search}`}
          className={classes.detailsbtn}
        >
          More Details
        </Link>
      </div>
    </>
  );
};

export default Movies;
