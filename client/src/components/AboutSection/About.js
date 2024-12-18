// src/components/AboutSection/AboutSection.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';   // Импортируем навигацию
import Header from './Header';           // Импортируем хедер
import Photo from './Photo';             // Импортируем фото

function AboutSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#264653] to-[#04192e] flex flex-col items-center justify-start text-white px-3 py-2 relative overflow-hidden">
      <Helmet>
        <title>About Me - My Portfolio</title> 
        <meta name="description" content="Learn more about my journey as a developer and my skills." />
        <meta name="keywords" content="about me, developer, web development, portfolio" />
        <meta name="author" content="Rouslan" />
        <meta property="og:title" content="About Me - My Portfolio" />
        <meta property="og:description" content="Learn more about my journey and projects as a developer." />
        <meta property="og:image" content="URL_to_your_image.jpg" />
        <meta property="og:url" content="https://my-portfolio-gm61.onrender.com/" />
        <link rel="canonical" href="https://my-portfolio-gm61.onrender.com/#about" />
      </Helmet>
      <Navigation />  {/* Добавляем компонент навигации */}
      <Header />      {/* Добавляем компонент хедера */}
      <Photo />       {/* Добавляем компонент фото */}
    </section>
  );
}

export default AboutSection;











