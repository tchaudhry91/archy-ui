import React, { useState } from "react";
import logo from './logo.png';
import "./header.css";

import { isLoggedIn } from "./utils";
import { Menu } from "./menu";

export function Header(props) {
  const [loggedIn, setLogin] = useState(isLoggedIn());
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-headline">Archy - ZSH History Search</p>
        <button className="Menu-button" onClick={() => { setShowMenu(!showMenu) }}>☰</button>
      </div>
      {showMenu && <Menu loggedIn={loggedIn} setLogin={setLogin} />}
    </header>
  );
}
