import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='menu'>
      <NavLink to='/overview'>Overview</NavLink>
      <NavLink to='/repositories'>Repositories</NavLink>
      <NavLink to='/packages'>Packages</NavLink>
      <NavLink to='/people'>People</NavLink>
      <NavLink to='/teams'>Teams</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/settings'>Settings</NavLink>
    </nav>
  );
}

export default Header;
