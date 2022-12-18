const fs = require('fs');

const handleFile = (err, fileContent) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Contenido del fichero en formato texto:', fileContent);
    const jsonData = JSON.parse(fileContent);
    console.log(`Contenido: ${jsonData.content}`);
  }
};

fs.readFile('./input.json', 'utf8', handleFile); //Esta función se denomina función CallBack
