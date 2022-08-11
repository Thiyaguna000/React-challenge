import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FeaturedMovie from '../components/FeaturedMovie/FeaturedMovie';
import Header from '../components/Header';

const Details = () => {
  const [moviesList, setMoviesList] = useState({});
  const { id } = useParams();
  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=7009bcbd203a44c230df630f8447bbc9&language=en-US`;

  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = async () => {
    await axios
      .get(movieURL)
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div>{Object.keys(moviesList).length && <FeaturedMovie moviesList={moviesList} />}</div>
    </>
  );
};

export default Details;
