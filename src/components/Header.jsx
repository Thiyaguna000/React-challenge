import React from "react";
import logo from "../assets/fxdigitallogo.png";

export const Header = () => {

  const Click = () => {
    var navbar = document.querySelector(".main-nav ul");
    navbar.classList.toggle("active");
  } 

  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/toprated">Top Rated</a>
          </li>
          <li>
            <a href="/upcoming">Upcoming</a>
          </li>
        </ul>
      </nav>
      </header>
    </div>
  );
};

export default Header;
