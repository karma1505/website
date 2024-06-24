import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import instalogo from '../Media/instalogo.svg';

const Footer = () => {
  return (
    <div className="page-container">
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Dilli House. All rights reserved.</p>
          <p><FontAwesomeIcon icon={faPhone} /> : +91 12345 67890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> : <a href="mailto:info@dillihouse.com">info@dillihouse.com</a></p>
          <p>Address: Dharampur, Kasauli, Himachal Pradesh, India</p>
          <p className="social-para">Follow Us <a href="https://instagram.com/dillihouse_dharampur/" target="_blank" rel="noopener noreferrer"><img src={instalogo} alt="instalogo" className="instalogo" /></a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
