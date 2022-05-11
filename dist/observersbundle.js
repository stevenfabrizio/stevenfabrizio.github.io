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
        document.getElementById('navbar').classList.add('navbar-anima');
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
        document.querySelector('.thats-me').classList.add('thats-me-anima');
        document
          .querySelector('.curved-arrow')
          .classList.add('curved-arrow-anima');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8vLi9zcmMvb2JzZXJ2ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZ29kIGJsZXNzIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MkliUnRqZXo2YWdcclxuXHJcbi8vXHJcbi8vY2xvc2Ugb3ZlcmxheXMgd2l0aCBlc2NhcGUga2V5XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGVyNScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRlcjYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyLWNvbnRhaW5lcicpLnN0eWxlLnpJbmRleCA9ICctMTAnO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgRG9pbkl0QWxsID0gKCkgPT4ge1xyXG4gIC8vZG9pbmcgdGhlIGh0bWwgaGFzaCBmaXJzdFxyXG4gIC8vIGlmIChcclxuICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI3RlY2hub2xvZ2llcycgfHxcclxuICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI3Byb2plY3RzJyB8fFxyXG4gIC8vICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICcjYWJvdXQnIHx8XHJcbiAgLy8gICB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyNjb250YWN0J1xyXG4gIC8vICkge1xyXG4gIC8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1hbmltYScpO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vXHJcbiAgLy9hbGwgcHJvamVjdHMgc2xpZGluZyBhbmltYXRpb25zXHJcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1oMycpO1xyXG4gIGNvbnN0IG9ic2VydmVyMSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1oMy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxLm9ic2VydmUocHJvamVjdHNbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSMicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxYi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFiLm9ic2VydmUocHJvamVjdHNiW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjMnKTtcclxuICBjb25zdCBvYnNlcnZlcjFjID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjMnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzYy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxYy5vYnNlcnZlKHByb2plY3RzY1tpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0c2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI0JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFkLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2QubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWQub2JzZXJ2ZShwcm9qZWN0c2RbaV0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvamVjdHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSNScpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSNScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFlLm9ic2VydmUocHJvamVjdHNlW2ldKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjYnKTtcclxuICBjb25zdCBvYnNlcnZlcjFmID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjYnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzZi5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxZi5vYnNlcnZlKHByb2plY3RzZltpXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0c2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI3Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI3JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFnLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2cubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWcub2JzZXJ2ZShwcm9qZWN0c2dbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgVFJBTlNMQVRFWVxyXG4gIGNvbnN0IGgzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFuc2xhdGUtZWxlcycpO1xyXG4gIGNvbnN0IG9ic2VydmVyMyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNsYXRlLWVsZScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIzLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaDNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjMub2JzZXJ2ZShoM3NbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvL1RISVMgSVMgRk9SIFRIRSBwcm9qZWN0IGgzIEVMRU1FTlRTIG9ubHlcclxuICBjb25zdCBoM3MyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2otaDMnKTtcclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXIzYSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1oMy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKS5jbGFzc0xpc3QuYWRkKCduYXZiYXItYW5pbWEnKTtcclxuICAgICAgICBvYnNlcnZlcjNhLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoM3MyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjNhLm9ic2VydmUoaDNzMltpXSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBCSUcgTSBpbiBNeVxyXG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpcnN0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI0ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmaXJzdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI0LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXJzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI0Lm9ic2VydmUoZmlyc3RbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgT1ZFUkxBWSBJTUFHRVNcclxuICAvLyBjb25zdCBvdmVybGF5aW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdmVybGF5LWltZycpO1xyXG4gIC8vIGNvbnN0IG9ic2VydmVyNSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gIC8vICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gIC8vICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1mYWRlLWluJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAvLyAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjUudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBvdmVybGF5aW1ncy5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgb2JzZXJ2ZXI1Lm9ic2VydmUob3ZlcmxheWltZ3NbaV0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgSFRNTDUgbG9nb1xyXG4gIGNvbnN0IGh0bWw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmh0bWw1Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI2ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdodG1sNS1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI2LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodG1sNS5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI2Lm9ic2VydmUoaHRtbDVbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgY3NzIGxvZ29cclxuICBjb25zdCBjc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3NzJyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI3ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjc3MtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyNy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjcub2JzZXJ2ZShjc3NbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgamF2YXNjcmlwdCBsb2dvXHJcbiAgY29uc3QgamF2YXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qYXZhc2NyaXB0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI4ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdqYXZhc2NyaXB0LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjgudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGphdmFzY3JpcHQubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyOC5vYnNlcnZlKGphdmFzY3JpcHRbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgdHlwZXNjcmlwdCBsb2dvXHJcbiAgY29uc3QgdHlwZXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50eXBlc2NyaXB0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd0eXBlc2NyaXB0LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjkudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVzY3JpcHQubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyOS5vYnNlcnZlKHR5cGVzY3JpcHRbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgcmVhY3QgbG9nb1xyXG4gIGNvbnN0IHJlYWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxMCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVhY3QtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMTAudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlYWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjEwLm9ic2VydmUocmVhY3RbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgcmVkdXggbG9nb1xyXG4gIGNvbnN0IHJlZHV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZHV4Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxMSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVkdXgtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMTEudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZHV4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjExLm9ic2VydmUocmVkdXhbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgZXhwcmVzcyBsb2dvXHJcbiAgY29uc3QgZXhwcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHByZXNzJyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxMiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwcmVzcy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcmVzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMi5vYnNlcnZlKGV4cHJlc3NbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgc2tpbGxzL3RlY2hub2xnaWVzIHNwYW5zXHJcbiAgY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxzLXNwYW4nKTtcclxuICBjb25zdCBvYnNlcnZlcjEzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdza2lsbHMtc3Bhbi1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjEzLm9ic2VydmUoc3BhbnNbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgV0FWRSBIQU5EXHJcbiAgY29uc3Qgd2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YXZlLWhhbmQnKTtcclxuICBjb25zdCBvYnNlcnZlcldhdmUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXHJcbiAgICAgICAgJ3dhdmUtaGFuZC1hbmltYXRpb25zLWNsYXNzJyxcclxuICAgICAgICBlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcldhdmUudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdmUubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyV2F2ZS5vYnNlcnZlKHdhdmVbaV0pO1xyXG4gIH1cclxuXHJcbiAgLy8gVEhJUyBJUyBGT1IgTVkgSU1HXHJcbiAgY29uc3QgbXlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWJuYWlsJyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZUltZyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncGhvdG8tYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcblxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBvYnNlcnZlSW1nLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGF0cy1tZScpLmNsYXNzTGlzdC5hZGQoJ3RoYXRzLW1lLWFuaW1hJyk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY3VydmVkLWFycm93JylcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdjdXJ2ZWQtYXJyb3ctYW5pbWEnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUltZy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZUltZy5vYnNlcnZlKG15SW1nW2ldKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHNwYW5zKTtcclxufTtcclxuXHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIERvaW5JdEFsbCgpO1xyXG59LCAwKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9