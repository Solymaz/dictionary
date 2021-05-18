import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
      </form>
    </div>
  );
}
