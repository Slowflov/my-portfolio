// src/components/AboutSection/Photo.js
import React from 'react';
import Myphoto from '../../assets/Myphot.webp';

function Photo() {
  return (
    <>
<div className="relative right-14 w-full z-0 flex justify-end items-center xxl:hidden">
  <img
    src={Myphoto}
    alt="Sitting next to the Eiffel Tower in Paris, enjoying a moment of serenity in one of the most iconic cities in the world."
    className="w-[400px] h-[400px] shadow-lg sm:w-[350px] sm:h-[350px] md:w-[370px] md:h-[400px] lg:w-[400px] lg:h-[400px] transform translate-y-[-100%]"
    style={{
      clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
      objectFit: "cover",
      objectPosition: "center",
      transformOrigin: "center",
      pointerEvents: "none"
    }}
  />
</div>

      <div className="relative mb-14 ml-6 w-[350px] h-[350px] mt-10 z-0 justify-center items-end hidden xxl:block">
        <img
          srcSet={`${Myphoto}?w=300 300w, ${Myphoto}?w=600 600w, ${Myphoto}?w=900 900w`} 
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
          src={Myphoto}
          alt="Sitting next to the Eiffel Tower in Paris, enjoying a moment of serenity in one of the most iconic cities in the world."
          className="w-full h-full object-cover object-center pointer-events-none"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)"
          }}
        />
      </div>
    </>
  );
}

export default Photo;

