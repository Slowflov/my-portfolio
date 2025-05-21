import React from 'react';
import Photorest from "../../assets/ohmyfood.png";
import Photoroom from "../../assets/room.jpg";
import Photobank from "../../assets/Bank.png";
import PhotoSophie from "../../assets/Sophie.png";
import Agence from "../../assets/agence.png";
import ProjectCard from './ProjectCard';
import ConstStore from '../../assets/Hardware_store.png';
import Projectsinfo from './Projectsinfo';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="p-10 bg-gradient-to-r from-[#264653] to-[#14213d] flex flex-col items-end min-h-screen relative">

      {/* Вызов второго компонента */}
      <Projectsinfo />

      {/* Первый блок */}
      <ProjectCard
        title={t("Card.title1")}
        image={Photorest}
        link="https://slowflov.github.io/project4/index.html#"
        description="Restaurant menu selection and order process"
        className="mt-[140px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Второй блок */}
      <ProjectCard
        title={t("Card.title2")}
        image={Photoroom}
        link="https://slowflov.github.io/project7/#/"
        description="Real estate and hotel properties showcase"
        className="mr-[30px] md:mr-[70px] xsm:mr-[30px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Третий блок */}
      <ProjectCard
        title={t("Card.title3")}
        image={Photobank}
        link="https://bankking.netlify.app/"
        description="Screenshot of a banking application interface"
        className="mr-[70px] md:mr-[140px] xsm:mr-[50px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Четвертый блок */}
      <ProjectCard
        title={t("Card.title4")}
        image={PhotoSophie}
        link="https://slowflov.github.io/Portfolio-architecte-sophie-bluel/index.html"
        description="Screenshot of a banking application interface"
        className="mr-[110px] md:mr-[200px] xsm:mr-[70px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Пятый блок */}
      <ProjectCard
        title={t("Card.title5")}
        image={Agence}
        link="https://events72.netlify.app/"
        description="Screenshot of a banking application interface"
        className="mr-[140px] md:mr-[260px] xsm:mr-[90px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Шестой блок */}
      <ProjectCard
        title={t("Card.title6")}
        image={ConstStore}
        link="https://np-store.netlify.app/"
        description="construction store, online store for sales in Ukraine"
        className="mr-[170px] md:mr-[320px] xsm:mr-[110px] mt-[-125px]"
        style={{
          boxShadow: '12px -11px 15px 2px rgba(0, 0, 0, 0.7)',
        }}
      />
    </section>
  );
}

export default Projects;
