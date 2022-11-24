// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '678', name: 'Gambita de Dama' },
  ]);
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Eventos

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite;
    setSeries([...series]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };

  const arrayRemove = (array, value) => {
    return array.filter((ele) => {
      return ele != value;
    });
  }; //funcion eliminadora de elementos del array (lo que hace es recorrerme el array y buscarme que los elementos por los que pase no sean iguales al valur que le ha pasado y me los irá metiendo dentro de este nuevo array filtrado). Al final me devuelve el array filtrado sin el elemento que queria eliminar.

  // Funciones de renderizado

  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorita
        .filter((serie) => {
          if (searchIsFavorite === true) {
            favorites.push(serie);
            arrayRemove(series, serie);
          } else {
            return true;
          }
        })
        // Mapeamos
        .map((serie) => {
          if (favorites.length === 0) {
            favorites.forEach((eachserie) => {
              <li key={eachserie.id} id={eachserie.id} onClick={handleFavorite}>
                <h2>{eachserie.name}</h2>
                <p>Es mi serie favorita: Si</p>
              </li>;
            });
          } else {
            return (
              <li key={serie.id} id={serie.id} onClick={handleFavorite}>
                <h2>{serie.name}</h2>
                <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
              </li>
            );
          }
        })
    );
  };

  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor='searchName'>Buscar por nombre de serie</label>
        <input
          type='text'
          id='searchName'
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor='searchIsFavorite'>Mostrar solo las favoritas</label>
        <input
          type='checkbox'
          id='searchIsFavorite'
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default App;
