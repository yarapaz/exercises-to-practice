const express = require('express');
const cors = require('cors');
const data = require('./data/rick-and-morty.json');

//Config and init express
const app = express();
app.use(express.json());
app.use(cors());

//Create app server
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

//EndPoints
app.get('/users/:characterId', (req, res) => {
  const characterId = parseInt(req.params.characterId);
  const foundCharacter = data.results.find((eachData) => {
    return characterId === eachData.id;
  });
  console.log(foundCharacter);

  res.json(foundCharacter);
});

app.get('/users/:characterId/episodes', (req, res) => {
  const characterId = parseInt(req.params.characterId);
  const foundCharacter = data.results.find((eachData) => {
    return characterId === eachData.id;
  });
  const foundCharacterEpisodes = foundCharacter.episode;
  res.json(foundCharacterEpisodes);
});
