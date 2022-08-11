import React from 'react'

const FeaturedMovieTrailer = ({trailer_path}) => {
    <iframe title="Trailer" width="100%" height="100%" src={trailer_path.trailer_path} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}

export default FeaturedMovieTrailer