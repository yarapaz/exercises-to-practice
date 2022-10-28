'use strict';

// Elementos del HTML
const main = document.querySelector('.js_main');
const face = document.querySelector('.js_face');
const select = document.querySelector('.js_select');
const button = document.querySelector('.js_btn');

// Funciones
function getRandom(max) {
  return Math.round(Math.random() * max);
  //retornar un numero random entre 0 y 1 sin llegar nunca al 1: math.random();
  //Para indicar que quiero que llegue hasta el número 100: math.random() * 100
  //con math round redondeamos a un numero entero por arriba o abajo y llegará hasta el 100
  //aqui pongo max como parametro y lo llamaré como argumento con mi numero maximo cuando invoque a la funcion
}

function paintFace() {
  const selectValue = select.value;
  face.innerHTML = selectValue;
}
function changeBackground() {
  const randomNumber = getRandom(100);
  const resto = randomNumber % 2;
  if (resto === 0) {
    main.classList.remove('orange');
    main.classList.add('yellow');
  } else {
    main.classList.remove('yellow');
    main.classList.add('orange'); //poner remove o add antes o despues da igual, el orden de los factores no altera el producto
    //CUIDADO: con classlist no debemos poner . para introducir la clase!!! SINO DARÁ ERROR!!!!
  }
}

function handleClick(event) {
  event.preventDefault(); //Super importante porque es un boton de un formulario. Obligatorio al inicio de cualquier funcion manejadora
  paintFace();
  changeBackground(); //intentar hacer funciones de todo, aunque tengan solo un codigo, para dejarlo todo más limpito
}

// Eventos
button.addEventListener('click', handleClick);
