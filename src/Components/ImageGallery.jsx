import React from 'react';
import "../App.css";

const images = [

];

const ImageGallery = () => {
  return (
    <section className="image-gallery">
      <h2>Our Rooms</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
