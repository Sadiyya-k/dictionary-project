import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <div className="text">{props.phonetic}</div>
      </div>
    );
  } else {
    return null;
  }
}
