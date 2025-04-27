import React from 'react';
import { Helmet } from "react-helmet-async";
import Navigation from './Navigation';
import Header from './Header';
import Photo from './Photo';

function AboutSection() {
  return (
    <section
      className="bg-[#264653] bg-[radial-gradient(ellipse_at_bottom_left,_#04192e_71%,_transparent_71%),radial-gradient(ellipse_at_bottom,_#04192e_40%,_transparent_41%),linear-gradient(to_right,_transparent_70%,_#264653_71%)] flex flex-col items-center justify-start text-white px-3 py-2 relative overflow-hidden"
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Navigation />
      <Header />
      <Photo />
    </section>
  );
}

export default AboutSection;
