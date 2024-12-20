import React from 'react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';
import { SiMonster } from "react-icons/si";

import logo from '../../assets/pngwin.webp';

function Navigation() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-white/50 pb-4 bg-gradient-to-b from-[#264653] to-[#04192e] z-10">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 pl-[2px]" />
        <div className="text-xs sm:text-sm md:text-base font-bold text-white">
          Rouslan Ouvarov
        </div>
      </div>
  
      <div className="relative flex text-xs sm:text-lg md:text-xl space-x-3 md:space-x-8 lg:space-x-16 xsm:space-x-1 pr-1">
  <a
    href="#about"
    className="hover:text-blue-100 xxs:flex xxs:flex-col xxs:items-center"
  >
    <span className="hidden xxs:inline">About</span>
    <span className="hidden xxs:inline">Me</span>
    <span className="inline xxs:hidden">About Me</span>
  </a>
  <a href="#skills" className="hover:text-blue-100">Skills</a>
  <a href="#projects" className="hover:text-blue-100">Projects</a>
  <a href="#contact" className="hover:text-blue-100">Contact</a>
</div>

      <div className="flex space-x-2 pr-[3px] md:space-x-4 xsm:space-x-2">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-100" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-100" />
        </a>
        <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">
          <FaInfoCircle className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[27px] hover:text-blue-100" />
        </a>
        <a href="https://www.monster.com" target="_blank" rel="noopener noreferrer">
          <SiMonster className="text-[18px] xsm:text-[17px] sm:text-[23px] md:text-[24px] hover:text-blue-100" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;

