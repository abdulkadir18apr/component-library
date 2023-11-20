// ResponsiveImage.js
import React from 'react';

const ResponsiveImage = ({ src, alt, width, height,rounded=false }) => {
  const imageStyle = {
    width: '100%',
    height: rounded?width:'auto',
    maxWidth: width || '100%',
    maxHeight: height || '100%',
    borderRadius:rounded?"50%":""
  };

  return <img src={src} alt={alt} style={imageStyle} />;
};

export default ResponsiveImage;
