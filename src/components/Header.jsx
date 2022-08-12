import React, { useEffect, useState } from 'react';
import logo from '../assets/fxdigitallogo.png';

export const Header = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('login')) {
      setLogin(true);
      setUser(sessionStorage.getItem('user'));
    }
  }, []);

  const Click = () => {
    var navbar = document.querySelector('.main-nav ul');
    navbar.classList.toggle('active');
  };

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
    <header>
      <img src={logo} alt="logo" />

      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {login && (
        <nav className="main-nav">
          <ul>
            <li>
              <a href="/React-challenge/#/home">Home</a>
            </li>
            <li>
              <a href="/React-challenge/#/toprated">Top Rated</a>
            </li>
            <li>
              <a href="/React-challenge/#/upcoming">Upcoming</a>
            </li>
            <li onClick={handleLogout}>
              <a href="/React-challenge/#/login">Logout</a>
            </li>
            <li>
              <span>
                Welcome!<h4>{user}</h4>
              </span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
