import React from 'react';
import { CARD_IMG } from '../utils/Constants';

const MovieCard = ({ imgurl }) => {
  return (
    <div className="h-48 w-32 flex-shrink-0 mx-2 mb-8">
      <img
        className="h-full w-full object-cover rounded-lg shadow-md"
        src={CARD_IMG + imgurl}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
