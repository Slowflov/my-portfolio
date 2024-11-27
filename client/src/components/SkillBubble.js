import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiSass, SiMongodb } from "react-icons/si"; // Импорт MongoDB
import { TbApi } from "react-icons/tb"; // Импорт Rest API

const SkillBubble = ({ skill, level, size, style }) => {
  const renderIcon = () => {
    switch (skill) {
      case "React":
        return <FaReact className="text-5xl text-blue-400" />;
      case "HTML":
        return <FaHtml5 className="text-5xl text-orange-500" />;
      case "CSS":
        return <FaCss3Alt className="text-5xl text-blue-600" />;
      case "JavaScript":
        return <FaJsSquare className="text-5xl text-yellow-500" />;
      case "Redux":
        return <SiRedux className="text-5xl text-purple-500" />;
      case "Node.js":
        return <FaNodeJs className="text-5xl text-green-500" />;
      case "Tailwind":
        return <SiTailwindcss className="text-5xl text-teal-400" />;
      case "Sass":
        return <SiSass className="text-5xl text-pink-400" />;
      case "MongoDB":
        return <SiMongodb className="text-5xl text-green-600" />;
      case "Rest API":
        return <TbApi className="text-5xl text-gray-500" />;
      default:
        return <FaReact className="text-5xl text-white" />;
    }
  };

  const bubbleSize =
    size === "large"
      ? "w-32 h-32"
      : size === "medium"
      ? "w-28 h-28"
      : size === "small"
      ? "w-24 h-24"
      : "w-28 h-28";

  return (
    <div
      style={style}
      className={`relative flex items-center justify-center ${bubbleSize} bg-gradient-to-br from-[#5c9ead]/75 to-[#702963]/75 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 group z-50`}
    >
      {/* Пузырь с анимацией пульсации */}
      <div className="relative animate-slow-pulse">
        {renderIcon()}
      </div>

      {/* Пунктир */}
      <svg
        className="absolute hidden group-hover:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          top: size === "small" ? "-28%" : size === "medium" ? "-31%" : size === "large" ? "-41%" : "-15%", // Смещение по вертикали
          left: size === "small" ? "96%" : size === "medium" ? "65%" : size === "large" ? "28%" : "70%", // Смещение по горизонтали
          transform: "translateX(-100%)",
          width: "150",
          height: "100",
        }}
      >
        <path
          d={
            size === "small"
              ? "M60 55 L41 45 L31 20"
              : size === "medium"
              ? "M80 65 L61 55 L51 30"
              : size === "large"
              ? "M120 85 L101 75 L91 50"
              : "M80 65 L61 55 L51 30"
          } // Путь для маленького, среднего и большого пузыря
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>

      {/* Информационный бар */}
      <div className="absolute -top-[40px] z-40 left-2/2 transform -translate-x-1/2 w-32 h-8 bg-[#04192e] bg-opacity-80 p-2 flex flex-col items-center justify-start hidden group-hover:flex clip-path-polygon-[0%_0%,_95%_0%,_100%_100%,_5%_92%]">
        {/* Текст Level сверху без отступов */}
        <div className="text-white text-[10px] font-medium text-left w-full">
          Level
        </div>

        {/* Полоса уровня с числом справа */}
        <div className="flex items-center w-full">
          {/* Полоса */}
          <div className="relative w-full h-1 bg-white rounded-lg overflow-hidden mb-5">
            <div
              className="absolute bg-purple-800 h-full"
              style={{ width: `${(level / 20) * 100}%` }}
            ></div>
          </div>

          {/* Число уровня справа */}
          <span className="text-white text-sm font-medium ml-2 mb-1 -mt-5">{level}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBubble;















