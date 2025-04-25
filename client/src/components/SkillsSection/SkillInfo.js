import React from 'react';


const SkillInfo = ({ onClick, showInfo }) => (
  <div className="absolute top-[200px] left-6 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl">
    <div className="text-xl xxs:text-lg font-semibold text-[#c8ced4]">Skills &lt;/</div>
    <div className="text-xl xxs:text-lg mt-2 text-gray-400">Programming Languages /</div>
    <div className="text-xl xxs:text-lg mt-1 text-gray-400 inline-block">
      <span>Management/Hobbies</span>
      <div className="border-t-[0.5px] border-white mt-4"></div>
    </div>
  </div>
);

export default SkillInfo;

  