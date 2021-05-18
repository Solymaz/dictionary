import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
    event.target.reset();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          autoFocus={true}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
      </form>
    </div>
  );
}
