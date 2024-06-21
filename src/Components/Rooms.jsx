import React from 'react';
import goldenImg from '../Media/golden.jpg';
import silverImg from '../Media/silver.jpg';
import bronzeImg from '../Media/bronze.jpg';

import "../App.css";


const Rooms = () => {
  return (
    <div className="rooms-section">
      <h2>Our  Rooms</h2>
      <div className="room-card">
        <img src={goldenImg} alt="Golden Bedroom with Balcony Overlooking Himalayas" className="room-golden" />
        <div className="room-details">
          <h2>The Golden Bedroom</h2>
          <p>
          Luxuriate in the Golden Bedroom, featuring plush interiors and breathtaking Himalayan views. Experience the warmth of winter sunbathing and unwind in the en suite jacuzzi, all within your private, jungle-surrounded villa. Perfect for a luxurious retreat in the Himalayas.
          </p>
        </div>
      </div>

      <div className="room-card">
        <img src={silverImg} alt="Silver Bedroom with Modern Chic Ambiance" className="room-silver" />
        <div className="room-details">
          <h2>The Silver Bedroom</h2>
          <p>
            The chic and luxurious Silver Bedroom, perfect for the young at heart. With elegant grey and black decor, a cozy turquoise recliner for relaxation, and a stunning panoramic view of the lush valley and pool deck. Ideal for writers and poets, the room features a teak wood study table. Unwind in ultimate comfort and enjoy the tranquil sounds of nature.
          </p>
        </div>
      </div>

      <div className="room-card">
        <img src={bronzeImg} alt="The Bronze Bedroom: Privacy and Convenience" className="room-bronze" />
        <div className="room-details">
          <h2>The Bronze Bedroom</h2>
          <p>
          Located on the ground floor, the Bronze Bedroom is the ultimate private party pad with stunning valley views. Just outside, the Drawing Room is perfect for socializing without disturbing others. This room features a cozy sofa-cum-bed for two, ideal for late-night hangouts or pajama parties. Enjoy the vibe, soak in the views, and make unforgettable memories in your exclusive space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
