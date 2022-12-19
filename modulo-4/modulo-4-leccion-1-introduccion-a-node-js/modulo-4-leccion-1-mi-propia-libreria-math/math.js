// function add(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   substract,
// };

//Version avanzada usando modulos dentro de modulos
//Importamos los modulos
const add = require('./math-add');
const substract = require('./math-sub');

//Exportamos los modulos
module.exports = {
  add: add,
  substract: substract,
};
