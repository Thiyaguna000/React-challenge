import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination/Pagination";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";

export const Upcoming = () => {
  const [upcomingList, setUpcomingList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const movieURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=7009bcbd203a44c230df630f8447bbc9&language=en-US&page=1`;
  
  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = () => {
    axios
      .get(movieURL)
      .then((res) => {
        setUpcomingList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paginate = (pageNumber) => {
    event.preventDefault();
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7009bcbd203a44c230df630f8447bbc9&language=en-US&page=${pageNumber}`)
      .then((res) => {
        setCurrentPage(pageNumber);
        setUpcomingList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchHandler = () => {
    event.preventDefault();
    console.log(searchValue);
    if (searchValue) {
      const searchProductData = moviesList.filter((item) =>
        item.original_title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMoviesList(searchProductData);
    } else {
      getMoviesList();
    }
  };

  return (
    <>
      <h1 className="home_header">Upcoming</h1>
      <div>
        <form style={{ margin: "30px 0px" }}>
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {upcomingList.map((item, index) => (
            <Card list={item} key={index} />
          ))}
      </div>
      {upcomingList.length > 0 && <Pagination paginate={paginate} />}
    </>
  );
};

export default Upcoming;
