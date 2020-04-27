import React, { Component } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import Background from "./components/Background/Background";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Logo from "./components/Logo/Logo";
import "./App.css";
import axios from "axios";

class App extends Component {
  render() {
    const res = axios.get("https://r3y.herokuapp.com/getPlayers");
    console.log(res);

    return (
      <div className="App">
        <Logo />
        <Leaderboard />
        <Background />
        <Backdrop />
      </div>
    );
  }
}

export default App;
