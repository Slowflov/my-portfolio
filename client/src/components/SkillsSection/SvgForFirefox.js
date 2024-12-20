// SvgForFirefox.js
import React from 'react';

const SvgForFirefox = ({ showInfo, size }) => {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

  // Для Firefox
  if (!isFirefox) {
    return null; // Возвращаем null, если это не Firefox
  }

  return (
    <svg
      className={`absolute pointer-events-none ${showInfo ? "block" : "hidden"} group-hover:block`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        top: size === "small" ? "-35%" : size === "medium" ? "-40%" : size === "large" ? "-50%" : "-15%", // Смещение по вертикали для Firefox
        left: size === "small" ? "90%" : size === "medium" ? "65%" : size === "large" ? "28%" : "75%", // Смещение по горизонтали для Firefox
        transform: "translateX(-100%)",
        width: "150",
        height: "100",
      }}
    >
    </svg>
  );
};

export default SvgForFirefox;
