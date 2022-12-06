import CityFilter from './CityFilter';
import GenderFilter from './GenderFilter';
import NameFilter from './NameFilter';
import Reset from './Reset';

function Filters(props) {
  return (
    <aside>
      <section>
        <form action=''>
          <NameFilter
            handleNameFilter={props.handleNameFilter}
            userNameFilter={props.userNameFilter}
          />
          <GenderFilter
            handleGenderFilter={props.handleGenderFilter}
            userGenderFilter={props.userGenderFilter}
          />
          <CityFilter
            usersData={props.usersData}
            handleCityFilter={props.handleCityFilter}
          />
          <Reset handleReset={props.handleReset} />
        </form>
      </section>
    </aside>
  );
}

export default Filters;
