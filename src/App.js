// App.jsx
import React from 'react';
import './App.css';
import Header from './Components/Header';
import ImageGallery from './Components/ImageGallery';
import Travel from './Components/Travel';
import { faPlaneDeparture, faCar, faRoad, faTrain } from '@fortawesome/free-solid-svg-icons';

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
  const airportPoints = [
    "47 km away from Shimla Airport",
    "58 km away from Chandigarh Airport"
  ];

  const carPoints = [
    "5 hours from Delhi NCR",
    "2 hours away from Shimla",
    "2 hours away from Chail",
    "1 hour from Chandigarh",
    "30 minutes from Kasauli",
    "30 minutes from Solan",
    "20 minutes away from Barog"
  ];

  const trainPoints = [
    "Near the Kalka-Shimla Toy Train Station Of Dharampur" ];

  const highwayPoints = [
    "Well connected with the Chandigarh-Shimla 4 lane highway"
  ];

  return (
    <section className="travel-convenience">
      <h2>Travel Convenience</h2>
      <h3>Easily Reachable from Major Locations</h3>
      <div className="travel-card-container">
        <Travel
          icon={faPlaneDeparture}
          title="Airports"
          points={airportPoints}
        />
        <Travel
          icon={faCar}
          title="By Car"
          points={carPoints}
        />
        <Travel
          icon={faTrain}
          title="By Rail"
          points={trainPoints}
        />
        <Travel
          icon={faRoad}
          title="Connectivity"
          points={highwayPoints}
        />
      </div>
    </section>
  );
}

export default App;
