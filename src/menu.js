import React from "react";

import {Login} from "./login";
import {Logout} from "./logout";

import "./menu.css";

export function Menu(props) {
  let button = <Login isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} />
  if (props.loggedIn) {
    button = <Logout isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} />
  }

  return (
    <div className="Menu-bar">
      {button}
    </div>
  )
}