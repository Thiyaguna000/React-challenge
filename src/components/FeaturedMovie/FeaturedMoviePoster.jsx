import React from 'react';

const FeaturedMoviePoster = ({ poster }) => {
  const poster_path = `https://image.tmdb.org/t/p/w500/${poster}`;
  return (
    <div>
      <img className="featured_movie_poster" src={poster_path} />
    </div>
  );
};

export default FeaturedMoviePoster;
