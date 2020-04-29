import React from "react";
import BackImg from "../../assets/img/r3ybackground2.jpg";
import classes from "./Background.module.css";

export default Background = () => {
  return (
    <div className={classes.Background}>
      <img src={BackImg} alt="background"></img>
    </div>
  );
};
