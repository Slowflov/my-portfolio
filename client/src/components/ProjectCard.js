import React from "react";

function ProjectCard({ title, image, link, description, className, style }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-7/12 max-w-4xl bg-black overflow-hidden cursor-pointer relative hover:scale-105 hover:z-10 transition-all duration-300  ${className}`}
      style={style}
    >
      {/* Верхний бордер с названием */}
      <div className="w-full bg-[#04192e] h-8 flex items-center justify-between px-4 relative">
        <h2 className="text-white text-xs sm:text-lg font-semibold">{title}</h2>
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

      {/* Изображение проекта */}
      <div
        className="w-full h-60 bg-repeat hover:animate-scroll-up"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: '0px -200px'
        }}
        aria-label={description}
      >
      </div>
    </a>
  );
}

export default ProjectCard;

