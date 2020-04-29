import React from "react";
import classes from "./Player.module.css";
export default Player = (props) => {
  return (
    <tr className={classes.Player}>
      <td>{props.player.Teamno}</td>
      <td>{props.player.username}</td>
      <td>{props.player.kills}</td>
      <td>{props.player.rank}</td>
    </tr>
  );
};
