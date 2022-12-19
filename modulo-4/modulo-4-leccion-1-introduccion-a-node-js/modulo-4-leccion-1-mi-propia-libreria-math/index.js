const math = require('./math');

//Para acceder al modulo del modulo primero tenemos que acceder a la propiedad que nos lleva a ese modulo y luego dentro de ese modulo a la funcion que este nos exporta para utilizarla.
function operations(a, b) {
  const add = math.add.add(a, b);
  console.log(add);
  const substract = math.substract.substract(a, b);
  console.log(substract);
}

operations(5, 2);
