import classes from "./DetailMovieBlock.module.css";

const DetailMovieBlock = ({ data }) => {
  let srcImg = data.Poster;
  if (srcImg === "N/A") srcImg = "https://via.placeholder.com/300x450";
  return (
    <>
      <div className={classes.container}>
        <div className={classes.posterImg}>
          <img src={srcImg} alt="Poster" />
        </div>
        <div className={classes.movieInfo}>
          <h1>{data.Title}</h1>
          <ul>
            <li>
              <strong>Genre:</strong>
              {data.Genre}
            </li>
            <li>
              <strong>Released:</strong>
              {data.Released}
            </li>
            <li>
              <strong>Rated:</strong>
              {data.Rated}
            </li>
            <li>
              <strong>imdbRating:</strong>
              {data.imdbRating}
            </li>
            <li>
              <strong>Director:</strong>
              {data.Director}
            </li>
            <li>
              <strong>Writer:</strong>
              {data.Writer}
            </li>
            <li>
              <strong>Actor:</strong>
              {data.Actors}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailMovieBlock;
