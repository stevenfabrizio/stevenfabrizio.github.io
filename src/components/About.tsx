import React from 'react';

const About: React.FC = () => {
  //targeted by element in diff component to scroll to
  const aboutRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null);

  //making arrow clicked scroll to about-me section.
  const ScrollToAbout: () => void = () => {
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
    <div className="about-container" ref={aboutRef}>
      <h3 className="h3-observable">About Me</h3>

      <div className="photo-container">
        <div className="photo-frame">
          <img
            alt="my-photo"
            loading="lazy"
            className="thumbnail overlay-img"
            //   src={Selfie}
          />
        </div>
      </div>

      <div className="p-container">
        <p>
          <span className="hello">Hello!</span>
          <br />
          <br />
          <span className="first">M</span>
          <span className="second">y</span> name is Steven and I'm a web
          developer. I have been programming since I was a kid. I love web
          development because I am a math and logic oriented person with a
          creative spirit. Beautiful websites and web designs inspire me. I want
          to create them with a strong team that is passionate like me.
          <br />
          <br />
          Apart from being a developer, I spend my time playing music on my
          guitar, riding my bike in my neighborhood, and reading books.
        </p>
      </div>
    </div>
  );
};

export default About;
