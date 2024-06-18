// TravelConvenienceCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TravelConvenienceCard = ({ icon, title, points }) => {
  return (
    <div className="travel-card">
      <FontAwesomeIcon icon={icon} className="travel-card-icon" />
      <h3>{title}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default TravelConvenienceCard;
