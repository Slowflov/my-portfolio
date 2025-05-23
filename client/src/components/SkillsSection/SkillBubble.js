import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiSass, SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SvgForFirefox from './SvgForFirefox';
import { useTranslation } from 'react-i18next';

const SkillBubble = ({ skill, level, size, style, syntaxName, showInfo }) => {
  const { t } = useTranslation();
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
      case "Git":
        return <FaGithub className="text-5xl text-black" />;
      case "Postman":
        return <TbApi className="text-5xl text-orange-500" />;
      case "Typescript":
        return <SiTypescript className="text-5xl text-[#3178C6]" />;
      case "Nextjs":
        return <SiNextdotjs className="text-5xl text-gray-800" />;
      default:
        return <FaReact className="text-5xl text-gray-300" />;
    }
  };
  

  const bubbleSize =
  size === "large"
  ? "w-26 h-26 sm:w-28 sm:h-28 md:w-32 md:h-32"
  : size === "medium"
  ? "w-22 h-22 sm:w-24 sm:h-24 md:w-28 md:h-28"
  : "w-20 h-20 sm:w-20 sm:h-20 md:w-26 md:h-26"; // по умолчанию — small

  return (
<div
className={`absolute flex items-center justify-center ${bubbleSize} bg-gradient-to-br from-[#5c9ead]/75 to-[#702963]/75 rounded-full shadow-lg  transition-shadow duration-300 ease-in-out group hover:scale-125 xxs:hover:scale-110 hover:rotate-[10deg] hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.6)] hover:bg-gradient-to-tl hover:from-[#7bb3c9]/75 hover:to-[#a23b6c]/75 animate-float`}


  style={{
    top: style?.top || "auto",
    left: style?.left || "auto",
    right: style?.right || "auto",
    bottom: style?.bottom || "auto",
  }}
>
      {/* Пузырь с анимацией пульсации */}
      <div className="relative animate-slow-pulse">{renderIcon()}</div>

      {/* Пунктир */}
      <svg
        className={`absolute pointer-events-none ${showInfo ? "block" : "hidden"} group-hover:block`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          top: size === "small" ? "-28%" : size === "medium" ? "-31%" : size === "large" ? "-41%" : "-15%", // Смещение по вертикали
          left: size === "small" ? "96%" : size === "medium" ? "65%" : size === "large" ? "28%" : "70%", // Смещение по горизонтали
          transform: "translateX(-100%)",
          width: "150",
          height: "100",
        }}
      >
   <SvgForFirefox showInfo={showInfo} size={size} />
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
      <div
        className={`absolute -top-[65px] z-70 left-2/2 transform -translate-x-1/2 w-32 h-14 bg-[#04192e] bg-opacity-80 p-2 flex flex-col items-center justify-start ${showInfo ? "flex" : "hidden"} group-hover:flex clip-path-polygon-[0%_0%,_95%_0%,_100%_100%,_5%_92%] shadow-[0_0_60px_25px_rgba(255,255,255,0.5)]`}
      >
        {/* Текст Level сверху без отступов */}
        <div className="text-white text-[10px] font-medium text-left w-full">{t("skill.level")}</div>

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

        {/* Название синтаксиса */}
        <div className="text-white text-xs font-medium mt-[-14px]">{syntaxName}</div>
      </div>
    </div>
  );
};

export default SkillBubble;
