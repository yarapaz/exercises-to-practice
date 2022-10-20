'use strict';

const titleText = document.querySelector('.title');

if (titleText.classList.contains('warning')) {
  titleText.innerHTML = 'AVISO';
} else if (titleText.classList.contains('error')) {
  titleText.innerHTML = 'ERROR';
} else if (titleText.classList.contains('success')) {
  titleText.innerHTML = 'CORRECTO';
}
