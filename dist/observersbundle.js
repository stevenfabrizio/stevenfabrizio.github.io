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
  const overlayimgs = document.querySelectorAll('.overlay-img');
  const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('overlay-fade-in', entry.isIntersecting);

      if (entry.isIntersecting) observer5.unobserve(entry.target);
    });
  });

  for (let i = 0; i < overlayimgs.length; i++) {
    observer5.observe(overlayimgs[i]);
  }

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

  console.log(spans);
};

setTimeout(() => {
  DoinItAll();
}, 0);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZXJzYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8vLi9zcmMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZ29kIGJsZXNzIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MkliUnRqZXo2YWdcclxuXHJcbi8vXHJcbi8vY2xvc2Ugb3ZlcmxheXMgd2l0aCBlc2NhcGUga2V5XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyNScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyLWNvbnRhaW5lcicpLnN0eWxlLnpJbmRleCA9ICctMTAnO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBEb2luSXRBbGwgPSAoKSA9PiB7XHJcbiAgLy9cclxuICAvL2FsbCBwcm9qZWN0cyBzbGlkaW5nIGFuaW1hdGlvbnNcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjEnKTtcclxuICBjb25zdCBvYnNlcnZlcjEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxLm9ic2VydmUocHJvamVjdHNbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSMicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxYi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFiLm9ic2VydmUocHJvamVjdHNiW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjMnKTtcclxuICBjb25zdCBvYnNlcnZlcjFjID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjMnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzYy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxYy5vYnNlcnZlKHByb2plY3RzY1tpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0c2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI0JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFkLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2QubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWQub2JzZXJ2ZShwcm9qZWN0c2RbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSNScpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSNScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFlLm9ic2VydmUocHJvamVjdHNlW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjYnKTtcclxuICBjb25zdCBvYnNlcnZlcjFmID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjYnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzZi5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxZi5vYnNlcnZlKHByb2plY3RzZltpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vVEhJUyBJUyBGT1IgVEhFIGgzIEVMRU1FTlRTXHJcbiAgLy8gY29uc3QgaDNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgzLW9ic2VydmFibGUnKTtcclxuICAvLyBjb25zdCBvYnNlcnZlcjMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAvLyAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAvLyAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2gzLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAvLyAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBoM3MubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgIG9ic2VydmVyMy5vYnNlcnZlKGgzc1tpXSk7XHJcbiAgLy8gfVxyXG5cclxuICAvL1xyXG4gIC8vVEhJUyBJUyBGT1IgVEhFIHByb2plY3QgaDMgRUxFTUVOVFMgb25seVxyXG4gIGNvbnN0IGgzczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1oMycpO1xyXG5cclxuICBjb25zdCBvYnNlcnZlcjNhID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWgzLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjNhLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaDNzMi5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIzYS5vYnNlcnZlKGgzczJbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgQklHIE0gaW4gTXlcclxuICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXJzdCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyNCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmlyc3QtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyNC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyNC5vYnNlcnZlKGZpcnN0W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIE9WRVJMQVkgSU1BR0VTXHJcbiAgY29uc3Qgb3ZlcmxheWltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlcmxheS1pbWcnKTtcclxuICBjb25zdCBvYnNlcnZlcjUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktZmFkZS1pbicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI1LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3ZlcmxheWltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyNS5vYnNlcnZlKG92ZXJsYXlpbWdzW2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIEhUTUw1IGxvZ29cclxuICBjb25zdCBodG1sNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sNScpO1xyXG4gIGNvbnN0IG9ic2VydmVyNiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaHRtbDUtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyNi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaHRtbDUubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyNi5vYnNlcnZlKGh0bWw1W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIGNzcyBsb2dvXHJcbiAgY29uc3QgY3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNzcycpO1xyXG4gIGNvbnN0IG9ic2VydmVyNyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY3NzLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjcudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI3Lm9ic2VydmUoY3NzW2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIGphdmFzY3JpcHQgbG9nb1xyXG4gIGNvbnN0IGphdmFzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuamF2YXNjcmlwdCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyOCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnamF2YXNjcmlwdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI4LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBqYXZhc2NyaXB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjgub2JzZXJ2ZShqYXZhc2NyaXB0W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIHR5cGVzY3JpcHQgbG9nb1xyXG4gIGNvbnN0IHR5cGVzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHlwZXNjcmlwdCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyOSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndHlwZXNjcmlwdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI5LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlc2NyaXB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjkub2JzZXJ2ZSh0eXBlc2NyaXB0W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIHJlYWN0IGxvZ29cclxuICBjb25zdCByZWFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTAgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlYWN0LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjEwLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWFjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMC5vYnNlcnZlKHJlYWN0W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIHJlZHV4IGxvZ29cclxuICBjb25zdCByZWR1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWR1eCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZHV4LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjExLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWR1eC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMS5vYnNlcnZlKHJlZHV4W2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIGV4cHJlc3MgbG9nb1xyXG4gIGNvbnN0IGV4cHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwcmVzcycpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2V4cHJlc3MtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMTIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3MubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMTIub2JzZXJ2ZShleHByZXNzW2ldKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIHNraWxscyBzcGFuc1xyXG4gIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxscy1zcGFuJyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxMyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2tpbGxzLXNwYW4tYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMTMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMy5vYnNlcnZlKHNwYW5zW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHNwYW5zKTtcclxufTtcclxuXHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIERvaW5JdEFsbCgpO1xyXG59LCAwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9