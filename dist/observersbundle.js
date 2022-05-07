/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/observers.js ***!
  \**************************/
//god bless https://www.youtube.com/watch?v=2IbRtjez6ag

//
//close overlays with escape key
document.body.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    document.getElementById('floater1').style.display = 'none';
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
  //
  //all projects sliding animations
  const projects = document.querySelectorAll('.projR1');
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-animaR1', entry.isIntersecting);

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
  //THIS IS FOR THE h3 ELEMENTS
  // const h3s = document.querySelectorAll('.h3-observable');
  // const observer3 = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     entry.target.classList.toggle('h3-anima', entry.isIntersecting);

  //     if (entry.isIntersecting) observer3.unobserve(entry.target);
  //   });
  // });

  // for (let i = 0; i < h3s.length; i++) {
  //   observer3.observe(h3s[i]);
  // }

  //
  //THIS IS FOR THE project h3 ELEMENTS only
  const h3s2 = document.querySelectorAll('.proj-h3');

  const observer3a = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('proj-h3-anima', entry.isIntersecting);

      if (entry.isIntersecting) observer3a.unobserve(entry.target);
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
  // THIS IS FOR THE skills spans
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

  // console.log(spans);
};

setTimeout(() => {
  DoinItAll();
}, 0);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXJzYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8vLi9zcmMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZ29kIGJsZXNzIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MkliUnRqZXo2YWdcclxuXHJcbi8vXHJcbi8vY2xvc2Ugb3ZlcmxheXMgd2l0aCBlc2NhcGUga2V5XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyNScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyLWNvbnRhaW5lcicpLnN0eWxlLnpJbmRleCA9ICctMTAnO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBEb2luSXRBbGwgPSAoKSA9PiB7XHJcbiAgLy9cclxuICAvL2FsbCBwcm9qZWN0cyBzbGlkaW5nIGFuaW1hdGlvbnNcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjEnKTtcclxuICBjb25zdCBvYnNlcnZlcjEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxLm9ic2VydmUocHJvamVjdHNbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSMicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxYi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFiLm9ic2VydmUocHJvamVjdHNiW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjMnKTtcclxuICBjb25zdCBvYnNlcnZlcjFjID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjMnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzYy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxYy5vYnNlcnZlKHByb2plY3RzY1tpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0c2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI0JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFkLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2QubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWQub2JzZXJ2ZShwcm9qZWN0c2RbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSNScpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSNScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFlLm9ic2VydmUocHJvamVjdHNlW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjYnKTtcclxuICBjb25zdCBvYnNlcnZlcjFmID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjYnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzZi5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxZi5vYnNlcnZlKHByb2plY3RzZltpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0c2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI3Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI3JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFnLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2cubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWcub2JzZXJ2ZShwcm9qZWN0c2dbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvL1RISVMgSVMgRk9SIFRIRSBoMyBFTEVNRU5UU1xyXG4gIC8vIGNvbnN0IGgzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oMy1vYnNlcnZhYmxlJyk7XHJcbiAgLy8gY29uc3Qgb2JzZXJ2ZXIzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgLy8gICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgLy8gICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoMy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgLy8gICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgaDNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICBvYnNlcnZlcjMub2JzZXJ2ZShoM3NbaV0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy9cclxuICAvL1RISVMgSVMgRk9SIFRIRSBwcm9qZWN0IGgzIEVMRU1FTlRTIG9ubHlcclxuICBjb25zdCBoM3MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otaDMnKTtcclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXIzYSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1oMy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIzYS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGgzczIubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyM2Eub2JzZXJ2ZShoM3MyW2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIEJJRyBNIGluIE15XHJcbiAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlyc3QnKTtcclxuICBjb25zdCBvYnNlcnZlcjQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2ZpcnN0LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjQudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjQub2JzZXJ2ZShmaXJzdFtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBPVkVSTEFZIElNQUdFU1xyXG4gIC8vIGNvbnN0IG92ZXJsYXlpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZXJsYXktaW1nJyk7XHJcbiAgLy8gY29uc3Qgb2JzZXJ2ZXI1ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgLy8gICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgLy8gICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LWZhZGUtaW4nLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gIC8vICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyNS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG92ZXJsYXlpbWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICBvYnNlcnZlcjUub2JzZXJ2ZShvdmVybGF5aW1nc1tpXSk7XHJcbiAgLy8gfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBIVE1MNSBsb2dvXHJcbiAgY29uc3QgaHRtbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaHRtbDUnKTtcclxuICBjb25zdCBvYnNlcnZlcjYgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2h0bWw1LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGh0bWw1Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjYub2JzZXJ2ZShodG1sNVtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBjc3MgbG9nb1xyXG4gIGNvbnN0IGNzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jc3MnKTtcclxuICBjb25zdCBvYnNlcnZlcjcgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Nzcy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI3LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjc3MubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyNy5vYnNlcnZlKGNzc1tpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBqYXZhc2NyaXB0IGxvZ29cclxuICBjb25zdCBqYXZhc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmphdmFzY3JpcHQnKTtcclxuICBjb25zdCBvYnNlcnZlcjggPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2phdmFzY3JpcHQtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyOC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgamF2YXNjcmlwdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI4Lm9ic2VydmUoamF2YXNjcmlwdFtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSB0eXBlc2NyaXB0IGxvZ29cclxuICBjb25zdCB0eXBlc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR5cGVzY3JpcHQnKTtcclxuICBjb25zdCBvYnNlcnZlcjkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3R5cGVzY3JpcHQtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyOS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXNjcmlwdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI5Lm9ic2VydmUodHlwZXNjcmlwdFtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSByZWFjdCBsb2dvXHJcbiAgY29uc3QgcmVhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3QnKTtcclxuICBjb25zdCBvYnNlcnZlcjEwID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWFjdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVhY3QubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMTAub2JzZXJ2ZShyZWFjdFtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSByZWR1eCBsb2dvXHJcbiAgY29uc3QgcmVkdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkdXgnKTtcclxuICBjb25zdCBvYnNlcnZlcjExID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWR1eC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdXgubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMTEub2JzZXJ2ZShyZWR1eFtpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBleHByZXNzIGxvZ29cclxuICBjb25zdCBleHByZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cHJlc3MnKTtcclxuICBjb25zdCBvYnNlcnZlcjEyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdleHByZXNzLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjEyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjEyLm9ic2VydmUoZXhwcmVzc1tpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBza2lsbHMgc3BhbnNcclxuICBjb25zdCBzcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHMtc3BhbicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NraWxscy1zcGFuLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjEzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMTMub2JzZXJ2ZShzcGFuc1tpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBXQVZFIEhBTkRcclxuICBjb25zdCB3YXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndhdmUtaGFuZCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyV2F2ZSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcclxuICAgICAgICAnd2F2ZS1oYW5kLWFuaW1hdGlvbnMtY2xhc3MnLFxyXG4gICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyV2F2ZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXJXYXZlLm9ic2VydmUod2F2ZVtpXSk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhzcGFucyk7XHJcbn07XHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBEb2luSXRBbGwoKTtcclxufSwgMCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==