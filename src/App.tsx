import React from 'react';

import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Spinner from './components/Spinner';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Spinner />
    </>
  );
};

export default App;
