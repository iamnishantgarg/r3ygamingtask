import React from "react";
import classes from "./Leaderboard.module.css";
// import { CSSTransition } from "react-transition-group";
// import { Fade } from "reactstrap";
import axios from "axios";
import Player from "../Player/Player";
// import { table, Container } from "reactstrap";

// const getPlayers = async () => {
//   const res = await fetch("https://r3y.herokuapp.com/getPlayers");
//   res.json();
//   console.log(res.body);
// };

export default function Leaderboard() {
  const players = [
    { Teamno: 1, username: "NishantA", kills: 43, rank: 1 },
    { Teamno: 221, username: "NishantB", kills: 42, rank: 2 },
    { Teamno: 211, username: "NishantC", kills: 33, rank: 23 },
    { Teamno: 12, username: "NishantD", kills: 13, rank: 22 },
    { Teamno: 1, username: "NishantA", kills: 43, rank: 1 },
    { Teamno: 221, username: "NishantB", kills: 42, rank: 2 },
    { Teamno: 211, username: "NishantC", kills: 33, rank: 23 },
    { Teamno: 12, username: "NishantD", kills: 13, rank: 22 },
    { Teamno: 1, username: "NishantA", kills: 43, rank: 1 },
    { Teamno: 221, username: "NishantB", kills: 42, rank: 2 },
    { Teamno: 211, username: "NishantC", kills: 33, rank: 23 },
    { Teamno: 12, username: "NishantD", kills: 13, rank: 22 },
  ];
  // console.log(getPlayers());
  // getPlayers();

  const playerRows = players.map((play, ind) => {
    return <Player player={play} key={ind} />;
  });
  return (
    <div className={classes.Leaderboard}>
      <table>
        <thead>
          <tr>
            <th>Team No.</th>
            <th>Username</th>
            <th>Kills</th>
            <th>Rank</th>
          </tr>
        </thead>

        <tbody>{playerRows}</tbody>
      </table>
    </div>
  );
}
