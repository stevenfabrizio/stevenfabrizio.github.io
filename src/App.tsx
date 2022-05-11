import React from 'react';

import Landing from './components/Landing';
import Spinner from './components/Spinner';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Nav from './components/Nav';

//might as well lazy load unimportant static stuff
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  React.useEffect(() => {
    console.log(window.innerHeight)
    console.log(document.body.clientHeight)
  }, []);
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
