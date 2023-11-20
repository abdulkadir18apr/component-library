// CardWithTextOverlay.js
import React, { useState } from 'react';
import '../library.css';

const CardWithTextOverlay = ({cardContent}) => {
    const { src, title, description }=cardContent


  return (
    <div className="cardContainer dismissible-card">
      <div className="image-container">
        <img src={src} alt="Card Background" />
        <div className="overlay">
          <div className="card-header">
            <h2>{title}</h2>
            

          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default CardWithTextOverlay;
