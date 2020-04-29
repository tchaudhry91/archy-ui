import React from 'react';
import './App.css';

import {Header} from "./header";
import { EntryContainer } from './entryContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <EntryContainer />
    </div>
  );
}

export default App;
