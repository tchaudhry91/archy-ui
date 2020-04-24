import React from "react";

import "./login.css";

export function Login(props) {
  function handleSubmit(event) {
    event.preventDefault();
    handleLogin(props.setLogin);
  }
  return (
    <div className="Login-form">
      <form onSubmit={handleSubmit}>
        <input className="Login-input" type="text" placeholder="User"></input>
        <input className="Login-input" type="password" placeholder="Password"></input>
        <button className="Login-button">Login</button>
      </form>
    </div>
  );
}

function handleLogin(setLogin) {
  // login(user, password)
  setLogin(true);
}