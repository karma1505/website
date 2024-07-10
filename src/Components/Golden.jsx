import React, { useState } from 'react';
import golden from '../Media/golden.jpg';
import golden2 from '../Media/golden2.jpg';
import goldenjacuzzi from '../Media/goldenjacuzzi.JPG';
import goldenpool from '../Media/goldenpool.JPG';
import Footer from './Footer'; // Import the Footer component
import "../App.css";

const amenities = [
  { id: 1, title: 'Luxurious Bed', description: 'Experience the comfort of our king-sized bed with premium linens.', image: golden2 },
  { id: 2, title: 'Jacuzzi Bathroom', description: 'Enjoy our modern bathroom equipped with a jacuzzi.', image: goldenjacuzzi },
  { id: 3, title: 'Private Pool', description: 'Relax on your private pool with stunning views of the surrounding nature.', image: goldenpool },
];

const additionalAmenities = [
  'Free Wifi',
  '24/7 Room Service',
  'Flat-screen TV',
  'Italian Leather Furniture',
  'Daily House Service',
];

const Golden = () => {
  const [activeAmenity, setActiveAmenity] = useState(amenities[0]);

  return (
    <>
      <div className="suite-page" style={{ padding: '0' }}>
        <img src={golden} alt="Golden Suite" className="suite-image" />
        <div className="room-description">
          <h1>The Golden Room</h1>
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
          <h2>More In The Golden Bedroom</h2>
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

export default Golden;
