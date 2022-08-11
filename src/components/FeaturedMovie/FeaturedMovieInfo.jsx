import React from "react";
import FeaturedMovieRating from "./FeaturedMovieRating";
import FeaturedMovieTrailer from "./FeaturedMovieTrailer";

export const FeaturedMovieInfo = ({movie}) => {
    //const trailer_path = `https://www.youtube.com/embed/${movie.videos.results[0].key}`
  return (
    <div>
      <div className="featured_movie_info">
        <h1 className="movie_title">
          {movie.title
            ? movie.title.toUpperCase()
            : movie.name.toUpperCase()}
        </h1>
        <h2 className="movie_tagline">{movie.tagline}</h2>
        <p className="movie_overview">{movie.overview}</p>
        <FeaturedMovieRating movie_average={movie.vote_average} />
        {/* <FeaturedMovieTrailer trailer_path={trailer_path} /> */}
      </div>
    </div>
  );
};

export default FeaturedMovieInfo
