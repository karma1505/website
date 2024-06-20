import React from 'react';
import "../App.css";
import logo from '../Media/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#rooms" className="nav-link">Rooms</a></li>
            <li><a href="#amenities" className="nav-link">Amenities</a></li>
            <li><a href="#story" className="nav-link">Our Story</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
