import classes from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useRef, useState } from "react";
import Movies from "./Movies";
import loadingAnim from "../Assets/Spinner-1s-200px.gif";
const Search = () => {
  const search = useRef(null);
  const [moviesData, setmoviesData] = useState([]);
  let msg;
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const submitHanlder = async (e) => {
    e.preventDefault();
    const enterenValue = search.current.value.trim();
    if (enterenValue !== "") {
      setIsPending(true);
      setmoviesData([]);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=ea9cad3&s=${enterenValue}`
        );
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        const data = await res.json();
        if (data.Search) {
          setmoviesData(data.Search);
        }
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    } else {
      alert("Please Input Something In Search Field");
    }
  };
  if (!moviesData.length) {
    msg = "No Movies!! Please Search to find movies :) ";
  }
  if (isPending) {
    msg = "Loading Please Wait!! :) ";
  }
  console.log(error);
  return (
    <div className={classes.container}>
      {!isPending && !error && (
        <form className={classes.search} onSubmit={submitHanlder}>
          <div className={classes.heading}>
            <BiSearchAlt className={classes.icon} />
            <h1>Search for a movie , TV series..</h1>
          </div>
          <div className={classes.inptBtn}>
            <input
              ref={search}
              type="text"
              placeholder="Search Movies, TV series"
            />
            <button className={classes.submit} type="submit">
              Search
            </button>
          </div>
        </form>
      )}
      {isPending && (
        <div className={classes.loading}>
          <img src={loadingAnim} alt="Loading" />
        </div>
      )}
      <ul className={classes.movieCards}>
        {msg && !error && <strong>{msg}</strong>}
        {moviesData &&
          !error &&
          moviesData.map((movie) => (
            <li className={classes.data} key={movie.imdbID}>
              <Movies movie={movie} />
            </li>
          ))}
      </ul>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Search;
