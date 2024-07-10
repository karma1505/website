import React from 'react';
import "../App.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import instalogo from '../Media/instalogo.svg';
import facebooklogo from '../Media/facebooklogo.svg';
import makemytriplogo from '../Media/mmtlogo.svg'; // Import MakeMyTrip logo

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#706C61', color: 'white' }}>
      <div className="footer-container">
        <div className="left-content">
          <p className="social-para">
            Connect With Us 
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

        <div className="right-content">
          <a className="book-stay-para" href="https://www.makemytrip.com/hotels/dilli_villa_3bhk_swimming_pool_jacuzzi_and_home_theatre-details-kasauli.html">
            Book Your Stay
          </a>
          <div className="book-stay">
            <a href="https://www.makemytrip.com/hotels/dilli_villa_3bhk_swimming_pool_jacuzzi_and_home_theatre-details-kasauli.html" target="_blank" rel="noopener noreferrer">
              <img src={makemytriplogo} alt="MakeMyTrip" className="makemytrip-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
