import React, { useState } from 'react';
import silver from '../Media/silver.jpg';
import silver2 from '../Media/silver2.jpg';
import silver3 from '../Media/silver3.jpg';
import recliner from '../Media/recliner.jpg';
import Footer from './Footer'; 
import "../App.css";

const amenities = [
  { id: 1, title: 'Panoramic Views', description: 'Experience the panoramic views from this room overlooking the green valleys.', image: silver2 },
  { id: 2, title: 'Classic Teakwood Study', description: 'Perfect For Those Who Have To Work Or Just Let Out Their Creative Side ', image: silver3 },
  { id: 3, title: 'Leather Recliner', description: 'Unwind With Luxorious Comfort And Enjoy The Pure Bliss ', image: recliner },
];

const additionalAmenities = [
  'Free Wifi',
  '24/7 Room Service',
  'Flat-screen TV',
  'Italian Leather Furniture',
  'Daily House Service',
];

const Silver = () => {
  const [activeAmenity, setActiveAmenity] = useState(amenities[0]);

  return (
    <>
      <div className="suite-page" style={{ padding: '0' }}>
        <img src={silver} alt="Golden Suite" className="suite-image" />
        <div className="room-description">
          <h1>The Silver Room</h1>
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
          <h2>More In The Silver Bedroom</h2>
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

export default Silver;
