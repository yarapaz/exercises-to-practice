'use strict';

const ipsumText = document.querySelector('.text');
const lorem = ipsumText.innerHTML;

ipsumText.addEventListener('click', () => {
  ipsumText.innerHTML += `${lorem}`;
});
