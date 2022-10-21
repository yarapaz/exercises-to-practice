'use strict';

const textDiv = document.querySelector('.textDiv');

window.addEventListener('scroll', () => {
  if (parseInt(window.scrollY) <= 250) {
    textDiv.classList.remove('scrollgreen');
    textDiv.classList.remove('scrollred');
    textDiv.classList.add('scrollpurple');
  } else if (
    parseInt(window.scrollY) > 250 &&
    parseInt(window.scrollY) <= 600
  ) {
    textDiv.classList.remove('scrollpurple');
    textDiv.classList.remove('scrollred');
    textDiv.classList.add('scrollgreen');
  } else if (parseInt(window.scrollY) > 600) {
    textDiv.classList.remove('scrollpurple');
    textDiv.classList.remove('scrollgreen');
    textDiv.classList.add('scrollred');
  }
});

// PROBLEM: Necesitaba convertir el scrollY en valores númericos para
// poder realizar la comparación con los valores numéricos
