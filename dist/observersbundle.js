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
  const h3s = document.querySelectorAll('.h3-observable');
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('h3-anima', entry.isIntersecting);
  
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBvcnRmb2xpby8uL3NyYy9vYnNlcnZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9nb2QgYmxlc3MgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ySWJSdGplejZhZ1xyXG5cclxuLy9cclxuLy9jbG9zZSBvdmVybGF5cyB3aXRoIGVzY2FwZSBrZXlcclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIxJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXIzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI1Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0ZXI3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXItY29udGFpbmVyJykuc3R5bGUuekluZGV4ID0gJy0xMCc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy9cclxuICAvL2FsbCBwcm9qZWN0cyBzbGlkaW5nIGFuaW1hdGlvbnNcclxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjEnKTtcclxuICBjb25zdCBvYnNlcnZlcjEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjEudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjEub2JzZXJ2ZShwcm9qZWN0c1tpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHByb2plY3RzYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjInKTtcclxuICBjb25zdCBvYnNlcnZlcjFiID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjInLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxYi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFiLm9ic2VydmUocHJvamVjdHNiW2ldKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcHJvamVjdHNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSMycpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSMycsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFjLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2MubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWMub2JzZXJ2ZShwcm9qZWN0c2NbaV0pO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBwcm9qZWN0c2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvalI0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxZCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncHJvai1hbmltYVI0JywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gIFxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMWQudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzZC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxZC5vYnNlcnZlKHByb2plY3RzZFtpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHByb2plY3RzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qUjUnKTtcclxuICBjb25zdCBvYnNlcnZlcjFlID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwcm9qLWFuaW1hUjUnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjFlLm9ic2VydmUocHJvamVjdHNlW2ldKTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcHJvamVjdHNmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2pSNicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMWYgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otYW5pbWFSNicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjFmLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c2YubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMWYub2JzZXJ2ZShwcm9qZWN0c2ZbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vVEhJUyBJUyBGT1IgVEhFIGgzIEVMRU1FTlRTXHJcbiAgY29uc3QgaDNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmgzLW9ic2VydmFibGUnKTtcclxuICBjb25zdCBvYnNlcnZlcjMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2gzLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gIFxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMy51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaDNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjMub2JzZXJ2ZShoM3NbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vVEhJUyBJUyBGT1IgVEhFIHByb2plY3QgaDMgRUxFTUVOVFMgb25seVxyXG4gIGNvbnN0IGgzczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1oMycpO1xyXG4gIFxyXG4gIGNvbnN0IG9ic2VydmVyM2EgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Byb2otaDMtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIzYS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaDNzMi5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIzYS5vYnNlcnZlKGgzczJbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBCSUcgTSBpbiBNeVxyXG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpcnN0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI0ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmaXJzdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjQudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjQub2JzZXJ2ZShmaXJzdFtpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIE9WRVJMQVkgSU1BR0VTXHJcbiAgY29uc3Qgb3ZlcmxheWltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlcmxheS1pbWcnKTtcclxuICBjb25zdCBvYnNlcnZlcjUgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktZmFkZS1pbicsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjUudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG92ZXJsYXlpbWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjUub2JzZXJ2ZShvdmVybGF5aW1nc1tpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIEhUTUw1IGxvZ29cclxuICBjb25zdCBodG1sNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5odG1sNScpO1xyXG4gIGNvbnN0IG9ic2VydmVyNiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaHRtbDUtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXI2LnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodG1sNS5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI2Lm9ic2VydmUoaHRtbDVbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBjc3MgbG9nb1xyXG4gIGNvbnN0IGNzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jc3MnKTtcclxuICBjb25zdCBvYnNlcnZlcjcgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Nzcy1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjcudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI3Lm9ic2VydmUoY3NzW2ldKTtcclxuICB9XHJcbiAgXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgamF2YXNjcmlwdCBsb2dvXHJcbiAgY29uc3QgamF2YXNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qYXZhc2NyaXB0Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI4ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdqYXZhc2NyaXB0LWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gIFxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyOC51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgamF2YXNjcmlwdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXI4Lm9ic2VydmUoamF2YXNjcmlwdFtpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIHR5cGVzY3JpcHQgbG9nb1xyXG4gIGNvbnN0IHR5cGVzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHlwZXNjcmlwdCcpO1xyXG4gIGNvbnN0IG9ic2VydmVyOSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndHlwZXNjcmlwdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjkudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVzY3JpcHQubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyOS5vYnNlcnZlKHR5cGVzY3JpcHRbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSByZWFjdCBsb2dvXHJcbiAgY29uc3QgcmVhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3QnKTtcclxuICBjb25zdCBvYnNlcnZlcjEwID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyZWFjdC1hbmltYScsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcclxuICBcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSBvYnNlcnZlcjEwLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWFjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMC5vYnNlcnZlKHJlYWN0W2ldKTtcclxuICB9XHJcbiAgXHJcbiAgLy9cclxuICAvLyBUSElTIElTIEZPUiBUSEUgcmVkdXggbG9nb1xyXG4gIGNvbnN0IHJlZHV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZHV4Jyk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXIxMSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncmVkdXgtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMS51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdXgubGVuZ3RoOyBpKyspIHtcclxuICAgIG9ic2VydmVyMTEub2JzZXJ2ZShyZWR1eFtpXSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vXHJcbiAgLy8gVEhJUyBJUyBGT1IgVEhFIGV4cHJlc3MgbG9nb1xyXG4gIGNvbnN0IGV4cHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwcmVzcycpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2V4cHJlc3MtYW5pbWEnLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XHJcbiAgXHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIxMi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcmVzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgb2JzZXJ2ZXIxMi5vYnNlcnZlKGV4cHJlc3NbaV0pO1xyXG4gIH1cclxuICBcclxuICAvL1xyXG4gIC8vIFRISVMgSVMgRk9SIFRIRSBza2lsbHMgc3BhbnNcclxuICBjb25zdCBzcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHMtc3BhbicpO1xyXG4gIGNvbnN0IG9ic2VydmVyMTMgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3NraWxscy1zcGFuLWFuaW1hJywgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gIFxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyMTMudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvYnNlcnZlcjEzLm9ic2VydmUoc3BhbnNbaV0pO1xyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=