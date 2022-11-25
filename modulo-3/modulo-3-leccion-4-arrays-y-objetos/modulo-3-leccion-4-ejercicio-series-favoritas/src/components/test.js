const series = [
  { id: '123', name: 'Juego de tronos' },
  { id: '456', name: 'Las chicas Gilmore' },
  { id: '678', name: 'Gambita de Dama' },
];
const favorites = [
  { id: '123', name: 'Juego de tronos' },
  { id: '456', name: 'Las chicas Gilmore' },
];

const renderfavorite = (el) => {
  //Usar un FIND antes que un FOREACH es mas acertado porque recorre el array de favoritos y solo saca el si o el no una vez ha recorrido todo el array y me suelta las conclusiones. No va con cada elemento
  if (favorites.length !== 0) {
    debugger;
    //Esta función no pinta nada, da vacío. No estoy usando bien el array. Le pido que me devuelva un string cuando realmente me deberia devolver un objeto y por eso hace crash y no lo pinta bien
    const answer = favorites.find((eachFav) => {
      if (eachFav.id === el.id) {
        return 'Sí';
      } else {
        return 'No';
      }
    });
    return answer;
  } else {
    //esta función sí que pinta todo
    return 'No';
  }
};

console.log(renderfavorite());
