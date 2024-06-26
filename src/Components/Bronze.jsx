import React from 'react';
import bronze from '../Media/bronze.jpg'; // Import your image here

const Bronze = () => (
  <div className="suite-page">
    <h1>Bronze Suite</h1>
    <img src={bronze} alt="Bronze Suite" className="suite-image" />
    <div className="suite-details">
      <p>
        The Bronze Suite provides a regal experience with luxurious amenities, spacious comfort, and round-the-clock butler service. Indulge in the opulence and grandeur of this magnificent suite.
      </p>
    </div>
  </div>
);

export default Bronze;
