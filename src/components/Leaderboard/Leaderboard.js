import React from "react";
import classes from "./Leaderboard.module.css";
import { Container, Table } from "reactstrap";
import Player from "../Player/Player";
// import { Table, Container } from "reactstrap";
export default function Leaderboard() {
  const players = [
    { index: 1, name: "Nishant", lastname: "garg" },
    { index: 2, name: "Nishant", lastname: "garg" },
    { index: 3, name: "Nishant", lastname: "garg" },
    { index: 4, name: "Nishant", lastname: "garg" },
  ];
  const playerRows = players.map((play) => {
    return <Player player={play} />;
  });
  return (
    <Container className={classes.Leaderboard}>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{playerRows}</tbody>
      </Table>
    </Container>
  );
}
