// Text.js
import React from 'react';

const Text = ({ size, weight, color, font, text }) => {
  const textStyle = {
    fontSize: size,
    fontWeight: weight,
    color: color,
    fontFamily: font,
  };

  return <p style={textStyle}>{text}</p>;
};

export default Text;
