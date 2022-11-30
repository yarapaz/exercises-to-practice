const callToApi = () => {
  return fetch('https://swapi.dev/api/people/5')
    .then((response) => response.json())
    .then((response) => {
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color,
      };
      return result;
    });
};

export default callToApi;
