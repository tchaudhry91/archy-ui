import React from "react";
import logo from './logo.png';
import "./header.css";
import { Login } from "./login";
import { Logout } from "./logout";

export function Header(props) {
  let button = <Login setLogin={props.setLogin}/>
  if (props.loggedIn) {
    button = <Logout setLogin={props.setLogin}/>
  }
  return (
    <header className="App-header" setLogin={props.setLogin} login={props.login}>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-headline">
        Archy - ZSH History Search
      </p>
      {button}
    </header>
  );
}
