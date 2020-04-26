import React from "react";
import classes from "./Player.module.css";
export default function Player(props) {
  return (
    <tr className={classes.Player}>
      <td>{props.player.index}</td>
      <td>{props.player.name}</td>
      <td>{props.player.lastname}</td>
    </tr>
  );
}
