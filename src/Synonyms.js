import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <li>{props.synonyms[0]}</li>
      </ul>
    );
  } else {
    return null;
  }
}
