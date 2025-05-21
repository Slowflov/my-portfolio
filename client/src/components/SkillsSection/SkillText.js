import React from 'react';
import { useTranslation } from 'react-i18next';

const SkillText = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center text-white pt-2 sm:pt-40 pb-12 md:pb-0 px-4">
      {/* Заголовок */}
      <div className="relative mb-14 md:mb-44 sm:mb-32 inline-block">
  <h2 className="text-base md:text-xl sm:text-lg font-bold px-8 md:px-10 sm:px-8 py-3 md:py-5 sm:py-4 border-[3px] border-[#3c3c69] rounded-md bg-gradient-to-r from-[#1A1A40] to-[#0F0F25]">{t("skilltext.mytext")}</h2>

  {/* Левая линия */}
  <div className="absolute top-full left-4 w-[3px] h-24 bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute top-[calc(194%+1.5rem)] left-0 w-[19px] h-[3px] bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute right-full top-[calc(194%+1.5rem)] w-[110px] h-[3px] bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute top-[calc(194%+1.5rem)] right-[292px] w-[3px] h-16 bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />

  {/* Центральная линия */}
  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[3px] h-[483px] bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />

  {/* Правая линия */}
  <div className="absolute top-full right-4 w-[3px] h-24 bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute top-[calc(194%+1.5rem)] right-0 w-[19px] h-[3px] bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute left-full top-[calc(194%+1.5rem)] right-0 w-[110px] h-[3px] bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
  <div className="absolute top-[calc(194%+1.5rem)] left-[292px] w-[3px] h-16 bg-[#3c3c69] hidden lg-min:hidden sm:hidden md:block" />
</div>



      {/* Навыки */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 sm:gap-12">
        {/* Левая колонка */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[300px]">
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="JAVASCRIPT" />
          <Skill name="REACT" />
          <Skill name="NEXT JS" />
          <Skill name="SASS" />
          <Skill name="TAILWIND CSS" />
          <Skill name="REDUX" />
          <Skill name="DOM" />
          <Skill name="TYPESCRIPT" />
          <Skill name="PERFORMANCE OPTIMIZE" />
          <Skill name="VITE" />
        </div>

        {/* Правая колонка */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[300px]">
          <Skill name="NODE" />
          <Skill name="POSTMAN" />
          <Skill name="EXPRESS" />
          <Skill name="REST API" />
          <Skill name="GRAPHQL" />
          <Skill name="APOLLO SERVER" />
          <Skill name="NODEMON" />
          <Skill name="CORS" />
          <Skill name="DOTENV" />
          <Skill name="MONGODB" />
          <Skill name="MONGOOSE" />
          <Skill name="TS-NODE" />
          <Skill name="SWAGGER" />
        </div>

        {/* Нижняя строка */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-[600px] mt-8">
          <Skill name="JAVASCRIPT" />
          <Skill name="SEO" />
          <Skill name="DEVOPS" />
          <Skill name="POWERPOINT" />
          <Skill name="WORD" />
          <Skill name="GIT" />
          <Skill name="GITHUB" />
          <Skill name="LINUX" />
          <Skill name="FIGMA" />
          <Skill name="CANVA" />
          <Skill name="WINDOWS" />
          <Skill name="AGILE" />
        </div>
      </div>
    </div>
  );
};

// Маленький компонент для каждой кнопки-навыка
const Skill = ({ name }) => (
  <div className="px-4 py-2 text-sm border border-[#5B5BFF] rounded-md bg-gradient-to-r from-[#0A0F1B] to-[#12172A] hover:from-[#1A1A40] hover:to-[#0F0F25] transition">
    {name}
  </div>
);

export default SkillText;
