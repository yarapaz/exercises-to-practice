'use strict';

const textDiv = document.querySelector('.text');
const pagePosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  if (pagePosition > window.scrollY(250)) {
    textDiv.classList.add('scrollpurple');
  } else if (pagePosition < window.scrollY(250)) {
    textDiv.classList.add('scrollgreen');
  }
});
