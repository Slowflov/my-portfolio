// src/components/AboutSection/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col items-start justify-start xxl:items-center xxl:justify-center w-full px-6 sm:px-12 mt-48 xxl:mt-20 relative">
      <div className="bg-[#264653] px-5 py-3 rounded-lg text-left mb-6 max-w-full sm:max-w-screen-sm md:max-w-screen-md">
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-white overflow-hidden">
          {t("about.title")}
        </h1>
      </div>
      <div className="flex flex-col items-start text-left space-y-4 xxl:items-center xxl:text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Rouslan Ouvarov</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl">{t("about.subtitle")}</h3>
        <h4 className="text-2xl sm:text-2xl font-medium xxl:text-center">{t("about.sectionTitle")}</h4>
        <p className="max-w-md sm:text-2xl text-xl text-gray-300">
          {t("about.description")}
        </p>
      </div>
    </header>
  );
}

export default Header;
