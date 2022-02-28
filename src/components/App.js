import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //listing state
  const [listings, setListings] = useState([]);
  // search input state
  const [searchInputText, setSearchInputText] = useState("");

  // search renderer
  let updatedListings = listings.filter((el) => {
    if (el.description.toLowerCase().includes(searchInputText.toLowerCase())) {
      return el;
    } else if (searchInputText == "") {
      return el;
    }
  });

  return (
    <div className="app">
      <Header
        setSearchInputText={setSearchInputText}
        searchInputText={searchInputText}
      />
      <ListingsContainer setListings={setListings} listings={updatedListings} />
    </div>
  );
}

export default App;
