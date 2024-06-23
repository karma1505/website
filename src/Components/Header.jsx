import React from 'react';
import logo from '../Media/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className="navbar fixed-top">  
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-links">  
          <li>
            <Link to="top" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="rooms" smooth={true} duration={500} offset={-50} className="nav-link">
              Rooms
            </Link>
          </li>
          <li>
            <Link to="story" smooth={true} duration={500} offset={-50} className="nav-link">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="sustain" smooth={true} duration={500} offset={-50} className="nav-link">
              Sustainability
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
