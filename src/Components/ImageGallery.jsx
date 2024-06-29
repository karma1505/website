import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pool from '../Media/pool.jpg';
import kitchen from '../Media/kitchen.JPG';
import nameplate1 from '../Media/nameplate.JPG';
import droneshoot from '../Media/droneshot.JPG';
import downstairs from '../Media/downstairs.JPG';
import videovilla from '../Media/videovilla.mp4';

const ImageGallery = () => {
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const carouselStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4.5rem', // Ensures items are stacked vertically
  };

  const captionStyle = {
    borderRadius: '5px',
    position: 'absolute',
    bottom: '20px', // Add some space from the bottom
    padding: '1rem',
    color: 'white',
    left: '0',
    right: '0',
    maxWidth: '40%', // Ensure it doesn't span the entire width
    margin: '0 auto', // Center align the caption
  };

  const paraStyle = {
    fontSize: '1em',
    marginTop: '1rem', // Reduced margin for better spacing
  };

  return (
    <Carousel className="custom-carousel" ref={carouselRef} style={carouselStyle}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={nameplate1} alt="The Dilli House" />
        <Carousel.Caption style={captionStyle}>
          <h3>Your Himalayan Escape</h3>
          <p style={paraStyle}>Welcome To The Dilli House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={downstairs} alt="The Dilli House" />
        <Carousel.Caption style={captionStyle}>
          <h3>Unlock Your Creative Mind</h3>
          <p style={paraStyle}>Try Your Hand At Poetry Or Painting</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={droneshoot} alt="The Dilli House" />
        <Carousel.Caption style={captionStyle}>
          <h3>Breathtaking Views</h3>
          <p style={paraStyle}>Perfect For Your Socials</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={kitchen} alt="The Dilli House" />
        <Carousel.Caption style={captionStyle}>
          <h3>Dine At The Royal Kitchen Of Dilli House</h3>
          <p style={paraStyle}>With Ranging From Over 7 Different Cuisine Styles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={pool} alt="Evening pool view" />
        <Carousel.Caption style={captionStyle}>
          <h3>Evening Pool View</h3>
          <p style={paraStyle}>Experience the serene ambiance of our pool at the golden hour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <video
          className="d-block w-100"
          src={videovilla}
          alt="The Dilli House Experience"
          autoPlay
          muted
          onEnded={handleVideoEnded}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageGallery;
