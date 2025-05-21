import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ButtonText = ({ onClick }) => {
  const { t } = useTranslation();
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
    onClick();
  };

  return (
    <div className="w-full flex justify-center sm:justify-startw-full sm:w-auto sm:absolute sm:left-10 sm:top-[150px] mt-[100px] sm:mt-[0px]  sm:justify-start">
   <button 
className={`min-w-[100px] min-h-[20px] lg:min-w-[180px] lg:min-h-[40px] md:min-w-[180px] md:min-h-[40px] sm:min-w-[180px] sm:min-h-[30px] xs:min-w-[200px] xs:min-h-[50px] flex items-center justify-center text-center font-semibold text-[#313133] 
  border-none rounded-full py-2 px-4 
  transition-all duration-300 ease-in-out transform hover:translate-y-[-6px] focus:outline-none cursor-pointer`} 
        style={{
          background: isSwapped 
            ? 'linear-gradient(90deg, #003049 0%, #7209b7 100%)'
            : 'linear-gradient(90deg, #7209b7 0%, #003049 100%)',
          boxShadow: isSwapped 
            ? '14px 9px 24px rgba(19, 109, 197, .64)'
            : '14px 9px 24px rgba(79, 109, 197, .64)'  
        }}
        onClick={handleClick} 
      >
        {/* Текст для больших экранов */}
<span className="text-[#caf0f8] text-lg hidden sm:inline">
  {isSwapped ? t("buttontext.textbubble") : t("buttontext.textskills")}
</span>

        {/* Полоски для sm и меньших экранов */}
        <div className="flex flex-col space-y-1 sm:hidden">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>
  
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full border-6
        animate-ring opacity-100"></div>
    </div>
  );
};

export default ButtonText;








