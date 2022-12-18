const fs = require('fs');

const handleFile = (err, fileContent) => {
  if (err !== null) {
    console.log('Error', err);
  } else {
    console.log('El contenido del fichero es', fileContent);
    console.log('La longitud del contenido es', fileContent.length);
  }
};

fs.readFile('./input.txt', 'utf8', handleFile);

//Esto es lo mismo que lo de arriba
// const btnEelement = document.querySelector('.btn');

// const handleClick = (ev) => {
//   console.log(ev);
// };

// btnEelement.addEventListener('click', handleClick);
