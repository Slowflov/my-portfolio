import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navigation from './Navigation';
import Header from './Header';
import Photo from './Photo';

function AboutSection() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    // Проверяем, если это Android
    if (/Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
    // Проверяем, если это iPhone
    if (/iPhone|iPod/i.test(navigator.userAgent)) {
      setIsIphone(true);
    }
  }, []);

  return (
    <section
      className={`bg-gradient-to-b from-[#264653] to-[#04192e] flex flex-col items-center justify-start text-white px-3 py-2 relative overflow-hidden
      ${isAndroid ? 'min-h-[calc(100vh+50px)]' : ''} ${isIphone ? 'min-h-[calc(100vh+60px)]' : ''}`}
    >
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
      <Navigation />
      <Header />
      <Photo />
    </section>
  );
}

export default AboutSection;










