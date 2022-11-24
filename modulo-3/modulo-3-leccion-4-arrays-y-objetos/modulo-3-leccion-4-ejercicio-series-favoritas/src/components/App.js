// Fichero src/components/App.js
import { useState } from 'react';

//NO consigo que cambie del SI al NO y que me haga caso el checkbox de favoritos

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
    const foundSerieIndex = favorites.findIndex(
      (serie) => serie.id === clickedSerieId
    );

    if (foundSerieIndex === -1) {
      favorites.push(foundSerie);
    } else {
      favorites.splice(foundSerieIndex, 1);
    }
    console.log(favorites);
    setFavorites([...favorites]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked); //cambia el tru o false dependiendo del valor true o false de su propiedad checked (comoe el value pero en radios o checkboxes)
  };

  // const arrayRemove = (array, value) => {
  //   debugger;
  //   const filtered = array.filter((ele) => ele !== value);
  //   console.log(filtered);
  //   return filtered;
  // }; //funcion eliminadora de elementos del array (lo que hace es recorrerme el array y buscarme que los elementos por los que pase no sean iguales al value que le ha pasado y me los irá metiendo dentro de este nuevo array filtrado). Al final me devuelve el array filtrado sin el elemento que queria eliminar.

  // Funciones de renderizado

  const renderfavorite = (el) => {
    if (favorites.length === 0) {
      return 'No';
    } else {
      favorites.forEach((eachFav) => {
        if (eachFav === el) {
          return 'Sí';
        } else {
          return 'No';
        }
      });
    }
  };

  const renderSeries = () => {
    let inFav = [];
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Mapeamos
        .filter((serie) => {
          if (searchIsFavorite) {
            favorites.filter((eachSerie) => {
              if (eachSerie === serie) {
                inFav.push(eachSerie);
              }
            });
            //le pido que en caso de que el checkbox de "mostrar solo favoritas" este clickado y de true me filtre cuales son favoritas, me las guarde en un array vacio declarado fuera y luego me devuelva ese array como resultado final del segundo filter que es lo que le pasaré al map. Es necesario declarar un array vacio fuera porque sino en cada iteracion me machacará el que ya tengo y lo sobreescribira con el nuevo, como en el filter de Blanca. Además, solo hara el push cuando se produzca el match, porque sino me meterá un dato vacio de mas dentro de mi array de fuera.
            return inFav;
          } else {
            return true; //si le digo que me devuelva TRUE quiere decir que todo es verdadero asi que literalmente me devuelve todo el array que tengo sin filtrarmelo.
          }
        })
        .map((serie) => {
          console.log(serie);
          //Hacemos el cambio de objetos a elementos html
          return (
            //El si o el no aparecerán dependiendo de: si la pelicula está en favoritos o no
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {renderfavorite(serie)}</p>
            </li>
            //me devolvia solo un SI o solo un NO porque el array de inFAV solo tenia un elemento al machacarse en cada vuelta de la iteracion. Esto ocurre cuando hacemos un filter dentro de otro filter.
          );
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
