import '../styles/App.scss';
import adalabLogo from '../images/adalab-logo.png';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import MainHeader from './MainHeader';
import Header from './Header';
import Tweet from './Tweet';
import ComposeModal from './ComposeModal';

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

  const handleComposeText = (value) => {
    setComposeText(value);
  };

  const handleComposeSubmit = () => {
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
    if (composeIsOpen) {
      return (
        <ComposeModal
          handleSubmit={handleComposeSubmit}
          handleToggle={handleToggleCompose}
          adalabLogo={adalabLogo}
          composeText={composeText}
          handleComposeText={handleComposeText}
        />
      );
    }
  };

  return (
    <div className='App'>
      <div className='page'>
        <Header handleClick={handleToggleCompose} />
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
