// src/components/AboutSection/Header.js
import React from 'react';

function Header() {
  return (
    <header className="flex flex-col items-start justify-start xxl:items-center xxl:justify-center w-full ml-4 mt-48 xxl:mt-20 relative z-50">
      <div className="bg-white/80 px-5 py-3 rounded-lg text-left mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 overflow-hidden">
          Welcome To My Portfolio
        </h1>
      </div>
      <div className="flex flex-col items-start text-left space-y-4 animate-fade-in xxl:items-center xxl:text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Rouslan Ouvarov
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl ">I AM A WEB DEVELOPER</h3>
        <h4 className="text-2xl sm:text-2xl font-medium xxl:text-center">About</h4>
        <p className="max-w-md sm:text-2xl text-2xl text-gray-300">
          I am passionate about web development, continuously working on improving my skills. I specialize in building modern, responsive, and user-friendly web applications. My goal is to create seamless digital experiences that meet both functional and aesthetic needs.
        </p>
      </div>
    </header>
  );
}

export default Header;
