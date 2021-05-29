import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charachters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
