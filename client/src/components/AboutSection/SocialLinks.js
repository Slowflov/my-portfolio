import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';
import { SiMonster } from "react-icons/si";

function SocialLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center space-x-2 pr-[3px] md:space-x-4 xsm:space-x-2 h-14">
      {/* Desktop view */}
      <div className="hidden sm:flex space-x-2">
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

      {/* Mobile view */}
      <div className="relative flex sm:hidden">
        <input
          type="checkbox"
          id="menu-cb"
          className="hidden"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />

        {/* Бургер */}
        <label
          htmlFor="menu-cb"
          className="flex flex-col justify-center items-center w-14 h-14 cursor-pointer p-2 z-20"
        >
          <span
            className={`block w-7 h-1 bg-[#669bbc] rounded transition-all duration-500 ${
              menuOpen ? 'transform rotate-[-45deg] translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-7 h-1 bg-[#669bbc] rounded mt-2 transition-all duration-500 ${
              menuOpen ? 'transform rotate-[45deg] -translate-y-1' : ''
            }`}
          ></span>
        </label>

        {/* Выпадающее меню */}
        <div
          className={`absolute top-16 right-1 flex flex-col items-center rounded-md py-4 w-12 space-y-4 z-50 transition-all duration-500 ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 text-2xl hover:text-[#669bbc]" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 text-2xl hover:text-[#669bbc]" />
          </a>
          <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">
            <FaInfoCircle className="text-gray-300 text-2xl hover:text-[#669bbc] z-60" />
          </a>
          <a href="https://www.monster.com" target="_blank" rel="noopener noreferrer">
            <SiMonster className="text-gray-300 text-2xl hover:text-[#669bbc] z-60" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
