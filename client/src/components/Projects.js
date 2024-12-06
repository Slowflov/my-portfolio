import React from 'react';
import Photorest from "../assets/ohmyfood.png";
import Photoroom from "../assets/room.jpg";
import Photobank from "../assets/Bank.png";
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="p-10 bg-gradient-to-r from-[#264653] to-[#14213d] flex flex-col items-end min-h-screen relative">
      
      {/* Текст с бордером */}
      <div className="absolute top-[200px] left-2 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl">
        <div>
          <span className="text-[#04192e]">Projects </span>
          <span className="text-[#04192e]">&gt; </span>
        </div>
        <div>
          <span className="text-gray-400">Web Development / </span>
        </div>
        <div>
          <span className="text-gray-400">Mobile Apps | </span>
        </div>
        <div className="inline-block border-b border-white mt-1 pb-[7px]">
          <span className="text-gray-400">Open Source Contributions </span>
          <span className="text-gray-400 inline">#</span>
        </div>
      </div>

      {/* Первый блок */}
      <ProjectCard
        title="Restaurant 'ohmyfood'"
        image={Photorest}
        link="https://slowflov.github.io/project4/index.html#"
        description="Restaurant menu selection and order process"
        className="mt-[140px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Второй блок */}
      <ProjectCard
        title="Real estate rental"
        image={Photoroom}
        link="https://slowflov.github.io/project7/#/"
        description="Real estate and hotel properties showcase"
        className="mr-[60px] md:mr-[120px] xsm:mr-[40px] mt-[-50px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Третий блок */}
      <ProjectCard
        title="Banking application"
        image={Photobank}
        link="https://slowflov.github.io/project4/index.html#"
        description="Screenshot of a banking application interface"
        className="mr-[130px] md:mr-[240px] xsm:mr-[110px] mt-[-50px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Четвертый блок */}
      <a
        href="https://slowflov.github.io/project4/index.html#"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-7/12 max-w-4xl bg-black overflow-hidden cursor-pointer relative hover:scale-105 hover:z-10 transition-all duration-300 mr-[170px] md:mr-[320px] xsm:mr-[150px] mt-[-50px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className="w-full bg-[#04192e] h-8 flex items-center justify-between px-4 relative">
          <h2 className="text-white text-xs sm:text-lg font-semibold">Manicure master's</h2>
          <div className="absolute right-2 sm:right-4 flex justify-center items-center w-6 h-6 border-2 border-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="17" y1="7" x2="7" y2="17" stroke="currentColor" strokeWidth="2" />
              <line x1="7" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="2" />
              <line x1="7" y1="17" x2="7" y2="9" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="w-full h-60 bg-black flex items-center justify-center">
          <span className="text-white text-2xl font-bold">in development</span>
        </div>
      </a>
    </section>
  );
}

export default Projects;












