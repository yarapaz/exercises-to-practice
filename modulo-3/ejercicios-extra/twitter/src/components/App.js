import '../styles/App.scss';
import adalabLogo from '../images/adalab-logo.png';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import MainHeader from './MainHeader';
import HeaderMenuItem from './HeaderMenuItem';
import Tweet from './Tweet';

function App() {
  //States
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  //Es una práctica muy habitual llamar al ls y que cuando esté vacío me devuelva un valor por defecto
  const [composeText, setComposeText] = useState(ls.get('composeText', ''));
  const [tweets, setTweets] = useState([]);

  //Effects
  //Aqui mando llamar a todos los datos de la api al arrancar la página
  //1. Poner el array vacio indica que solo se ejecutará una vez
  //2. No poner nada hará que se lance en loop eterno
  //3. Poner un estado o algo indica que solo se lanzará cuando los datos de ese estado cambien
  useEffect(() => {
    callToApi().then((data) => {
      setTweets(data);
    });
  }, []);

  //Este use effect le indico que solo se ejecute cuando el composetext cambie.
  //1. La primera vez se ejecuta segun arranca la pagina
  //2. Y la segunda cuando escribo en el composeText porque su estado cambia.
  useEffect(() => {
    ls.set('composeText', composeText);
  }, [composeText]);

  //Events

  const handleToggleCompose = () => {
    setComposeIsOpen(!composeIsOpen);
  };

  const handleComposeText = (ev) => {
    setComposeText(ev.target.value);
  };

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
    tweets.unshift({
      id: '0as8fdsdf',
      avatar: 'http://localhost:3000/assets/avatars/user-4.jpg',
      user: 'Concha Asensio',
      username: 'conchaasensio',
      date: '3 sep. 2021',
      text: composeText, //porque el texto quiero que sea el que escriba yo en el tweet
      comments: 1,
      retweets: 3,
      likes: 13,
    });
    setTweets([...tweets]); //si no hacemos el spread nos pintará la pagina de nuevo con los mismos datos
    setComposeIsOpen(false); //cierra la seccion una vez hacemos click en el boton
    setComposeText(''); //vacia el textarea una vez cerramos el tweet para que no se quede ahi por siempre
  };

  //Render Helpers

  const renderTweets = () => {
    return tweets.map((tweet) => {
      return <Tweet key={tweet.id} tweet={tweet} />;
    });
  };

  // const renderTweets2 = () => {
  //   return tweets.map(tweet => {
  //     return (
  //       <Tweet2
  //         key={tweet.id}
  //         avatar={tweet.avatar}
  //         user={tweet.user}
  //         username={tweet.username}
  //         date={tweet.date}
  //         text={tweet.text}
  //         comments={tweet.comments}
  //         retweets={tweet.retweets}
  //         likes={tweet.likes}
  //       />
  //     );
  //   });
  // };

  const renderComposeModal = () => {
    const isButtonDisabled = composeText.length === 0;
    if (composeIsOpen) {
      return (
        <div className='compose__modal-overlay'>
          <form action='' onSubmit={handleComposeSubmit}>
            <div className='compose__modal-wrapper'>
              <div className='compose__modal-header'>
                <button
                  className='compose__modal-close-btn'
                  onClick={handleToggleCompose}
                >
                  Cerrar
                </button>
              </div>
              <div className='compose__modal-content'>
                <img
                  className='compose__profile-logo'
                  src={adalabLogo}
                  alt='Logo de Adalab'
                />
                <textarea
                  className='compose__profile-textarea'
                  placeholder='¿Qué está pasando?'
                  value={composeText}
                  onChange={handleComposeText}
                />
              </div>
              <div className='compose__modal-footer'>
                <button
                  className='compose__modal-tweet-btn'
                  disabled={isButtonDisabled}
                >
                  Twittear
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  const renderHeader = () => {
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
            <li className='menu__item menu__item--tweet'>
              <button
                className='menu__link'
                href='/compose/tweet'
                title='Twittear'
                onClick={handleToggleCompose}
              >
                <span className='text'>Twittear</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  return (
    <div className='App'>
      <div className='page'>
        {renderHeader()}
        <main className='main'>
          <MainHeader />
          <ul>{renderTweets()}</ul>
          {renderComposeModal()}
        </main>
      </div>
    </div>
  );
}

export default App;
