import React, { useState } from "react";
import logo from './logo.png';
import "./header.css";
import { Login } from "./login";
import { Logout } from "./logout";
import { isLoggedIn } from "./utils";

export function Header(props) {
  const [loggedIn, setLogin] = useState(isLoggedIn());
  let button = <Login setLogin={setLogin}/>
  if (loggedIn) {
    button = <Logout setLogin={setLogin}/>
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-headline">
        Archy - ZSH History Search
      </p>
      {button}
    </header>
  );
}
