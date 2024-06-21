import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pool from '../Media/pool.jpg';
import nameplate1 from '../Media/nameplate.JPG';
import droneshoot from '../Media/droneshot.JPG';
import downstairs from '../Media/downstairs.JPG';
import videovilla from '../Media/videovilla.mp4';
import kitchen from '../Media/kitchen.JPG';
import "../App.css";

function ImageGallery() {
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Carousel className="custom-carousel" ref={carouselRef} interval={2000}>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={videovilla}
          alt="The Dilli House Experience"
          autoPlay
          muted
          onEnded={handleVideoEnded}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nameplate1}
          alt="The Dilli House"
        />
        <Carousel.Caption>
          <h3>Your Himalayan Escape</h3>
          <p className='carouselpara'>Welcome To The Dilli House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={downstairs}
          alt="The Dilli House"
        />
        <Carousel.Caption>
          <h3>Unlock Your Creative Mind</h3>
          <p className='carouselpara'>Try Your Hand At Poetry Or Painting</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={droneshoot}
          alt="The Dilli House"
        />
        <Carousel.Caption>
          <h3>Breathtaking Views</h3>
          <p className='carouselpara'>Perfect For Your Socials</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kitchen}
          alt="The Dilli House"
        />
        <Carousel.Caption>
          <h3>Dine At The Royal Kitchen Of Dilli House</h3>
          <p className='carouselpara'>With Ranging From Over 7 Different Cuisine Styles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pool}
          alt="Evening pool view"
        />
        <Carousel.Caption>
          <h3>Evening Pool View</h3>
          <p className='carouselpara'>Experience the serene ambiance of our pool at the golden hour.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageGallery;
