// src/components/AboutSection/Header.js
import React from 'react';

function Header() {
  return (
<header className="flex flex-col items-start justify-start xxl:items-center xxl:justify-center w-full px-6 sm:px-12 mt-48 xxl:mt-20 relative">
  <div className="bg-[#264653] px-5 py-3 rounded-lg text-left mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md">
    <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-white overflow-hidden">
      Welcome To My Portfolio
    </h1>
  </div>
  <div className="flex flex-col items-start text-left space-y-4 xxl:items-center xxl:text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Rouslan Ouvarov</h2>
    <h3 className="text-2xl sm:text-3xl md:text-4xl">I AM A WEB DEVELOPER</h3>
    <h4 className="text-2xl sm:text-2xl font-medium xxl:text-center">About</h4>
    <p className="max-w-md sm:text-2xl text-xl text-gray-300">
    I’m a Fullstack developer passionate about creating modern, responsive web applications. I focus on both front-end and back-end technologies to deliver seamless, user-friendly digital experiences that balance functionality and design.
    </p>
  </div>
</header>

  );
}

export default Header;
