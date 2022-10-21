'use strict';

let inputValue;
const input = document.querySelector('.input');
const welcomeText = document.querySelector('.text');
const button = document.querySelector('.btn');

input.addEventListener('input', () => {
  inputValue = input.value;
});

button.addEventListener('click', () => {
  // if (inputValue === undefined) {
  //   welcomeText.innerHTML = 'Inserte un usuario, por favor';
  // }
  // } else {
  //   welcomeText.innerHTML = 'Hola' + ' ' + inputValue;
  // }
  welcomeText.innerHTML = welcomeText.innerHTML + ' ' + inputValue;
});

// SOLUCION: 1) con un if conseguimos limpiar mucho más el codigo y hacerlo mas profesional aunque no nos lo pidan
// incluyendo la primera opción
// 2) Si imprimimos todo el mensaje cada vez que hagamos click
// solo aparecerá ese mensaje y no se concatenará.
// 3) Podemos hacerlo mas corto pero entonces se concatenan cosas
