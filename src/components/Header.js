import React from "react";
import Search from "./Search";

function Header({ setSearchInputText, searchInputText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        setSearchInputText={setSearchInputText}
        searchInputText={searchInputText}
      />
    </header>
  );
}

export default Header;
