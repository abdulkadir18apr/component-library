// ComponentsCard.js

import React from 'react';

import "./css/componentCard.css"
import { Link } from 'react-router-dom';

function ComponentCard({ componentImage, componentName }) {
  return (
    <Link to={`/components/${componentName.toLowerCase()}`}>
    <div className="components-card">
      <img src={componentImage} alt={componentName} />
      <div className="component-name">{componentName}</div>
    </div></Link>
  );
}

export default ComponentCard;
