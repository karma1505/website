import React from 'react';
import logo from '../Media/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className="navbar fixed-top">  
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-buttons"> {/* Changed ul to div */}
          <Link to="top" smooth={true} duration={500} className="nav-button">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="rooms" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Rooms</button>
          </Link>
          <Link to="story" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Our Story</button>
          </Link>
          <Link to="sustain" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Sustainability</button>
          </Link>
          <Link to="contact" smooth={true} duration={1000} offset={-50} className="nav-button">
            <button className="nav-button">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
