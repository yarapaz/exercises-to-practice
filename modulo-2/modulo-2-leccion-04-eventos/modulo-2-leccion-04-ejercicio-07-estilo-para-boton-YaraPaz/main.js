'use strict';

const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');

button.addEventListener('click', (event) => {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('selected');
});

button2.addEventListener('click', (event) => {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('selected');
});
