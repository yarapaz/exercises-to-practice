'use strict';

const inputBox = document.querySelector('.input');
const textMessage = document.querySelector('.text');

inputBox.addEventListener('input', (event) => {
  const inputValue = event.currentTarget.value;
  textMessage.innerHTML = inputValue;
});
