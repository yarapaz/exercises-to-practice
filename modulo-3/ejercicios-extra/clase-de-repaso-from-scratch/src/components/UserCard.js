import { NavLink } from 'react-router-dom';

function UserCard({ eachUser }) {
  return (
    <>
      <NavLink to={`/users/${eachUser.name}`}>
        <li className='list__item'>
          <article>
            <h3>{eachUser.name}</h3>
            <div
              className='image'
              style={{ backgroundImage: `url(${eachUser.image})` }}
            ></div>
            <p>{eachUser.city}</p>
            <p>{eachUser.age}</p>
          </article>
        </li>
      </NavLink>
    </>
  );
}

export default UserCard;
