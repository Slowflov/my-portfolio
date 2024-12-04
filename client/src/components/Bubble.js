import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const Bubble = ({ skill }) => {
  const screenWidth = useWindowWidth();

  // Определение позиции в зависимости от ширины экрана
  const getPosition = (basePosition) => {
    if (screenWidth > 1100) {
      return basePosition.custom;
    } else if (screenWidth > 1024) {
      return basePosition.lg;
    } else if (screenWidth > 768) {
      return basePosition.md;
    } else if (screenWidth > 640) {
      return basePosition.sm;
    } else {
      return basePosition.xs;
    }
  };

  const position = getPosition(skill.position);// Лог для проверки

  return (
    <div
      className="absolute transition-all duration-300"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <div className="bubble w-20 h-20 bg-blue-500 rounded-full opacity-60"></div>
    </div>
  );
};

export default Bubble;

