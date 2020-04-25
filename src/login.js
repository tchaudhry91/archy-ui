import React, { useRef } from "react";

import "./login.css";
import {getToken} from "./utils";
import Cookies from "universal-cookie";

export function Login(props) {
  const userRef = useRef(null);
  const passwordRef = useRef(null);


  async function handleSubmit(event) {
    event.preventDefault();
    await handleLogin(props.setLogin, userRef.current.value, passwordRef.current.value);
  }
  return (
    <div className="Login-form">
      <form onSubmit={handleSubmit}>
        <input className="Login-input" ref={userRef} type="text" placeholder="User"></input>
        <input className="Login-input" ref={passwordRef} type="password" placeholder="Password"></input>
        <button className="Login-button">Login</button>
      </form>
    </div>
  );
}

async function handleLogin(setLogin, user, password) {
  try {
  const token = await getToken(user, password)
  const cookies = new Cookies()
  cookies.set("token", token)
  setLogin(true)
  }
  catch(err) {
    console.log("Failed to login:" + err)
  }
}