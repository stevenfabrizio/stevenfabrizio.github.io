import React from 'react';

import './About.css';
import Self from '../../images/self.png';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container" id="about">
      <div className="abT"></div>

      <div className="photo-container">
        <div className="photo-frame">
          <p className="thats-me">That's me!</p>
          <p className="curved-arrow">⤸</p>
          <img
            alt="my-photo"
            loading="lazy"
            decoding="async"
            className="thumbnail overlay-img" 
            // src={Self}
          />
        </div>
      </div>

      <div className="p-container translate-eles">
        <p>
          <span className="hello">
            Hi, I'm Steven
            <span className="wave-hand">👋</span>
          </span>
          <br />
          <br />
          {/* <span className="first">I </span>
          <span className="second">have</span>on't   */}
          I'm a developer based in Raleigh.
          <br />
          <br />
          I love web development because I am a math and logic oriented person
          with a creative spirit. Elegent web solutions and beautiful websites
          inspire me. I want to create them with a strong team that is
          passionate like me.
          <br />
          <br />
          Apart from programming, I mainly spend my time playing music on my
          guitar and riding my bike in my neighborhood.
        </p>
      </div>

      <div className="amB"></div>
    </div>
  );
};

export default AboutMe;
