import React, { Fragment } from "react";
import foodimage from "../Cart/foodimage.jpg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My app</h1>
        <button>Cart</button>
      </header>

      <div className={classes["main-image"]}>
        <img src={foodimage} alt="food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
