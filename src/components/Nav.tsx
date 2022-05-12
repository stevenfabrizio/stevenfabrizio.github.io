import React from 'react';

import './Nav.css';

const Nav: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    window.innerWidth
  );

  const setWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', setWidth);
  }, []);

  return (
    <>
      {windowWidth > 760 ? (
        // <div id="navbar" className="navbar-anima">
        <div id="navbar">
          <div></div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
          <div></div>
        </div>
      ) : (
        <>
          {/* <div id="burgers">
            ☰
            <div></div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact</a>
            <div></div>
          </div> */}

          <nav id="hamnav">
            <label htmlFor="hamburger">&#9776;</label>

            <input type="checkbox" id="hamburger" />

            <div id="hamitems">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#technologies">Technologies</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Nav;
