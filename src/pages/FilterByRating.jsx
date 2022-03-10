import Rating from "react-rating";
import React from "react";

function SearchRating({ setFiltroRating, filtroRating }) {
  return (
    <Rating
      className="mt-3 fs-3"
      emptySymbol="fa-regular fa-star text-warning"
      fullSymbol="fa-solid fa-star text-warning"
      onChange={(rate) => {
        setFiltroRating(rate);
      }}
      rate={filtroRating}
      initialRating={filtroRating}
    />
  );
}

export default SearchRating;
