import React from 'react';
import './App.css';
import Header from './Components/Header';
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="heading">The Dilli House</h1>
      <h3 className="subheading">For All Special Retreats</h3>
      <ImageGallery />
    </div>
  );
}

export default App;
