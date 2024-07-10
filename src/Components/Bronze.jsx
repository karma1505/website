import React, { useState } from 'react';
import bronze from '../Media/bronze.jpg';
import scb from '../Media/scb.jpg';
import bronze3 from '../Media/bronze3.JPG';
import otto from '../Media/otto.jpg';
import Footer from './Footer'; 
import "../App.css";

const amenities = [
  { id: 1, title: 'Sofa-Cum-Bed', description: 'Perfect For Accomodating Upto 2 More Guests And Have A Slumber Party', image: scb },
  { id: 2, title: 'Private Balcony', description: 'Enjoy Sunset Views And Music Sessions On Your Private Balcony', image: bronze3 },
  { id: 3, title: 'Bedroom Ottoman', description: 'Versatile Ottomans For Lounging And Seating, Enhancing Your Experience. ', image: otto },
];

const additionalAmenities = [
  'Free Wifi',
  '24/7 Room Service',
  'Flat-screen TV',
  'Central Table',
  'Daily House Service',
];

const Bronze = () => {
  const [activeAmenity, setActiveAmenity] = useState(amenities[0]);

  return (
    <>
      <div className="suite-page" style={{ padding: '0' }}>
        <img src={bronze} alt="Bronze Suite" className="suite-image" />
        <div className="room-description">
          <h1>The Bronze Room</h1>
          <p>Here is a perfect combination of aesthetic designs, superlative luxury, state-of-the-art amenities, a private pool all to yourself along with a majestic view of the city’s skyline. Undoubtedly, these rooms define immaculate exuberance. Unfurl your life’s best moments here with your loved ones or unwind by yourself.</p>
        </div>
        <div className="suite-content">
          <div className="amenity-images">
            <img src={activeAmenity.image} alt={activeAmenity.title} className="amenity-image" />
          </div>
          <div className="amenity-details">
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="amenity-item"
                onMouseEnter={() => setActiveAmenity(amenity)}
              >
                <h1>{amenity.title}</h1>
                {activeAmenity.id === amenity.id && <p>{amenity.description}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="additional-amenities">
          <h2>More In The Bronze Bedroom</h2>
          <ul>
            {additionalAmenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bronze;
