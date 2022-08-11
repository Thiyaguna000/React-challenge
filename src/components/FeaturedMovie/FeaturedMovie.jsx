import React from 'react';
import FeaturedMoviePoster from './FeaturedMoviePoster';
import FeaturedMovieInfo from './FeaturedMovieInfo';
import './FeaturedMovie.css';

const FeaturedMovie = (moviesList) => {
  console.log(moviesList)
  return (
    <div className='featured_movie_container'>
    <FeaturedMoviePoster poster={moviesList.poster_path} />
    <FeaturedMovieInfo movie={moviesList}/>
</div>
  )
}

export default FeaturedMovie

