import React from 'react';

const ButtonBubble = ({ onClick, showInfo }) => {

  return (
    <button
      className={`absolute top-[206px] left-48 xxs:right-12 p-1 rounded-full flex items-center justify-center transition-colors duration-300 ${
        showInfo ? 'bg-[#5a189a]' : 'bg-[#8d99ae]'
      }`}
      onClick={onClick}
      style={{ width: '41px', height: '20px', zIndex: 100 }} // Временно увеличьте z-index
      aria-label="Toggle information panel for skill syntax"
    >
      <div
        className={`w-5 h-5 rounded-full transition-transform duration-300 ${
          showInfo
            ? 'bg-[#8d99ae] transform translate-x-[12px]'
            : 'bg-[#5a189a] transform translate-x-[-10.8px]'
        }`}
      ></div>
    </button>
  );
};

export default ButtonBubble;

