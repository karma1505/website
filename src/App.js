import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ImageGallery from './Components/ImageGallery';
import Travel from './Components/Travel';
import Rooms from './Components/Rooms';
import Story from './Components/Story';
import Sustain from './Components/Sustain';
import Footer from './Components/Footer';
import { faPlaneDeparture, faCar, faRoad, faTrain } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import Maps from './Components/Maps';
import Golden from './Components/Golden';
import Silver from './Components/Silver';
import Bronze from './Components/Bronze';

function MainContent() {
  return (
    <>
      <Element name="top" className="element">
        <ImageGallery />
        <h1 className="heading">DILLI HOUSE</h1>
        <h3 className="subheading">For All Special Retreats</h3>
      </Element>
      
      <Element name="rooms" className="element">
        <Rooms />
      </Element>
      
      <Element name="travel" className="element">
        <TravelConvenience />
      </Element>
      
      <Element name="story" className="element">
        <Story />
      </Element>
      
      <Element name="sustain" className="element">
        <Sustain />
      </Element>
      
      <Element name="maps" className="maps">
        <Maps />
      </Element>

      <Element name="contact" className="contact">
        <Footer />
      </Element>
    </>
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
    "2 hours from Chail",
    "1 hour from Chandigarh",
    "30 minutes from Kasauli",
    "30 minutes from Solan"
  ];

  const trainPoints = [
    "Near the Kalka-Shimla Toy Train Station Of Dharampur"
  ];

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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/golden" element={<Golden />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/bronze" element={<Bronze />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
