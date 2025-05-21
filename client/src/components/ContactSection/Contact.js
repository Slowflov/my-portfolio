// Contact.js
import React from 'react';
import { FaLinkedin, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { SiMonster } from 'react-icons/si';
import ContactForm from './ContactForm';
import MiniMap from '../ContactSection/MiniMap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
<section id="contact" className="p-10 bg-gray-400 flex flex-col md:flex-row relative pt-[190px]">
  {/* Левый блок с текстом и иконками */}
  <div className="absolute top-2 left-[43px]
 flex-1 flex flex-col items-start space-y-4 p-6">
  {/* Заголовок с бордером снизу */}
  <div className="flex flex-col items-start">
    <h2 className="text-5xl font-semibold">
      <span className="text-customWhiteblue">{t('contact.titlePart1')}</span>
      <span className="text-[#04192e] ml-2">{t('contact.titlePart2')}</span>
    </h2>
  <div className="w-40 border-t-2 border-white mt-2 mx-auto"></div> {/* Бордер снизу */}
</div>



  {/* Ссылки с иконками под бордером и на всю ширину */}
  <div className="flex justify-evenly w-full mt-6 space-x-9">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-white text-xl hover:text-blue-100" />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-white text-xl hover:text-blue-100" />
    </a>
    <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">
      <FaInfoCircle className="text-white text-xl hover:text-blue-100" />
    </a>
    <a href="https://www.monster.com" target="_blank" rel="noopener noreferrer">
      <SiMonster className="text-white text-xl hover:text-blue-100" />
    </a>
  </div>
</div>


  {/* Контент с формой */}
  <div className="flex-1 flex flex-col justify-center items-start space-y-4 p-6">
        <h2 className="text-2xl text-customWhiteblue font-semibold">
      {t("contactbtn.leave")}
    </h2>
    <ContactForm />  {/* Вставляем компонент формы */}
  </div>

  <div className="w-full md:w-1/3 flex justify-end p-4">
    <MiniMap />  {/* Компонент карты */}
  </div>
</section>


  );
};

export default Contact;




