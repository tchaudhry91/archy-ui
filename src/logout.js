import React from "react";
import { logout } from "./utils";
import "./login.css";

export function Logout(props) {
  return (
    <button className="Login-button" onClick={() => { handleLogout(props.setLogin) }}>Logout</button>
  )
}

function handleLogout(setLogin) {
  logout();
  setLogin(false);
}