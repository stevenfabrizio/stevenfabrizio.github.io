import React from 'react';

import Proj1 from '../images/proj1.webp';
import Proj1Overlay from '../images/proj1overlay.webp';
import Proj2 from '../images/proj2.webp';
import Proj2Overlay from '../images/proj2overlay.webp';
import Proj3 from '../images/proj3.webp';
import Proj3Overlay from '../images/proj3overlay.webp';
import Proj4 from '../images/proj4.webp';
import Proj4Overlay from '../images/proj4overlay.webp';
import Proj5 from '../images/proj5.webp';
import Proj5Overlay from '../images/proj5overlay.webp';
import Proj6 from '../images/Proj6.webp';
// import Proj6Overlay from '../images/Proj6Overlay.gif';
import Proj7 from '../images/Proj7.webp';

// import SmallerMP3 from '../images/SmallerMP3.png';

import ExternalLink from '../images/externallink.webp';
import './Projects.css';

export const Projects: React.FC = () => {
  let spinnerContainer: HTMLDivElement = document.getElementById(
    'spinner-container'
  ) as HTMLDivElement;

  const float1Ref = React.useRef<HTMLDivElement>();
  const float2Ref = React.useRef<HTMLDivElement>();
  const float3Ref = React.useRef<HTMLDivElement>();
  const float4Ref = React.useRef<HTMLDivElement>();
  const float5Ref = React.useRef<HTMLDivElement>();
  const float6Ref = React.useRef<HTMLDivElement>();
  const float7Ref = React.useRef<HTMLDivElement>();

  //these functions will toggle the project overlays
  //positive and negative will be z-indexes that overlay the page or hide behind it.
  enum Displays {
    grid = 'grid',
    none = 'none',
    negative = '-10',
    positive = '10',
  }

  const onProj1 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float1Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj2 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float2Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj3 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float3Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj4 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float4Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj5 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float5Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj6 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float6Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const onProj7 = () => {
    spinnerContainer.style.zIndex = Displays.positive;
    float7Ref.current.style.display = Displays.grid;

    setTimeout(() => {
      spinnerContainer.style.zIndex = Displays.negative;
    }, 550);
  };

  const off = () => {
    float1Ref.current.style.display = Displays.none;
    float2Ref.current.style.display = Displays.none;
    float3Ref.current.style.display = Displays.none;
    float4Ref.current.style.display = Displays.none;
    float5Ref.current.style.display = Displays.none;
    float6Ref.current.style.display = Displays.none;
    float7Ref.current.style.display = Displays.none;
    spinnerContainer.style.zIndex = Displays.negative;
  };

  //properly assign spinner container when this component loads
  React.useEffect(() => {
    spinnerContainer = document.getElementById(
      'spinner-container'
    ) as HTMLDivElement;
  }, []);

  return (
    <>
      <div className="projects-container">
        <div className="proj-h3-container">
          <h3 className="proj-h3">Some projects</h3>
        </div>

        <div className="projR1 proj" id="p1" onClick={onProj1}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj1})` }}
          ></div>
          <h4>Twisted Tiki Restaurant</h4>
        </div>

        <div className="projR2 proj" id="p2" onClick={onProj2}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj2})` }}
          ></div>
          <h4>Sudoku</h4>
        </div>

        <div className="projR3 proj" id="p3" onClick={onProj3}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj3})` }}
          ></div>
          <h4>Bitcoin Stats</h4>
        </div>

        <div className="projR4 proj" id="p4" onClick={onProj4}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj5})` }}
          ></div>
          <h4>E-Commerce Store</h4>
        </div>

        <div className="projR5 proj" id="p5" onClick={onProj5}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj4})` }}
          ></div>
          <h4>Weather Forecast</h4>
        </div>

        <div className="projR6 proj" id="p6" onClick={onProj6}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj6})` }}
          ></div>
          <h4>YouTube to MP3 Converter</h4>
        </div>

        <div className="projR7 proj" id="p7" onClick={onProj7}>
          <div
            className="proj-hover-img"
            style={{ backgroundImage: `url(${Proj7})` }}
          ></div>
          <h4>Wikipedia Translator</h4>
        </div>
      </div>

      <div id="floater1" ref={float1Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F1">
          <div className="x-div">
            <button id="x1" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container1 overlay-img"
            style={{ backgroundImage: `url(${Proj1Overlay})` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://stevenfabrizio.github.io/tiki-restaurant/"
              >
                Twisted Tiki Restaurant
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">React, TypeScript</span>
            </h3>
          </div>

          <p>
            A colorful front-end restaurant website. It has all the components
            expected of such a website. Simple animations, intuitive layout and
            a unique theme.{' '}
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater2" ref={float2Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F2">
          <div className="x-div">
            <button id="x2" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container2 overlay-img"
            style={{ backgroundImage: `url(${Proj2Overlay})` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://stevenfabrizio.github.io/sudoku/"
              >
                Sudoku
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">React, TypeScript, Redux</span>
            </h3>
          </div>

          <p>
            Five easy sudoku puzzles. Click the title for the solution. If you
            take a break and come back, your progress will automatically be
            saved for you.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater3" ref={float3Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F3">
          <div className="x-div">
            <button id="x3" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container3 overlay-img"
            style={{ backgroundImage: `url(${Proj3Overlay})` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://stevenfabrizio.github.io/crypto-btc-covariances-and-correlations"
              >
                Bitcoin Stats
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">React, TypeScript</span>
            </h3>
          </div>

          <p>
            This calculates how strongly smaller cryptocurrencies move with
            Bitcoin when it moves. Correlation of 1 is perfect correlation.
            Numbers closer to 0 suggest no relationship.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater4" ref={float4Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F4">
          <div className="x-div">
            <button id="x4" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container4 overlay-img"
            style={{ backgroundImage: `url(${Proj5Overlay})` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://stevensboots.herokuapp.com/login"
              >
                E-Commerce Store
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">
                React, JavaScript, MongoDB, Express, Redux
              </span>
            </h3>
          </div>

          <p>
            An idea for a commerce website themed around Zappos. Users can
            register and login via a database. Their cart items are saved upon
            return. Stripe checkout simulates a real payment.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater5" ref={float5Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F5">
          <div className="x-div">
            <button id="x5" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container5 overlay-img"
            style={{ backgroundImage: `url(${Proj4Overlay})` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://stevenfabrizio.github.io/weather-forecast"
              >
                Weather Forecast
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">React, TypeScript</span>
            </h3>
          </div>

          <p>
            A weather app that shows you current, hourly and daily weather
            information. The background will change based off a combination of
            weather conditions and local time of day. I added a 'My Location'
            button for better user experience.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater6" ref={float6Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F6">
          <div className="x-div">
            <button id="x6" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container6 overlay-img"
            style={{ backgroundImage: `url(../../dist/proj6overlay.gif)` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://github.com/stevenfabrizio/youtube-to-mp3-project"
              >
                YouTube to MP3 Converter
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">JavaScript, Express</span>
            </h3>
          </div>
          <p>
            A simple app where you paste YouTube links and get MP3s back. This
            is personally my favorite app. You can clone it to your machine from
            the link above.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>

      <div id="floater7" ref={float7Ref} className="overlay">
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div id="F7">
          <div className="x-div">
            <button id="x7" className="x-btn" onClick={() => off()}>
              X
            </button>
          </div>
          <div
            className="img-container7 overlay-img"
            style={{ backgroundImage: `url(../../dist/proj6overlay.gif)` }}
          ></div>

          <div className="project-h3-div">
            <h3>
              <a
                target="_blank"
                href="https://wikipedia-translator.herokuapp.com/"
              >
                Wikipedia Translator
                <img loading="lazy" src={ExternalLink} className="wiggles el" />
              </a>
              <span className="technologies">
                PostgreSQL, Express, TypeScript, Redux
              </span>
            </h3>
          </div>
          <p>
            A website where you can compare an english Wikipedia article with a
            non english one. The non english one is translated for you.
          </p>
        </div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
        <div onClick={() => off()}></div>
      </div>
    </>
  );
};

export default Projects;
