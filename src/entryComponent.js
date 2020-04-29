import React from "react";

import "./entry.css";

export function EntryComponent(props){
  return (
    <div className="EntryComponent">
      <div className="Timestamp">{props.values.Timestamp}</div>
      <div className="Machine">{props.values.Machine}</div>
      <div className="Command">{props.values.Command}</div>
    </div>
  );
}