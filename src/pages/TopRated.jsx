import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Pagination from '../components/Pagination/Pagination';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import Header from '../components/Header';

export const TopRated = () => {
  const [topList, setTopList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [login, setLogin] = useState(false);
  const movieURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=7009bcbd203a44c230df630f8447bbc9&language=en-US&page=1`;

  useEffect(() => {
    getMoviesList();
    if (sessionStorage.getItem('login')) {
      setLogin(true);
    }
  }, []);

  const getMoviesList = () => {
    axios
      .get(movieURL)
      .then((res) => {
        console.log(res.data);
        setTopList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paginate = (pageNumber) => {
    event.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=7009bcbd203a44c230df630f8447bbc9&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setTopList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchHandler = () => {
    event.preventDefault();
    console.log(searchValue);
    if (searchValue) {
      const searchProductData = topList.filter((item) =>
        item.original_title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTopList(searchProductData);
    } else {
      getMoviesList();
    }
  };

  return login ? (
    <>
      <Header />
      <h1 className="home_header">Top Rated</h1>
      <div>
        <form style={{ margin: '30px 0px' }}>
          <Input
            type="text"
            placeholder="Search..."
            inputHandler={(e) => setSearchValue(e.target.value)}
          />
          <Button handleClick={searchHandler} title="Search" />
        </form>
      </div>
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
        {topList.map((item, index) => (
          <Card list={item} key={index} />
        ))}
      </div>
      {topList.length > 0 && <Pagination paginate={paginate} />}
    </>
  ) : (
    ''
  );
};

export default TopRated;
