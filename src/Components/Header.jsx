import React from 'react';
import "../App.css";
import logo from '../Media/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
