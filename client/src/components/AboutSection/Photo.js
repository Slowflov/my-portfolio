// src/components/AboutSection/Photo.js
import React from 'react';
import Myphoto from '../../assets/Myphot.jpg';

function Photo() {
  return (
    <>
      {/* Фото с рамкой */}
      <div className="absolute top-0 right-0 w-full h-screen z-0 flex justify-end items-center mr-16 xxl:hidden">
        <img
          src={Myphoto}
          alt="A developer with an idea"
          className="w-[400px] h-[400px] shadow-lg sm:w-[350px] sm:h-[350px] md:w-[340px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
            objectFit: "cover",
            objectPosition: "center",
            transform: "scale(1.2)",
            transformOrigin: "center",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Адаптивное изменение позиции фото при ширине экрана <= 900px */}
      <div className="absolute top-auto bottom-0 left-1/2 mb-14 transform -translate-x-1/2 w-auto h-auto z-0 flex justify-center items-end hidden xxl:block">
        <img
          src={Myphoto}
          alt="A developer with an idea"
          className="w-[350px] h-[350px]"
          style={{
            clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 9% 89%)",
            objectFit: "cover",
            objectPosition: "-210px -10px",
            pointerEvents: "none"
          }}
        />
      </div>
    </>
  );
}

export default Photo;
