import React from 'react';
import logo from '../Media/logo.svg';
import { Link } from 'react-scroll';
import '../App.css';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container">
          <img src={logo} alt="logo" className="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="top" smooth={true} duration={500} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="rooms" smooth={true} duration={500} offset={-50} className="nav-link">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link to="story" smooth={true} duration={500} offset={-50} className="nav-link">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sustain" smooth={true} duration={500} offset={-50} className="nav-link">
                Sustainability
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={1000} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
