import React from 'react';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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


