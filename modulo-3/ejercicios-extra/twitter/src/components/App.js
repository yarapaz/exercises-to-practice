import '../styles/App.scss';
import adalabBanner from '../images/adalab-banner.jpg';
import adalabLogo from '../images/adalab-logo.png';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';

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

  //Render helpers
  const renderHeader = () => {
    return (
      <header className='header'>
        <nav className='menu'>
          <ul className='menu__items'>
            <li className='menu__item menu__item--twitter'>
              <a className='menu__link' href='/home' title='Ir'>
                <span className='text'>Ir al inicio</span>
              </a>
            </li>

            <li className='menu__item menu__item--home'>
              <a className='menu__link' href='/home' title='Ir'>
                <span className='text'>Ir al inicio</span>
              </a>
            </li>

            <li className='menu__item menu__item--search'>
              <a className='menu__link' href='/search' title='Buscar'>
                <span className='text'>Buscar</span>
              </a>
            </li>

            <li className='menu__item menu__item--profile'>
              <a className='menu__link' href='/profile' title='Perfil'>
                <span className='text'>Perfil</span>
              </a>
            </li>

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

  const renderTweets = () => {
    return tweets.map((tweet) => {
      //mappeamos el array traido ficcionalmente desde la api
      return (
        <li key={tweet.id}>
          <article className='tweet__wrapper'>
            <img
              className='tweet__avatar'
              src={tweet.avatar}
              alt={`Avatar de ${tweet.user}`}
            />
            <div className='tweet__content'>
              <p className='tweet__info'>
                <span className='tweet__user'>{tweet.user}</span>
                <span className='tweet__username'>@{tweet.username}</span>
                <span className='tweet__date'>{tweet.date}</span>
              </p>
              <p className='tweet__text'>{tweet.text}</p>
              <ul className='tweet__actions'>
                <li className='tweet__comments'>{tweet.comments}</li>
                <li className='tweet__retweets'>{tweet.retweets}</li>
                <li className='tweet__likes'>{tweet.likes}</li>
                <li className='tweet__share'>
                  <span className='tweet__share--text'>Compartir</span>
                </li>
              </ul>
            </div>
          </article>
        </li>
      );
    });
  };

  const renderMainHeader = () => {
    return (
      <section className='main__header'>
        <header>
          <h1 className='header__title'>
            <span className='header__account'>Adalab</span>
            <span className='header__tweets'>6.762 Tweets</span>
          </h1>

          <img src={adalabBanner} alt='Banner de Adalab' />

          <div className='header__content'>
            <div className='header__profile-image'>
              <img src={adalabLogo} alt='Imagen de perfil de Adalab' />
            </div>

            <div className='header__actions'>
              <button className='header__follow-btn'>Siguiendo</button>
            </div>

            <div className='header__account-info'>
              <span className='header__acount-title'>Adalab</span>
              <span className='header__acount-username'>@Adalab_Digital</span>
              <span className='header__acount-follow'>Te sigue</span>
            </div>

            <h2 className='header__account-description'>
              👩‍💻 Tecnóloga mujer Escuela de programación web para mujeres.{' '}
              <br />
              📅 Calendario espiralado Próximo curso: noviembre 2021. <br />
              📌 Clases online en directo.
              <br />
              🚀 Aprende a programar en solo 12 semanas.
            </h2>

            <div className='header__account-data'>
              <span className='header__account-region'>
                Madrid, Comunidad de Madrid
              </span>
              <a className='header__account-link' href='https://adalab.es'>
                adalab.es
              </a>
              <span className='header__account-date'>
                Se unió en agosto de 2016
              </span>
            </div>

            <div className='header__followers-info'>
              <span className='header__following'>
                <span className='header__followers-number'>1.908</span>{' '}
                Siguiendo
              </span>
              <span className='header__followers'>
                <span className='header__followers-number'>5.601</span>{' '}
                Seguidores
              </span>
            </div>
          </div>
        </header>
      </section>
    );
  };

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

  return (
    <div className='App'>
      <div className='page'>
        {renderHeader()};
        <main className='main'>
          {renderMainHeader()}
          <ul>{renderTweets()}</ul>
          {renderComposeModal()}
        </main>
      </div>
    </div>
  );
}

export default App;
