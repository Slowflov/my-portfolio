import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/pngwin.png';
import MiniMap from './MiniMap';  // Импорт компонента карты

function About() {
  const [showMainText, setShowMainText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 2800);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen bg-gradient-to-b from-[#264653] to-[#04192e] flex flex-col items-center justify-center text-white px-3 py-2">
      {/* Навигационная панель */}
      <div className="w-full flex justify-between items-center border-b border-white/50 pb-4">
        {/* Слева: Имя */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-3" />
          <div className="text-sm xsm:text-[12px] sm:text-lg md:text-xl font-bold text-white">
            Rouslan Ouvarov
          </div>
        </div>

        {/* Центр: Навигационная панель */}
        <div className="relative flex text-sm xsm:text-[12px] sm:text-[18px] md:text-[20px] space-x-4 sm:space-x-5 md:space-x-14 text-white">
          <a href="#about" className="hover:text-blue-400">About Me</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
        </div>

        {/* Справа: Иконки */}
        <div className="flex space-x-2 space-x-3 md:space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-400" />
          </a>
        </div>
      </div>

      {/* Приветствие */}
      <div className="flex flex-col items-center justify-center w-full h-full mt-10">
        {/* Полупрозрачный бар */}
        <div className="bg-white/80 px-5 py-3 rounded-lg text-center mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md mx-auto">
          <h1 className="text-2xl xsm:text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 animate-typing overflow-hidden">
            Welcome To My Portfolio
          </h1>
        </div>

        {/* Основной текст: показывается после задержки */}
        {showMainText && (
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl xsm:text-2xl sm:text-3xl md:text-4xl font-bold">
              Rouslan Ouvarov
            </h2>
            <h3 className="text-3xl xsm:text-2xl sm:text-3xl md:text-4xl">I AM A WEB DEVELOPER</h3>
            <h4 className="text-3xl xsm:text-2xl font-medium">About</h4>
            <p className="max-w-2xl xsm:text-2xl mx-auto text-3xl sm:text-3xl md:text-4xl text-gray-300">
            I am passionate about web development, continuously working on improving my skills. I specialize in building modern, responsive, and user-friendly web applications. My goal is to create seamless digital experiences that meet both functional and aesthetic needs.
            </p>
          </div>
        )}
      </div>

      {/* Карта добавлена сюда, с правой стороны */}
      <div className="w-full flex justify-end p-4">
        <MiniMap />  {/* Компонент карты */}
      </div>
    </section>
  );
}

export default About;








