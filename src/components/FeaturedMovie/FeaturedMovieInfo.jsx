/* eslint-disable react/prop-types */
import React from 'react';
import FeaturedMovieRating from './FeaturedMovieRating';

export const FeaturedMovieInfo = ({ movie }) => {
  console.log(movie);
  //const trailer_path = `https://www.youtube.com/embed/${movie.videos.results[0].key}`
  return (
    <div>
      <div className="featured_movie_info">
        <h1 className="movie_title">
          {movie.title ? movie.title.toUpperCase() : movie.name.toUpperCase()}
        </h1>
        <h2 className="movie_tagline">{movie.tagline}</h2>
        <p className="movie_overview">{movie.overview}</p>
        <FeaturedMovieRating movie_average={movie.vote_average} />
        {movie.homepage && <iframe className="iframe_homepage" src={movie.homepage} />}
      </div>
    </div>
  );
};

export default FeaturedMovieInfo;
