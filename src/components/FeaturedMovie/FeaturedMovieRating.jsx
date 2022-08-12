/* eslint-disable react/prop-types */
import React from 'react';

const FeaturedMovieRating = ({ movie_average }) => {
  console.log(rating);
  const rating = Math.round(movie_average);
  const stars = [];

  return (
    <div className="featured_movie_rating">
      <p className="stars">
        {stars}
        <span className="rating">
          Popularity <i className="fa fa-heart"></i>
          {rating}
        </span>
      </p>
    </div>
  );
};

export default FeaturedMovieRating;
