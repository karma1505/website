import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pool from '../Media/pool.jpg';
import videovilla from '../Media/videovilla.mp4';
import "../App.css";

function ImageGallery() {
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    carouselRef.current.next();
  };

  return (
    <Carousel className="custom-carousel" ref={carouselRef} interval={null}>
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={videovilla}
          alt="The Dilli House Experience"
          autoPlay
          loop
          muted
          onEnded={handleVideoEnded}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pool}
          alt="Spacious pool area"
        />
        <Carousel.Caption>
          <h3>Spacious Pool Area</h3>
          <p>Relax and unwind in our spacious pool area.</p>
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
          <p>Experience the serene ambiance of our pool at night.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageGallery;
