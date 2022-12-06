import CityOption from './CityOption';

function CityFilter(props) {
  const handleCity = (ev) => {
    props.handleCityFilter(ev.target.value);
  };
  //OPTION 1: sin order alfabetico ni eliminacion de repetidos
  //   const renderCityOptions = () => {
  //     return props.usersData.map((eachUser) => {
  //       return <CityOption eachUser={eachUser} />;
  //     });
  //     };

  //OPTION 2: con orden alfabetico y eliminación de repetidos
  const renderCityOptions = () => {
    const usersCities = props.usersData.map((eachUser) => {
      return eachUser.city;
    });
    const uniqueUsersCities = [];
    const filteredCities = usersCities.filter((userCity) => {
      if (!uniqueUsersCities.includes(userCity)) {
        uniqueUsersCities.push(userCity);
        return userCity;
      }
    });

    return filteredCities.sort().map((eachUserCity, index) => {
      return <CityOption eachUserCity={eachUserCity} key={index} />;
    });
  };

  return (
    <fieldset>
      <legend>Search by city</legend>
      <select name='' id='' onChange={handleCity}>
        <option value='none'>Select a country</option>
        {renderCityOptions()}
      </select>
    </fieldset>
  );
}

export default CityFilter;

//PRIMEROS PASOS:
// OPTION 1
//Crear las options del select en base a las ciudades traidas de cada usuario de la api
//1. Crear renderizador de options que volcaremos en el select.
//2. Este renderizador simplemente mapeara los usuarios y convertirá sus ciudades en options volcables en el select
//3. Crear un template de option que genere el html de cada option por separado, como hicimos con las tarjetas para así tenerlo todo mas organizado y limpio.

//OPTION 2
//1. Ordenar ciudades alfabeticamente:
//Convertir usersData en un array solo de strings de ciudades con todas las ciudades de los usuarios
//Ordenar ese array de ciudades usando .sort()
//Convertirlo a html con un map como siempre

//2. Hacer que las ciudades no se repitan
//Filtrar el array antes de ordenarlo y de mapearlo para que solo contenga una ciudad de cada
//Para ello creo un array vacio al que iré metiendo las ciudades
//En el filtro le diré: cuando pases por esta ciudad confirmame que esta dentro de este array. ¿que no está? entonces me metes la ciudad en el array y me la devuelves como resultado del filtro. Si resulta que si que está, entonces no quiero que me hagas nada. Solo quiero que me filtres las ciudades únicas e irrepètibles
//Una vez creado este array filtrado voy y lo ordeno y mapeo

//SEGUNDOS PASOS:
//Recoger el value de cada option mediante una función manejadora aplicada en un onChange del select
//Una vez recogido lo mando mediante lifting a una funcion manejadora en APP que recoja su valor en un estado
//Devolvemos dicho estado actualizado al value del select para tenerlo siempre controlado??
//Mandamos ese estado actualizado a userPanel para poder llevar a cabo el filtrado por ciudad

//TERCEROS PASOS:
//Filtramos por ciudad diciendo que si la ciudad del user por el que pasamos es igual al value del select me muestre a ese usuario
//Pero que si el value del select está vacío me devuelva a todo el mundo, como el filtro por género.
