import React from 'react';
import { useTranslation } from 'react-i18next';

const SkillInfo = ({ onClick, showInfo }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-[200px] left-6 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl">
      <div className="text-xl xxs:text-lg font-semibold text-[#c8ced4]">{t('skills.title')}</div>
      <div className="text-xl xxs:text-lg mt-2 text-gray-400">{t('skills.programming')}</div>
      <div className="text-xl xxs:text-lg mt-1 text-gray-400 inline-block">
        <span>{t('skills.management')}</span>
        <div className="border-t-[0.5px] border-white mt-4"></div>
      </div>
    </div>
  );
};

export default SkillInfo;


  