import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function StarRating(prop) {
  const [rating, setRating] = useState(prop?.star); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
  );
}
