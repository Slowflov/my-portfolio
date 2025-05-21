import React from 'react';
import { useTranslation } from 'react-i18next';

function Projectsinfo() {
  const { t } = useTranslation();

  return (
    <div className="absolute top-[200px] left-5 sm:left-10 text-white font-semibold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-xl xsm:top-[80px]">
      <div>
        <span className="text-[#04192e]">{t("projinfo.projects")} </span>
        <span className="text-[#04192e]">&gt; </span>
      </div>
      <div>
        <span className="text-gray-400">{t("projinfo.webDevelopment")} / </span>
      </div>
      <div>
        <span className="text-gray-400">{t("projinfo.mobileApps")} | </span>
      </div>
      <div className="inline-block border-b border-white mt-1 pb-[7px]">
        <span className="text-gray-400">{t("projinfo.openSourceContrib")} </span>
        <span className="text-gray-400 inline">#</span>
      </div>
    </div>
  );
}

export default Projectsinfo;
