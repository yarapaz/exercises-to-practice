const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data); //Estos callback le pedimos que los lance una vez haya leido el archivo, una accion asincrona
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

//ejecución del script
readFile('./input.txt', (fileContent) => {
  //No hace falta mandar el err como parametro, solo el filecontent, que seria el data de arriba
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  writeFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied!');
  });
});
