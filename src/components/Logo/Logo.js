import React from "react";
import classes from "./Logo.module.css";
import LogoImg from "../../assets/img/r3ylogo.png";

export default Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={LogoImg} alt="logo" />
    </div>
  );
};
