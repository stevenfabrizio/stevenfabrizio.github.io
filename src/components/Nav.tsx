import React from 'react';

import './Nav.css';

const Nav: React.FC = () => {
  return (
    <>
      <div id="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href='#contact'>Contact</a>
      </div>
    </>
  );
};

export default Nav;
