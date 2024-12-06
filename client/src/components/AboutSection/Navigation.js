// src/components/AboutSection/Navigation.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/pngwin.png';

function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-white/50 pb-4 bg-gradient-to-b from-[#264653] to-[#04192e] z-10">
      {/* Слева: Имя */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 pl-[2px]" />
        <div className="text-xs sm:text-sm md:text-base font-bold text-white">
          Rouslan Ouvarov
        </div>
      </div>
  
      {/* Центр: Навигационная панель */}
      <div className="relative flex text-xs sm:text-lg md:text-xl space-x-8 md:space-x-16 xsm:space-x-3 pr-2">
        <a href="#about" className="hover:text-blue-100">About Me</a>
        <a href="#skills" className="hover:text-blue-100">Skills</a>
        <a href="#projects" className="hover:text-blue-100">Projects</a>
        <a href="#contact" className="hover:text-blue-100">Contact</a>
      </div>
  
      {/* Справа: Иконки */}
      <div className="flex space-x-2 pr-[3px] md:space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-100" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-100" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
