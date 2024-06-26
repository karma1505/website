import React from 'react';
import golden from '../Media/golden.jpg'; // Import your image here

const Golden = () => (
  <div className="suite-page">
    <h1>The Golden Room</h1>
    <img src={golden} alt="Golden Suite" className="suite-image" />
    <div className="suite-details">
      <p>
        Experience unparalleled luxury in our Golden Suite, featuring elegant interiors and breathtaking views. Enjoy a spacious living area, plush bedroom, and modern amenities for a perfect stay.
      </p>
    </div>
  </div>
);

export default Golden;
