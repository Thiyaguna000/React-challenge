/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button/Button';
import './Card.css';

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = ({ list }) => {
  const [heart, setheart] = useState(1);
  const history = useNavigate();

  const Heart = () => {
    if (heart) {
      setheart(0);
    } else {
      setheart(1);
    }
  };

  const detailsHandler = (id) => {
    history(`/details/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="top_part">
            <small>
              <i onClick={Heart} className={`fa ${heart ? 'fa-heart-o' : 'fa-heart'}`}></i>
            </small>
          </div>
          <div className="image">
            <img src={`http://image.tmdb.org/t/p/w500/${list.poster_path}`} />
          </div>
          <div className="vitamin">
            <h3>{list.original_title}</h3>
          </div>
          <div className="reviews">
            <p className="description">{list.overview}</p>
            <h3 className="price">
              Popularity: <span className="popularity">{list.popularity}</span>
            </h3>
          </div>
          <div>
            <div className="last_buttons">
              <p>Released:</p>
              <div className="qty_btn">
                <p>{list.release_date}</p>
              </div>
            </div>
            <div className="money_bag">
              <Button
                type="button"
                title="View Details"
                handleClick={() => detailsHandler(list.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
