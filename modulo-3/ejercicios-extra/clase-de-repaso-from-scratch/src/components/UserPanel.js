import UserCard from './UserCard';

//Crear renderizador de cartas para volcarlas en la UL
//Crear componente que yo me traiga al renderizador para pasarle por props la info de cada tarjeta para en su template crear cada tarjeta
//El renderizador pasará de array a html todo el contenido y lo volcará en nuestra ul en forma de html

function UserPanel({
  usersData,
  userNameFilter,
  userGenderFilter,
  userCityFilter,
}) {
  const renderUserCards = () => {
    return usersData
      .filter((eachUser) => {
        if (eachUser.name.toLowerCase().includes(userNameFilter.toLowerCase()))
          return eachUser;
      })
      .filter((eachUser) => {
        if (eachUser.gender === userGenderFilter) {
          return eachUser;
        } else if (userGenderFilter === '' || userGenderFilter === 'all') {
          return true;
        }
      })
      .filter((eachUser) => {
        if (eachUser.city === userCityFilter) {
          return eachUser;
        } else if (userCityFilter === '' || userCityFilter === 'all') {
          return true;
        }
      })
      .map((eachUser) => {
        return <UserCard eachUser={eachUser} key={eachUser.id} />;
      });
  };

  return (
    <section>
      <article>
        <ul className='list'>{renderUserCards()}</ul>
      </article>
    </section>
  );
}

export default UserPanel;
