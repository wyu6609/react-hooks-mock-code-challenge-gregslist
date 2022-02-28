import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import { v4 as uuid } from "uuid";

function ListingsContainer({ setListings, listings }) {
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  };

  const onDeleteItem = (deletedObj) => {
    let updatedListings = listings.filter((el) => {
      return el.id !== deletedObj.id;
    });
    setListings(updatedListings);
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={uuid()}
              listing={listing}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
