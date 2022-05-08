import React from 'react';

import './About.css';
import Selfie from '../images/selfie.webp';

const AboutMe: React.FC = () => {
  //targeted by element in diff component to scroll to
  const aboutRef = React.useRef<HTMLDivElement>(null);

  //making arrow clicked scroll to about-me section.
  const ScrollToAbout = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  //adding onclick to the arrow once the element in this component loads for it.
  React.useEffect(() => {
    const arrowEle: HTMLAnchorElement = document.getElementById(
      'arrow'
    ) as HTMLAnchorElement;

    arrowEle.onclick = ScrollToAbout;
  }, []);

  return (
    <div className="about-me-container" ref={aboutRef}>
      <div className="abT"></div>

      <h3 className="h3-observable">About Me</h3>

      <div className="photo-container">
        <div className="photo-frame">
          <img
            alt="my-photo"
            loading="lazy"
            className="thumbnail overlay-img"
            src={Selfie}
          />
        </div>
      </div>

      <div className="p-container">
        <p>
          <span className="hello">
            Hi, I'm Steven
            <span className="wave-hand">👋</span>
          </span>
          <br />
          <br />
          <span className="first">M </span>
          <span className="second">y</span> passion for programming began as a
          kid. I love web development because I am a math and logic oriented
          person with a creative spirit. Elegent web solutions and beautiful websites inspire me. I want to create them with a strong team that is
          passionate like me.
          <br />
          <br />
          Apart from being a developer, I mainly spend my time playing music on my
          guitar or riding my bike in my neighborhood.
        </p>
      </div>

      <div className="amB"></div>
    </div>
  );
};

export default AboutMe;
