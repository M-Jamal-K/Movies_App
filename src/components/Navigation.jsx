import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes.navText}>
        <Link to="/">MoviesSeriesInfo</Link>
      </div>
      <div className={classes.logo}>
        <img
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          alt="react logo"
        />
      </div>
    </div>
  );
};

export default Navigation;
