import React, { useState } from "react";

import { EntryComponent } from "./entryComponent";
import { getEntries } from "./utils";

import "./search.css";

export function EntryContainer(props) {
  const [entries, setEntries] = useState([])

  return (
    <>
      <div>
        <EntryFilterBar setEntries={setEntries}/>
      </div>
      <div>
        {entries.map((vals, k) => { return <EntryComponent key={k} values={vals} /> })}
      </div>
    </>
  );
}

function EntryFilterBar(props) {
  async function handleSearch() {
    try {
      let ent = await getEntries();
      props.setEntries(ent)
    }
    catch (err) {
      console.log("Failed to fetch entries")
    }

  }
  return (
    <div className="SearchBar">
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}