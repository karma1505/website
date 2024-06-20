import React from 'react';
import pool from '../Media/pool.jpg'; // Placeholder image
import "../App.css";

const Rooms = () => {
  return (
    <div className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="room-card">
        <img src={pool} alt="Golden Bedroom" className="room-image" />
        <div className="room-details">
          <h3>The Golden Bedroom</h3>
          <p>
            The Master’s Bedroom offers a beautiful view of the Reserved Forest, a lucky guest may be able to spot the varied wildlife of the Himalayas.
            The name Golden Bedroom is not only relevant to the plush Golden interiors, but also to the Sunshine that illuminates the room during winters,
            you would have heard of bone chilling winter, how about therapeutic bone warming sunbaths on the lounger in this room.
            The connected en suite houses the Couple Jacuzzi for a relaxing warm massage in the tranquil environs of the Jungle Surrounded Villa.
          </p>
        </div>
      </div>

      <div className="room-card">
        <img src={pool} alt="Silver Bedroom" className="room-image" />
        <div className="room-details">
          <h3>The Silver Bedroom</h3>
          <p>
            The Place for youth, the subtle selection of Grey and Black elements in the room give it a chic and luxurious vibe.
            The beaming turquoise recliner stands out for those looking for a hugging chair to read a book, scroll through reels or enjoy their favorite series.
            The Silver Bedroom has a Ninety-Degree view, the lush green valley on one side and the Pool Deck and Roof in the front.
            The room has been decorated to create an immersion into luxury, while providing one a perfect place to “Chill”.
            If you are a writer or a poet the teak wood study table won’t let your creativity rest and the only noise you will be hearing will be of your thoughts.
          </p>
        </div>
      </div>

      <div className="room-card">
        <img src={pool} alt="Bronze Bedroom" className="room-image" />
        <div className="room-details">
          <h3>The Bronze Bedroom</h3>
          <p>
            Located on the ground floor the room provides unmatched privacy at the property, the room has wonderful views of the green bleeding valley,
            with the Drawing Room right outside. Perfect for guests who want to have a party without disturbing others on the property.
            The room houses a Sofa-Cum-Bed perfect for 2 more people to sleep on, a late night get together can turn into a perfect slumber or pajama party in this room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
