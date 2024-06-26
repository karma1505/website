import React from 'react';
import "../App.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import instalogo from '../Media/instalogo.svg';
import facebooklogo from '../Media/facebooklogo.svg';


const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#706C61', color:'white' }}>
      <div className="footer-container">
        <div className="left-content">
          <p className="social-para">
            Follow Us 
          </p>
          <div className="social-icons">
            <a href="https://instagram.com/dillihouse_dharampur/" target="_blank" rel="noopener noreferrer">
              <img src={instalogo} alt="Instagram" className="social-logo" />
            </a>
            <a href="https://instagram.com/dillihouse_dharampur/" target="_blank" rel="noopener noreferrer">
              <img src={facebooklogo} alt="Facebook" className="social-logo" />
            </a>
          </div>
        </div>
        <div className="center-content">
          <p>&copy; 2024 Dilli House. All rights reserved.</p>
          <p><FontAwesomeIcon icon={faPhone} /> : +91 12345 67890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> : <a href="mailto:info@dillihouse.com" className='mail'>info@dillihouse.com</a></p>
          <p>Address: Dharampur, Kasauli, Himachal Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
