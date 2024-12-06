// src/components/AboutSection/AboutSection.js
import React from 'react';
import Navigation from './Navigation';   // Импортируем навигацию
import Header from './Header';           // Импортируем хедер
import Photo from './Photo';             // Импортируем фото

function AboutSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#264653] to-[#04192e] flex flex-col items-center justify-start text-white px-3 py-2 relative overflow-hidden">
      <Navigation />  {/* Добавляем компонент навигации */}
      <Header />      {/* Добавляем компонент хедера */}
      <Photo />       {/* Добавляем компонент фото */}
    </section>
  );
}

export default AboutSection;











