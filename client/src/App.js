import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import About from './components/AboutSection/About';
import Skills from './components/SkillsSection/Skills';
import Projects from './components/ProjectSection/Projects';
import Contact from './components/ContactSection/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <div>
        <About />
        <main>
          <Skills />
          <Projects />
          <Contact />
          <ScrollToTop />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;



