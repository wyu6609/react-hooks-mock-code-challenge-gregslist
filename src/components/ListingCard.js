import React, { useState } from "react";

function ListingCard({ listing, onDeleteItem }) {
  //like state
  const [favorite, setFavorite] = useState(false);
  //fav btn handler
  const favBtnHandler = () => {
    setFavorite(!favorite);
  };
  //deleteBtnHandler
  const deleteBtnHandler = () => {
    console.log(listing);
    //DELETE request
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    }).then(() => onDeleteItem(listing));
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={favBtnHandler}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={favBtnHandler}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={deleteBtnHandler}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
