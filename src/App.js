import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCar, faHighway, faTrain } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Header from './Components/Header';
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="heading">The Dilli House</h1>
      <h3 className="subheading">For All Special Retreats</h3>
      <TravelConvenience />
      <ImageGallery />
    </div>
  );
}

function TravelConvenience() {
  return (
    <section className="travel-convenience">
      <h2>Travel Convenience</h2>
      <h3>Easily Reachable from Major Locations</h3>
      <div className="convenience-points">
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>5 hours from Delhi NCR</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>1 hour from Chandigarh</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>30 minutes from Kasauli</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>30 minutes from Solan</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>2 hours away from Shimla</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>2 hours away from Chail</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faCar} />
          <p>20 minutes away from Barog</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <p>47 km away from Shimla Airport</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <p>58 km away from Chandigarh Airport</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faHighway} />
          <p>Well connected with the Chandigarh Shimla 4 lane highway</p>
        </div>
        <div className="convenience-point">
          <FontAwesomeIcon icon={faTrain} />
          <p>In very near proximity to the toy train station of Dharampur (Kalka-Shimla Toy Train)</p>
        </div>
      </div>
    </section>
  );
}

export default App;
