
import React from 'react';
import "../library.css";

const CardWithBadges = ({ cardContent }) => {
  const { title, description, badges ,src} = cardContent;

  return (
    <div className="cardContainer">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="cardImg">
        <img src={src} alt="cardImage"/>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <div className="badges">
          {badges.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardWithBadges;
