import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/pngwin.png';

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
      <div className="w-full flex justify-between items-center border-b border-white/50 pb-2">
        {/* Слева: Имя */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-5 h-5 mr-3" />
          <div className="text-sm font-bold text-white">Rouslan Ouvarov</div>
        </div>

        {/* Центр: Навигационная панель */}
        <div className="relative flex text-sm space-x-12 text-white">
          <a href="#about" className="hover:text-blue-400">About Me</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
        </div>

        {/* Справа: Иконки */}
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-blue-400" />
          </a>
        </div>
      </div>

      {/* Приветствие */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Полупрозрачный бар */}
        <div className="bg-white/80 px-5 py-3 rounded-lg text-center mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md mx-auto">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 animate-typing overflow-hidden">
    Welcome To My Portfolio
  </h1>
</div>


      

        {/* Основной текст: показывается после задержки */}
        {showMainText && (
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold">Rouslan Ouvarov</h2>
            <h3 className="text-xl">I AM A WEB DEVELOPER</h3>
            <h4 className="text-lg font-medium">About</h4>
            <p className="max-w-md mx-auto text-sm text-gray-300">
              I completed a course at OpenClassroom and continue to develop myself in web development.
              I am passionate about creating modern, responsive, and user-friendly web applications.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;







