import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import UserPanel from './UserPanel';
import Filters from './Filters';
import UserDetail from './UserDetail';
import ls from '../services/localStorage';

function App() {
  //States
  const lsInfo = ls.get('userSearch', {
    name: '',
    gender: '',
    city: '',
  });
  const [usersData, setUsersData] = useState([]);
  const [userNameFilter, setUserNameFilter] = useState(lsInfo.name);
  const [userGenderFilter, setUserGenderFilter] = useState(lsInfo.gender);
  const [userCityFilter, setUserCityFilter] = useState(lsInfo.city);
  const [userSearch, setUserSearch] = useState({
    name: lsInfo.name,
    gender: lsInfo.gender,
    city: lsInfo.city,
  });

  //Effects
  useEffect(() => {
    callToApi().then((users) => setUsersData(users));
  }, []);

  //Handlers
  const handleNameFilter = (name) => {
    setUserNameFilter(name);
    ls.set('userSearch', { ...userSearch, name: name });
  };

  const handleGenderFilter = (gender) => {
    setUserGenderFilter(gender);
    ls.set('userSearch', { ...userSearch, gender: gender });
  };

  const handleCityFilter = (city) => {
    setUserCityFilter(city);
    ls.set('userSearch', { ...userSearch, city: city });
  };

  const handleReset = () => {
    ls.clear();
    setUserNameFilter('');
    setUserGenderFilter('');
    setUserCityFilter('all');
  };

  const findUser = (name) => {
    return usersData.find((eachUser) => eachUser.name === name);
  };

  return (
    <>
      <main className='main'>
        <h1 hidden>Users List</h1>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  handleNameFilter={handleNameFilter}
                  userNameFilter={userNameFilter}
                  handleGenderFilter={handleGenderFilter}
                  userGenderFilter={userGenderFilter}
                  usersData={usersData}
                  handleCityFilter={handleCityFilter}
                  handleReset={handleReset}
                />
                <UserPanel
                  usersData={usersData}
                  userNameFilter={userNameFilter}
                  userGenderFilter={userGenderFilter}
                  userCityFilter={userCityFilter}
                />
              </>
            }
          ></Route>
          <Route
            path='/users/:user'
            element={
              <>
                <UserDetail findUser={findUser} />
              </>
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
