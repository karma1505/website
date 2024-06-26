import React from 'react';
import silver from '../Media/silver.jpg'; 

const Silver = () => (
  <div className="suite-page">
    <h1>Silver Suite</h1>
    <img src={silver} alt="Silver Suite" className="suite-image" />
    <div className="suite-details">
      <p>
        The Silver Suite offers modern amenities, spacious comfort, and spectacular views of the Aravalli hills. Immerse yourself in luxury with our top-notch services and exquisite decor.
      </p>
    </div>
  </div>
);

export default Silver;
