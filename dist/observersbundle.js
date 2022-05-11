/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
//god bless https://www.youtube.com/watch?v=2IbRtjez6ag

//
//close overlays with escape key
document.body.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    // document.getElementById('floater1').style.display = 'none';
    document.getElementById('floater2').style.display = 'none';
    document.getElementById('floater3').style.display = 'none';
    document.getElementById('floater4').style.display = 'none';
    document.getElementById('floater5').style.display = 'none';
    document.getElementById('floater6').style.display = 'none';
    document.getElementById('floater7').style.display = 'none';
    document.getElementById('spinner-container').style.zIndex = '-10';
  }
});


const DoinItAll = () => {
  //doing the html hash first
  // if (
  //   window.location.hash === '#technologies' ||
  //   window.location.hash === '#projects' ||
  //   window.location.hash === '#about' ||
  //   window.location.hash === '#contact'
  // ) {
  //   document.getElementById('navbar').classList.add('navbar-anima');
  // }


  //
  //all projects sliding animations
  const projects = document.querySelectorAll('.proj-h3');
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-h3-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer1.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projects.length; i++) {
    observer1.observe(projects[i]);
  }

  const projectsb = document.querySelectorAll('.projR2');
  const observer1b = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR2', entry.isIntersecting);

      if (entry.isIntersecting) observer1b.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectsb.length; i++) {
    observer1b.observe(projectsb[i]);
  }

  const projectsc = document.querySelectorAll('.projR3');
  const observer1c = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR3', entry.isIntersecting);

      if (entry.isIntersecting) observer1c.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectsc.length; i++) {
    observer1c.observe(projectsc[i]);
  }

  const projectsd = document.querySelectorAll('.projR4');
  const observer1d = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR4', entry.isIntersecting);

      if (entry.isIntersecting) observer1d.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectsd.length; i++) {
    observer1d.observe(projectsd[i]);
  }

  const projectse = document.querySelectorAll('.projR5');
  const observer1e = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR5', entry.isIntersecting);

      if (entry.isIntersecting) observer1e.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectse.length; i++) {
    observer1e.observe(projectse[i]);
  }

  const projectsf = document.querySelectorAll('.projR6');
  const observer1f = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR6', entry.isIntersecting);

      if (entry.isIntersecting) observer1f.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectsf.length; i++) {
    observer1f.observe(projectsf[i]);
  }

  const projectsg = document.querySelectorAll('.projR7');
  const observer1g = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR7', entry.isIntersecting);

      if (entry.isIntersecting) observer1g.unobserve(entry.target);
    });
  });
  for (let i = 0; i < projectsg.length; i++) {
    observer1g.observe(projectsg[i]);
  }

  //
  // THIS IS FOR THE TRANSLATEY
  const h3s = document.querySelectorAll('.translate-eles');
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('translate-ele', entry.isIntersecting);

      if (entry.isIntersecting) observer3.unobserve(entry.target);
    });
  });

  for (let i = 0; i < h3s.length; i++) {
    observer3.observe(h3s[i]);
  }

  //
  //THIS IS FOR THE project h3 ELEMENTS only
  const h3s2 = document.querySelectorAll('.proj-h3');

  const observer3a = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-h3-anima', entry.isIntersecting);

      if (entry.isIntersecting) {
        document.getElementById('navbar').classList.toggle('navbar-anima');
        observer3a.unobserve(entry.target);
      }
    });
  });

  for (let i = 0; i < h3s2.length; i++) {
    observer3a.observe(h3s2[i]);
  }

  //
  // THIS IS FOR THE BIG M in My
  const first = document.querySelectorAll('.first');
  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('first-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer4.unobserve(entry.target);
    });
  });
  for (let i = 0; i < first.length; i++) {
    observer4.observe(first[i]);
  }

  //
  // THIS IS FOR THE OVERLAY IMAGES
  // const overlayimgs = document.querySelectorAll('.overlay-img');
  // const observer5 = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     entry.target.classList.toggle('overlay-fade-in', entry.isIntersecting);

  //     if (entry.isIntersecting) observer5.unobserve(entry.target);
  //   });
  // });

  // for (let i = 0; i < overlayimgs.length; i++) {
  //   observer5.observe(overlayimgs[i]);
  // }

  //
  // THIS IS FOR THE HTML5 logo
  const html5 = document.querySelectorAll('.html5');
  const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('html5-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer6.unobserve(entry.target);
    });
  });
  for (let i = 0; i < html5.length; i++) {
    observer6.observe(html5[i]);
  }

  //
  // THIS IS FOR THE css logo
  const css = document.querySelectorAll('.css');
  const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('css-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer7.unobserve(entry.target);
    });
  });
  for (let i = 0; i < css.length; i++) {
    observer7.observe(css[i]);
  }

  //
  // THIS IS FOR THE javascript logo
  const javascript = document.querySelectorAll('.javascript');
  const observer8 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('javascript-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer8.unobserve(entry.target);
    });
  });
  for (let i = 0; i < javascript.length; i++) {
    observer8.observe(javascript[i]);
  }

  //
  // THIS IS FOR THE typescript logo
  const typescript = document.querySelectorAll('.typescript');
  const observer9 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('typescript-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer9.unobserve(entry.target);
    });
  });
  for (let i = 0; i < typescript.length; i++) {
    observer9.observe(typescript[i]);
  }

  //
  // THIS IS FOR THE react logo
  const react = document.querySelectorAll('.react');
  const observer10 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('react-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer10.unobserve(entry.target);
    });
  });
  for (let i = 0; i < react.length; i++) {
    observer10.observe(react[i]);
  }

  //
  // THIS IS FOR THE redux logo
  const redux = document.querySelectorAll('.redux');
  const observer11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('redux-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer11.unobserve(entry.target);
    });
  });
  for (let i = 0; i < redux.length; i++) {
    observer11.observe(redux[i]);
  }

  //
  // THIS IS FOR THE express logo
  const express = document.querySelectorAll('.express');
  const observer12 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('express-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer12.unobserve(entry.target);
    });
  });
  for (let i = 0; i < express.length; i++) {
    observer12.observe(express[i]);
  }

  //
  // THIS IS FOR THE skills/technolgies spans
  const spans = document.querySelectorAll('.skills-span');
  const observer13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('skills-span-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer13.unobserve(entry.target);
    });
  });

  for (let i = 0; i < spans.length; i++) {
    observer13.observe(spans[i]);
  }

  //
  // THIS IS FOR THE WAVE HAND
  const wave = document.querySelectorAll('.wave-hand');
  const observerWave = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        'wave-hand-animations-class',
        entry.isIntersecting
      );

      if (entry.isIntersecting) observerWave.unobserve(entry.target);
    });
  });
  for (let i = 0; i < wave.length; i++) {
    observerWave.observe(wave[i]);
  }

  // THIS IS FOR MY IMG
  const myImg = document.querySelectorAll('.thumbnail');
  const observeImg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('photo-anima', entry.isIntersecting);

      if (entry.isIntersecting) {
        observeImg.unobserve(entry.target);
        document.querySelector('.thats-me').classList.toggle('thats-me-anima');
        document
          .querySelector('.curved-arrow')
          .classList.toggle('curved-arrow-anima');
      }
    });
  });
  for (let i = 0; i < myImg.length; i++) {
    observeImg.observe(myImg[i]);
  }

  // console.log(spans);
};

setTimeout(() => {
  DoinItAll();
}, 0);

/******/ })()
;
//# sourceMappingURL=observersbundle.js.map