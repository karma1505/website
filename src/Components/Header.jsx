import React from 'react';
import logo from '../Media/logo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top">  
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-buttons"> 
          <RouterLink to="/" className="nav-button">
            <button className="nav-button">Home</button>
          </RouterLink>
          <ScrollLink to="rooms" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Rooms</button>
          </ScrollLink>
          <ScrollLink to="story" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Our Story</button>
          </ScrollLink>
          <ScrollLink to="sustain" smooth={true} duration={500} offset={-50} className="nav-button">
            <button className="nav-button">Sustainability</button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={1000} offset={-50} className="nav-button">
            <button className="nav-button">Contact</button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={1000} offset={-50} className="nav-button">
            <button className="nav-button">Book Your Stay</button>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
