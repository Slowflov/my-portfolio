import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/pngwin.png';
import Myphoto from "../assets/Myphot.jpg";

function About() {
  const [showMainText, setShowMainText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 2800);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return (
<section className="h-screen bg-gradient-to-b from-[#264653] to-[#04192e] flex flex-col items-center justify-start text-white px-3 py-2 relative overflow-hidden">
  {/* Навигационная панель */}
  <div className="w-full flex justify-between items-center border-b border-white/50 pb-4 bg-gradient-to-b from-[#264653] to-[#04192e] z-10">
    {/* Слева: Имя */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 pl-[2px]" />
      <div className="text-xs sm:text-sm md:text-base font-bold text-white">
        Rouslan Ouvarov
      </div>
    </div>

    {/* Центр: Навигационная панель */}
    <div className="relative flex text-xs sm:text-lg md:text-xl space-x-8 md:space-x-16 xsm:space-x-3 pr-2">
      <a href="#about" className="hover:text-blue-400">About Me</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>

    {/* Справа: Иконки */}
    <div className="flex space-x-2 pr-[3px] md:space-x-4">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-400" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-400" />
      </a>
    </div>
  </div>

  {/* Приветствие */}
  <div className="flex flex-col items-start justify-start xxl:items-center xxl:justify-center w-full ml-3 mt-40 xxl:mt-20 relative z-50">
  {/* Полупрозрачный бар */}
  <div className="bg-white/80 px-5 py-3 rounded-lg text-left mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md">
    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 animate-typing overflow-hidden">
      Welcome To My Portfolio
    </h1>
  </div>

  {/* Основной текст: показывается после задержки */}
  {showMainText && (
    <div className="flex flex-col items-start text-left space-y-4 animate-fade-in xxl:items-center xxl:text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Rouslan Ouvarov
      </h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl ">I AM A WEB DEVELOPER</h3>
      <h4 className="text-2xl sm:text-2xl font-medium xxl:text-center">About</h4>
      <p className="max-w-md sm:text-2xl text-2xl md:text-3xl text-gray-300">
        I am passionate about web development, continuously working on improving my skills. I specialize in building modern, responsive, and user-friendly web applications. My goal is to create seamless digital experiences that meet both functional and aesthetic needs.
      </p>
    </div>
  )}
</div>


  {/* Фото с рамкой и сдвигом */}
  <div className="absolute top-0 right-0 w-full h-screen z-0 flex justify-end items-center mr-16 xxl:hidden">
    <img
      src={Myphoto}
      alt="A developer with an idea"
      className="w-[400px] h-[400px] shadow-lg sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
      style={{
        clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
        objectFit: "cover",
        objectPosition: "center",
        transform: "scale(1.2)",
        transformOrigin: "center",
        pointerEvents: "none"
      }}
    />
  </div>

  {/* Адаптивное изменение позиции фото при ширине экрана <= 900px */}
  <div className="absolute top-auto bottom-0 left-1/2 mb-4 transform -translate-x-1/2 w-auto h-auto z-0 flex justify-center items-end hidden xxl:block">
    <img
      src={Myphoto}
      alt="A developer with an idea"
      className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[270px]"
      style={{
        clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
        objectFit: "cover",
        objectPosition: "-170px -10px",
        pointerEvents: "none"
      }}
    />
  </div>
</section>


  
  );
}

export default About;









