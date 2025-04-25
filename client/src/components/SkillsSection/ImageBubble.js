// src/components/ImageBubble.js
import React from 'react';

const ImageBubble = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center min-h-screen pointer-events-none object-contain max-w-[110%] sm:max-w-[90%]">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageBubble;
