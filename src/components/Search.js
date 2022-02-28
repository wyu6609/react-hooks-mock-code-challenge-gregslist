import React, { useState } from "react";

function Search({ setSearchInputText, searchInputText }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchInputText(input);
  }
  const searchBarHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={searchBarHandler}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
