import { Link } from "react-router-dom";
import classes from "./About.module.css";

const About = ({ plot, id }) => {
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
          <Link className={classes.backLink} to="/">
            Go Back To Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
