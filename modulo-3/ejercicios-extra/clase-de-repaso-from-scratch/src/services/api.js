const callToApi = () => {
  return fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((data) => {
      const users = data.results.map((eachData) => {
        const user = {
          id: crypto.randomUUID(),
          name: eachData.name.first + ' ' + eachData.name.last,
          image: eachData.picture.large,
          city: eachData.location.city,
          age: eachData.registered.age,
          gender: eachData.gender,
        };
        return user;
      });
      return users;
    })
    .catch((error) => console.log(`An error ${error} has been found`));
};

export default callToApi;
