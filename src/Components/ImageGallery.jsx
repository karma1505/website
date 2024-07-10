import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pool from '../Media/pool.jpg';
import kitchen from '../Media/kitchen.JPG';
import nameplate1 from '../Media/nameplate.JPG';
import droneshoot from '../Media/droneshot.JPG';
import downstairs from '../Media/downstairs.JPG';
import outdoor from '../Media/outdoor.jpg'
import videovilla from '../Media/videovilla.mp4';
import "../App.css";

const ImageGallery = () => {
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const captionStyle = {
    borderRadius: '5px',
    position: 'absolute',
    bottom: '20px',
    padding: '1rem',
    color: 'white',
    left: '0',
    right: '0',
    maxWidth: '40%',
    margin: '0 auto',
    zIndex: 2,
    fontSize: '18px',
  };

  const paraStyle = {
    fontSize: '1em',
    marginTop: '0.5rem',
  };

  return (
    <Carousel className="custom-carousel" ref={carouselRef}>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={nameplate1} alt="The Dilli House" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Your Himalayan Escape</h3>
          <p style={paraStyle}>Welcome To The Dilli House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={downstairs} alt="The Dilli House" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Unlock Your Creative Mind</h3>
          <p style={paraStyle}>Try Your Hand At Poetry Or Painting</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={droneshoot} alt="The Dilli House" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Breathtaking Views</h3>
          <p style={paraStyle}>Perfect For Your Social Profiles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={kitchen} alt="The Dilli House" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Dine At The Royal Kitchen Of Dilli House</h3>
          <p style={paraStyle}>With Ranging From Over 5 Different Cuisine Styles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={pool} alt="Evening pool view" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Evening Pool View</h3>
          <p style={paraStyle}>Experience The Serene Ambiance Of Our Pool At The Golden Hour.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="media-overlay">
          <img className="d-block w-100 carousel-img" src={outdoor} alt="Outdoor Sitting" />
        </div>
        <Carousel.Caption style={captionStyle}>
          <h3>Veranda Retreat</h3>
          <p style={paraStyle}>Perfect for BBQ, Music, And Fun Activities.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <div className="media-overlay">
          <video
            className="d-block w-100 carousel-video"
            src={videovilla}
            alt="The Dilli House Experience"
            autoPlay
            muted
            onEnded={handleVideoEnded}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageGallery;
