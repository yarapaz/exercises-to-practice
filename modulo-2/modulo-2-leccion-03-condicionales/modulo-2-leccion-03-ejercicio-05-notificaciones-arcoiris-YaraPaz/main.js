'use strict';

const component = document.querySelector('.js_component');
const title = document.querySelector('.js_title');
const text = document.querySelector('.js_text');

if (component.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado';
} else if (component.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha habido un error';
} else if (component.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  text.innerHTML = 'El resultado es correcto';
}
