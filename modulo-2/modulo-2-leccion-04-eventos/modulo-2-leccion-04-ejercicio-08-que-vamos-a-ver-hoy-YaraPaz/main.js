'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.btn');
const popArea = document.querySelector('body');

// const movie2 = document.querySelector('.movie2');
// const movie3 = document.querySelector('.movie3');
// const movie4 = document.querySelector('.movie4');
// const movie5 = document.querySelector('.movie5');
const movieList = `<ul><li class="movie1">${inception}</li><li class="movie2">${theButterFlyEffect}</li><li class="movie3">${eternalSunshineOfTheSM}</li><li class="movie4">${blueVelvet}</li><li class="movie5">${split}</li><ul>`;
const movie1 = document.querySelector('.movie1');

button.addEventListener('mouseover', () => {
  button.classList.toggle('hover');
});

button.addEventListener('click', () => {
  popArea.innerHTML = popArea.innerHTML + movieList;
  const movie1 = document.querySelector('.movie1');
});

movie1.addEventListener('mouseover', (event) => {
  const selectedMovie = event.currentTarget;
  const selectedMovieInfo = selectedMovie.innerHTML;
  const selectedMovieText = `<p>La peli seleccionada es: ${selectedMovieInfo}</p>`;
  popArea.innerHTML = popArea.innerHTML + movieList + selectedMovieText;
});

// probar funcion
