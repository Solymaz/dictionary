import React from "react";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h4>{meaning.partOfSpeech}</h4>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p>
              <strong>Example: </strong>{" "}
              <em className="Meaning-example">
                {`${definition.example[0].toUpperCase()}${definition.example.slice(
                  1
                )}`}
              </em>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
