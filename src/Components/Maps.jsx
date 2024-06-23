import React from 'react';

const Maps = () => {
  return (
    <div className="maps-container">
      <iframe
        title="Map"
        className="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8040891273495!2d77.02936877636235!3d30.892141077909777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f874f4fe8bc3d%3A0x834979b282f28df5!2sDilli%20House%203%20bedroom%20Villa%20with%20Private%20Swimming%20pool%20%26%20Jacuzzi%20in%20Dharampur%20Kasauli!5e0!3m2!1sen!2sin!4v1718533269227!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
