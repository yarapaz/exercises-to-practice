'use strict';

year = 0;

for (year = 2018; year <= 2032; year++) {
  year += 2;
  // if (year === 2017) {
  //   year += 3;
  // } else if (year >= 2020) {
  //   year += 3;
  // }
  console.log('La próxima luna del cazador será en: ' + year);
}

//Contamos desde el siguiente año porque si sumamos 3 (que sería lo lógico), el primer año lo calcula bien pero a partir de ahi como la condicion dice "+1" no empezará el bucle en 2020 sino en 2021. Dicho incremento no afecta al primero pero si al segundo y tercero y consecutivamente. Intenté hacer un if pero no funcionó
