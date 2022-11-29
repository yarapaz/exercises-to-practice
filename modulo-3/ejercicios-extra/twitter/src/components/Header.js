import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuButton from './HeaderMenuButton';
import '../styles/components/Header.scss';

function Header(props) {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <header className='header'>
      <nav className='menu'>
        <ul className='menu__items'>
          <HeaderMenuItem
            text='Ir al inicio'
            href='/home'
            liClass='twitter'
            title='Ir'
          />
          <HeaderMenuItem
            text='Ir al inicio'
            href='/home'
            liClass='home'
            title='Ir'
          />
          <HeaderMenuItem
            text='Buscar'
            href='/search'
            liClass='search'
            title='Buscar'
          />
          <HeaderMenuItem
            text='Perfil'
            href='/profile'
            liClass='profile'
            title='Perfil'
          />
          <HeaderMenuButton
            handleClick={handleClick}
            text='Twittear'
            liClass='tweet'
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
