// Fichero src/services/api.js
// const callToApi = () => {
//   return fetch(
//     'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/tweets.json'
//   ).then((response) => response.json());
//   //Lo siguiente se pone SOLO en caso de tener que mapear la info que recibamos de la API, sino no hace falta
//   // .then((response) => {
//   //   // Cuando responde la API podemos limpiar los datos aquí
//   //   const result = {
//   //     name: response.name,
//   //     birthYear: response.birth_year,
//   //     height: response.height,
//   //     mass: response.mass,
//   //     eyeColor: response.eye_color,
//   //   };
//   //   return result;
//   // });
// };

const getTweets = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/tweets.json'
  ).then((response) => response.json());
};

const getProfile = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/twitter-v1/profile.json'
  ).then((response) => response.json());
};

const objToExport = {
  getProfile,
  getTweets,
};

export default objToExport;
