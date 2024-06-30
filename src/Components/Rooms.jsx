import React from 'react';
import { Link } from 'react-router-dom';
import goldenImg from '../Media/golden.jpg';
import silverImg from '../Media/silver.jpg';
import bronzeImg from '../Media/bronze.jpg';

const roomStyles = {
  section: {
    width: '80%',
    margin: '0 auto',
    padding: '30px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#706C61',
    textDecoration: 'none',
    color: 'inherit',
  },
  cardEven: {
    flexDirection: 'row-reverse',
  },
  img: {
    width: '50%',
    height: 'auto',
    borderRadius: '15px',
    objectFit: 'cover',
    margin: '10px',
  },
  details: {
    width: '50%',
    padding: '20px',
    textAlign: 'left',
  },
  textColors: {
    golden: { color: '#ffd700' },
    silver: { color: '#c0c0c0' },
    bronze: { color: '#cd7f32' },
  },
  h1: {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#ffffff',
  },
  p: {
    fontSize: '19px',
    color: '#ffffff',
    lineHeight: '1.6',
  },
};

const Rooms = () => (
  <div style={roomStyles.section}>
    <h2 style={{ textAlign: 'center', color: '#ffffff' }}>Our Rooms</h2>

    {[
      {
        to: '/Golden',
        imgSrc: goldenImg,
        alt: 'Golden Bedroom with Balcony Overlooking Himalayas',
        title: 'Golden',
        text: 'Luxuriate in the Golden Bedroom, featuring plush interiors and breathtaking Himalayan views. Experience the warmth of winter sunbathing and unwind in the en suite jacuzzi, all within your private, jungle-surrounded villa. Perfect for a luxurious retreat in the Himalayas.',
        style: roomStyles.textColors.golden,
      },
      {
        to: '/Silver',
        imgSrc: silverImg,
        alt: 'Silver Bedroom with Modern Chic Ambiance',
        title: 'Silver',
        text: 'The chic and luxurious Silver Bedroom, perfect for the young at heart. With elegant grey and black decor, a cozy turquoise recliner for relaxation, and a stunning panoramic view of the lush valley and pool deck. Ideal for writers and poets, the room features a teak wood study table. Unwind in ultimate comfort and enjoy the tranquil sounds of nature.',
        style: roomStyles.textColors.silver,
      },
      {
        to: '/Bronze',
        imgSrc: bronzeImg,
        alt: 'The Bronze Bedroom: Privacy and Convenience',
        title: 'Bronze',
        text: 'Located on the ground floor, the Bronze Bedroom is the ultimate private party pad with stunning valley views. Just outside, the Drawing Room is perfect for socializing without disturbing others. This room features a cozy sofa-cum-bed for two, ideal for late-night hangouts or pajama parties. Enjoy the vibe, soak in the views, and make unforgettable memories in your exclusive space.',
        style: roomStyles.textColors.bronze,
      },
    ].map(({ to, imgSrc, alt, title, text, style }, index) => (
      <Link to={to} key={index} style={{ ...roomStyles.card, ...(index % 2 === 1 ? roomStyles.cardEven : {}) }}>
        <img src={imgSrc} alt={alt} style={roomStyles.img} />
        <div style={roomStyles.details}>
          <h1 style={roomStyles.h1}>
            The <span style={style}>{title}</span> Bedroom
          </h1>
          <p style={roomStyles.p}>{text}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default Rooms;
