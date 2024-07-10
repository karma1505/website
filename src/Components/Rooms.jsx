import React from 'react';
import { Link } from 'react-router-dom';
import goldenImg from '../Media/golden.jpg';
import silverImg from '../Media/silver.jpg';
import bronzeImg from '../Media/bronze.jpg';
import '../App.css'; // Import specific CSS for Rooms component

const Rooms = () => (
  <div className="room-section">
    <h2 style={{ textAlign: 'center', color: '#ffffff' }}>Our Rooms</h2>

    {[
      {
        to: '/Golden',
        imgSrc: goldenImg,
        alt: 'Golden Bedroom with Balcony Overlooking Himalayas',
        title: 'Golden',
        text: 'Luxuriate in the Golden Bedroom, featuring plush interiors and breathtaking Himalayan views. Experience the warmth of winter sunbathing and unwind in the en suite jacuzzi, all within your private, jungle-surrounded villa. Perfect for a luxurious retreat in the Himalayas.',
        style: { color: '#ffd700' }, // Use inline styles or other method for text colors
      },
      {
        to: '/Silver',
        imgSrc: silverImg,
        alt: 'Silver Bedroom with Modern Chic Ambiance',
        title: 'Silver',
        text: 'The chic and luxurious Silver Bedroom, perfect for the young at heart. With elegant grey and black decor, a cozy turquoise recliner for relaxation, and a stunning panoramic view of the lush valley and pool deck. Ideal for writers and poets, the room features a teak wood study table. Unwind in ultimate comfort and enjoy the tranquil sounds of nature.',
        style: { color: '#c0c0c0' }, // Use inline styles or other method for text colors
      },
      {
        to: '/Bronze',
        imgSrc: bronzeImg,
        alt: 'The Bronze Bedroom: Privacy and Convenience',
        title: 'Bronze',
        text: 'Located on the ground floor, the Bronze Bedroom is the ultimate private party pad with stunning valley views. Just outside, the Drawing Room is perfect for socializing without disturbing others. This room features a cozy sofa-cum-bed for two, ideal for late-night hangouts or pajama parties. Enjoy the vibe, soak in the views, and make unforgettable memories in your exclusive space.',
        style: { color: '#cd7f32' }, // Use inline styles or other method for text colors
      },
    ].map(({ to, imgSrc, alt, title, text, style }, index) => (
      <Link to={to} key={index} className="room-card">
        <img src={imgSrc} alt={alt} className="room-img" />
        <div className="room-details">
          <h1 className="room-h1">
            The <span style={style}>{title}</span> Bedroom
          </h1>
          <p className="room-p">{text}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default Rooms;
