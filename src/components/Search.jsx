import classes from "./Search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useRef, useState, useEffect } from "react";
import Movies from "./Movies";
import loadingAnim from "../Assets/Spinner-1s-200px.gif";
import { useSearchParams } from "react-router-dom";

const Search = ({ cache }) => {
  const search = useRef(null);
  const [moviesData, setmoviesData] = useState([]);
  let msg;
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useSearchParams();
  const query = params.get("q");

  useEffect(() => {
    
    
    if (query && query.trim().length > 1) {
      submitHanlder(null);
    }
    // if (window.Cache.length) setmoviesData(window.Cache);
    return () => {};
  }, []);

  const submitHanlder = async (e) => {
    setmoviesData([]);
    e && e.preventDefault();
    const enteredValue = search.current.value.trim();
    setParams({ q: enteredValue });

    if (enteredValue === "")
      return alert("Please Input Something In Search Field");

    setIsPending(true);
    
    const cacheItem = cache.get(enteredValue);
    if(cacheItem) {
      setIsPending(false);
      setError(null);
      setmoviesData(cacheItem);
      return;
    }

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=ea9cad3&s=${enteredValue}`
      );
      if (!res.ok) {
        throw Error("could not fetch the data");
      }
      const data = await res.json();
      if (data.Search) {
        setmoviesData(data.Search);
        cache.add(enteredValue, data.Search)
      }
      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };
  if (!moviesData.length) {
    msg = "No Movies!! Please Search to find movies :) ";
  }
  if (isPending) {
    msg = "Loading Please Wait!! :) ";
  }
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
              defaultValue={query || ""}
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
