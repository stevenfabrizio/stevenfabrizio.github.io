import React from 'react';

import Landing from './components/landing/Landing';
import Spinner from './components/spinner/Spinner';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Nav from './components/nav/Nav';

//might as well lazy load unimportant static stuff
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Spinner />
      <About />
      <Projects />
      <Skills />
      <React.Suspense fallback={<></>}>
        <Contact />
        <Footer />
      </React.Suspense>
      <Nav />
    </>
  );
};

export default App;
