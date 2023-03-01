import { Link, useLocation } from "react-router-dom";
import classes from "./About.module.css";

const About = ({ plot, id }) => {

  const { search } = useLocation();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.plot}>
          <h1>About</h1>
          <p>{plot}</p>
        </div>
        <div className={classes.links}>
          <a
            className={classes.btns}
            href={`https://www.imdb.com/title/${id}`}
            rel="noreferrer"
            target="_blank"
          >
            View on IMDB
          </a>
          <Link className={classes.backLink} to={`/${search}`}>
            Go Back To Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
