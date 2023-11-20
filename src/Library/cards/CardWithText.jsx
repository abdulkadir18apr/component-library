
import React, { useState } from 'react';
import '../library.css';

const CardWithText = ({ cardContent,shadow=false }) => {
    const {title,description}=cardContent


  return  (
    <div className="cardContainer dismissible-card" style={{boxShadow:shadow?"2px 2px 1px 1px gray":""}}>
      <div className="card-header">
        <h2>{title}</h2>
        
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
    </div>
  ) ;
};

export default CardWithText;
