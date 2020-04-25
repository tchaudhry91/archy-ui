import React, {useState} from 'react';
import './App.css';

import {Header} from "./header";
import {isLoggedIn} from "./utils";

function App() {
  const [loggedIn, setLogin] = useState(isLoggedIn());

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLogin={setLogin}/>
    </div>
  );
}

export default App;
