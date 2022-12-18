const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data);
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

readFile('./input-file.json', (fileContent) => {
  const jsonData = JSON.parse(fileContent); //Pasa el texto a objeto
  jsonData.age = 34; //Lo modificamos
  const jsonData2 = JSON.stringify(jsonData); //Lo pasamos a texto otra vez y lo guardamos en otro archivo
  writeFile('./output-file.json', jsonData2, () => {
    console.log('The file has been copied!');
  });
});

//Cuando trabaje con JSONS debo recogerlo en formato texto y convertirlo a JSON, como cuando recibiamos la info de la API. Lo modificamos. Volvemos a convertirlo a texto para enviarlo de nuevo a un archivo json copiado.
