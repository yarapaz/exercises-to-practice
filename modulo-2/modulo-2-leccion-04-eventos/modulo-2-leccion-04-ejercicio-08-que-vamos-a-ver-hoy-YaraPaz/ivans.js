'use strict';

//Elementos de la página que voy a usar
const button = document.querySelector('.js_btn');
const listBox = document.querySelector('.js_list');
const selectedBox = document.querySelector('.js_selected');

//---------------------------------------------------------

//Variables globales: contienen los datos de la aplicación
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

//---------------------------------------------------------

//Funciones

//---------------------------------------------------------

//Eventos
button.addEventListener('click', () => {
  listBox.innerHTML = ''; //limpio lo que hubiera (esto evita concatenaciones infinitas)
  //Después cargo todos los elementos nuevos
  listBox.innerHTML += `<li class='js_film1'>${inception}</li>`;
  listBox.innerHTML += `<li class='js_film2'>${theButterFlyEffect}</li>`;
  listBox.innerHTML += `<li class='js_film3'>${eternalSunshineOfTheSM}</li>`;
  listBox.innerHTML += `<li class='js_film4'>${blueVelvet}</li>`;
  listBox.innerHTML += `<li class='js_film5'>${split}</li>`;
  //se pueden meter todos los LI dentro del mismo innerhtml tambien para resumir codigo:
  // listBox.innerHTML += `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;

  //Si queremos afectar a cada LI por separado
  //   const filmList1 = document.querySelector('.js_film1');
  //   filmList1.addEventListener('click', (event) => {
  //     const peliculaclikada = event.currentTarget.innerHTML;
  //     selectedBox.innerHTML = `La peli seleccionada es ${peliculaclikada}`;
  //   });
  //   const filmList2 = document.querySelector('.js_film2');
  //   filmList2.addEventListener('click', (event) => {
  //     const peliculaclikada = event.currentTarget.innerHTML;
  //     selectedBox.innerHTML = `La peli seleccionada es ${peliculaclikada}`;
  //   });

  //Si queremos hacerlo mucho mejor y que donde yo de de la lista me reconozca sobre que peli he hecho click

  listBox.addEventListener('click', (event) => {
    const peliculaclikada = event.target; // spotea elementos hijos dentro de ese elemento sin necesidad de pasar por su padre antes
    const peliculaclickadaInfo = peliculaclikada.innerHTML;
    selectedBox.innerHTML = `La peli seleccionada es ${peliculaclickadaInfo}`;
  });
});

//---------------------------------------------------------
