import React from 'react'

const FeaturedMovieRating = ({movie_average}) => {
    const stars = []

    for(let i = 0; i < 10; i++) {
        if(i < movie_average.movie_average && (movie_average.movie_average - i) < 1 && (movie_average.movie_average - i) > 0) {
            stars.push(<i className="star fas fa-star-half-alt" key={`star${i}`}></i>)
        } else if(i < movie_average.movie_average && (movie_average.movie_average - i) > 0) {
            stars.push(<i className="star fas fa-star" key={`star${i}`}></i>)
        } else {
            stars.push(<i className="star far fa-star" key={`star${i}`}></i>)
        }
    }

    return (
        <div className="featured_movie_rating">
            <p className="stars">{stars}
                <span className="movie_average">{movie_average.movie_average}</span>
            </p>
        </div>
    )
}

export default FeaturedMovieRating