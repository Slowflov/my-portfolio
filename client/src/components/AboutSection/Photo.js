// src/components/AboutSection/Photo.js
import React from 'react';
import Myphoto from '../../assets/Myphot.webp';

function Photo() {
  return (
    <>
<div className="relative top-[-800px] right-14 w-full h-screen z-0 flex justify-end items-center mb-[400px] xxl:hidden">
  <img
    src={Myphoto}
    alt="Sitting next to the Eiffel Tower in Paris, enjoying a moment of serenity in one of the most iconic cities in the world."
    className="w-[400px] h-[400px] shadow-lg sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
    style={{
      clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
      objectFit: "cover",
      objectPosition: "center",
      transform: "scale(1.2)",
      transformOrigin: "center",
      pointerEvents: "none"
    }}
    loading="lazy"
  />
</div>

      <div className="relative mb-14 ml-6 w-[350px] h-[350px] mt-10 z-0 flex justify-center items-end hidden xxl:block">
        <img
          srcSet={`${Myphoto}?w=300 300w, ${Myphoto}?w=600 600w, ${Myphoto}?w=900 900w`} 
          sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 900px"
          src={Myphoto}
          alt="Sitting next to the Eiffel Tower in Paris, enjoying a moment of serenity in one of the most iconic cities in the world."
          className="w-full h-full object-cover object-center pointer-events-none"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)"
          }}
          loading="lazy"
        />
      </div>
    </>
  );
}

export default Photo;

