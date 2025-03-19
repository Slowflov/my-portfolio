import React from 'react';
import Photorest from "../../assets/ohmyfood.png";
import Photoroom from "../../assets/room.jpg";
import Photobank from "../../assets/Bank.png";
import PhotoSophie from "../../assets/Sophie.png";
import Agence from "../../assets/agence.png";
import ProjectCard from './ProjectCard';
import ConstStore from '../../assets/Hardware_store.png'

function Projects() {
  return (
    <section id="projects" className="p-10 bg-gradient-to-r from-[#264653] to-[#14213d] flex flex-col items-end min-h-screen relative">
      
      {/* Текст с бордером */}
      <div className="absolute top-[200px] left-5 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl xsm:top-[80px]">
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
        className="mr-[30px] md:mr-[70px] xsm:mr-[30px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Третий блок */}
      <ProjectCard
        title="Banking application"
        image={Photobank}
        link="https://bankking.netlify.app/"
        description="Screenshot of a banking application interface"
        className="mr-[70px] md:mr-[140px] xsm:mr-[50px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />
       {/* Четвертый блок */}
       <ProjectCard
        title="Architecxte d’intérieur"
        image={PhotoSophie}
        link="https://slowflov.github.io/Portfolio-architecte-sophie-bluel/index.html"
        description="Screenshot of a banking application interface"
        className="mr-[110px] md:mr-[200px] xsm:mr-[70px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />
             {/* пятый блок */}
             <ProjectCard
        title="Agence d'événementiel"
        image={Agence}
        link="https://events72.netlify.app/"
        description="Screenshot of a banking application interface"
        className="mr-[140px] md:mr-[260px] xsm:mr-[90px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* шестой блок */}
      <ProjectCard
  title="Construction store"
  image={ConstStore}
  link="#"
  description="construction store, online store for sales in Ukraine"
  className="mr-[170px] md:mr-[320px] xsm:mr-[110px] mt-[-125px]"
  style={{
    boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
  }}
/>
    </section>
  );
}

export default Projects;


























