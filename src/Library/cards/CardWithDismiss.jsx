
import React, { useState } from 'react';
import '../library.css';

const CardWithDismiss = ({ cardContent }) => {
    const {title,description}=cardContent
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
  };

  return !dismissed ? (
    <div className="cardContainer dismissible-card">
      <div className="card-header">
        <h2>{title}</h2>
        <button className="dismiss-button" onClick={handleDismiss}>
          &#10006; {/* Cross symbol */}
        </button>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
    </div>
  ) : null;
};

export default CardWithDismiss;
