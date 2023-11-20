
import React from 'react';

const Heading = ({ size, color, text }) => {
  const sizeMapping = {
    sm: '18px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  };

  const headingStyle = {
    fontSize: sizeMapping[size] || size, 
    color: color,
  };

  return <h1 style={headingStyle}>{text}</h1>;
};

export default Heading;
