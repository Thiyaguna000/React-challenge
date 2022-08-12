import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const history = useNavigate();

  const backHandler = () => {
    if (sessionStorage.getItem('login')) {
      history('/React-challenge/#/home');
    } else {
      history('/React-challenge/#/login');
    }
  };

  return (
    <>
      <div>
        <img
          style={{ margin: '100px' }}
          src="https://screenshots.codesandbox.io/1vwxh.png"
          alt=""
          onClick={backHandler}
        />
      </div>
    </>
  );
};

export default NotFound;
