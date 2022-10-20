'use strict';

let currentYear = 2022;
const yearCalc = currentYear % 4;

switch (currentYear) {
  case !currentYear:
    console.log('Inserta un año válido, por favor');
    break;
  case (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 4));
    break;
  case (currentYear % 4 === 1 && currentYear % 100 !== 1) ||
    currentYear % 400 === 1:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 3));
    break;
  case (currentYear % 4 === 2 && currentYear % 100 !== 2) ||
    currentYear % 400 === 2:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 2));
    break;
  case (currentYear % 4 === 3 && currentYear % 100 !== 3) ||
    currentYear % 400 === 3:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 1));
    break;
  default:
    console.log('Este año es bisiesto');
}
