// ImageWithText.js
import React from "react";

const ImageWithText = ({ imageSrc, text }) => {
  return (
    <div className="relative w-full">
      {/* Image */}
      <img src={imageSrc} alt={text} className="w-full h-auto object-cover" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-primary_green bg-opacity-20 text-white text-5xl font-cormorant text-center font-bold py-24 px-4 w-full">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
