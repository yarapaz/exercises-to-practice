'use strict';

//Elements
const newCardsSection = document.querySelector('.js_cards');

//Functions

function getTshirt() {
  let newTshirt = `<article>`;
  newTshirt += `<img src="" alt="">`;
  newTshirt += `<h3>Node JS</h3>`;
  newTshirt += `<p>16 €</p>`;
  newTshirt += `<button>Añadir a la cesta</button>`;
  newTshirt += `</article>`;

  return newTshirt;
}

//Events
