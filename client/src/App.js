import React from 'react';
import './index.css';
import About from './components/AboutSection/About';
import Skills from './components/SkillsSection/Skills';
import Projects from './components/ProjectSection/Projects';
import Contact from './components/ContactSection/Contact';

function App() {
  return (
    <div>
      <About />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;


