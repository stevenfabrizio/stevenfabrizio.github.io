import React from 'react';

import './Nav.css';

const Nav: React.FC = () => {
  return (
    <>
      <div id="navbar">
        <div></div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Technologies</a>
        <a href="#contact">Contact</a>
        <div></div>
      </div>
    </>
  );
};

export default Nav;
