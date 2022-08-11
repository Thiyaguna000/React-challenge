import React from 'react';
import FeaturedMoviePoster from './FeaturedMoviePoster';
import FeaturedMovieInfo from './FeaturedMovieInfo';
import './FeaturedMovie.css';

const FeaturedMovie = ({ moviesList }) => {
  console.log(moviesList);
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${moviesList.backdrop_path})`
  };
  return (
    <div className="featured_movie_container">
      <FeaturedMoviePoster poster={moviesList.poster_path} />
      <FeaturedMovieInfo movie={moviesList} />
      <div style={style} className="featured_movie_wrapper"></div>
    </div>
  );
};

export default FeaturedMovie;
