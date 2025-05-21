import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/pngwin.webp';
import SocialLinks from './SocialLinks';

function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex justify-between items-center border-b border-white/50 pb-4 bg-gradient-to-b from-[#264653] to-[#04192e] z-10">
      <div className="flex items-center pr-8 md:pr-11 sm:pr-1 space-x-2 sm:space-x-3">
        <img src={logo} alt="Logo" className="w-6 h-6 sm:w-10 sm:h-10 pl-[2px] xsm:hidden" />
        <div className="text-xs sm:text-sm md:text-base font-bold text-white">
          Rouslan Ouvarov
        </div>
      </div>

      <div className="relative flex text-xs sm:text-lg md:text-xl space-x-7 md:space-x-8 lg:space-x-16 xsm:space-x-4 pr-1">
<a href="#about" className="group relative xxs:flex xxs:flex-col xxs:items-center">
  <span className="hidden xxs:inline text-center">{`${t('about.sectionTitle')} Me`}</span>
  <span className="inline xxs:hidden">{`${t('about.sectionTitle')} Me`}</span>
  <span className="pointer-events-none absolute top-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
  <span className="pointer-events-none absolute bottom-0 right-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
</a>


        <a href="#skills" className="relative group ">
          {t('nav.skills')}
          <span className="pointer-events-none absolute top-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
          <span className="pointer-events-none absolute bottom-0 xss:bottom-3.5 right-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="#projects" className="relative group">
          {t('nav.projects')}
          <span className="pointer-events-none absolute top-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
          <span className="pointer-events-none absolute bottom-0 xss:bottom-3.5 right-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
        </a>

        <a href="#contact" className="relative group">
          {t('nav.contact')}
          <span className="pointer-events-none absolute top-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
          <span className="pointer-events-none absolute bottom-0 xss:bottom-3.5 right-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      <SocialLinks />
    </nav>
  );
}

export default Navigation;
