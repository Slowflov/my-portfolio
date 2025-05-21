import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import About from './components/AboutSection/About';
import Skills from './components/SkillsSection/Skills';
import Projects from './components/ProjectSection/Projects';
import Contact from './components/ContactSection/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default App;
