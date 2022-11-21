import '../styles/App.scss';

function App() {
  return (
    <main class='main'>
      <article class='playground'>
        <h1 className='title_1 uppercase'>Juego</h1>
        <h2 className='title_2 uppercase'>Los anillos de poder</h2>
        <p className='text_1'>
          ¡La <span className='capitalize'>tierra media</span> está en guerra!
          En ella lucharán razas leales a{' '}
          <span className='capitalize'>sauron</span> contra otras bondadosas que
          no quieren que el mal reine sobre sus tierras.
        </p>
        <strong className='text_2'>
          Eres un jugador del ejército del bien, no olvides tu misión de ganar
          la batalla.
        </strong>
        <form className='form' action=''>
          <select className='select js_select' name='' id=''>
            <option value='0' disabled>
              Selecciona la raza con la que vas a jugar
            </option>
            <option value='1'>Raza 1: Hobbits</option>
            <option value='2'>Raza 2: Sureños</option>
            <option value='3'>Raza 3: Enanos</option>
            <option value='4'>Raza 4: Numenóreanos</option>
            <option value='5'>Raza 5: Elfos</option>
          </select>
          <button className='btn js_battle_btn'>Batalla</button>
          <button className='btn js_reset_btn hidden'>Reiniciar juego</button>
        </form>
        <p className='text_3 js_battle_text'>¡Comienza la batalla!</p>
        <article className='races'>
          <section className='images'>
            <div
              className='image--user js_user_image'
              style={{ backgroundImage: `url('./images/good-forces.jpg')` }}
            ></div>
            <div
              className='image--computer js_computer_image'
              style={{ backgroundImage: `url('./images/evil-forces.jpg')` }}
            ></div>
          </section>
          <section className='names'>
            <p className='name--user js_user_race'></p>
            <p className='name--computer js_computer_race'></p>
          </section>
        </article>
        <article className='scores'>
          <h3 className='title_3'>Puntuaciones</h3>
          <section className='counter'>
            <p className='user'>Jugadora:</p>
            <p className='user__score js_user_counter'>0</p>
            <p className='computer'>Ordenador:</p>
            <p className='computer__score js_computer_counter'>0</p>
          </section>
        </article>
      </article>
      <aside className='aside'></aside>
    </main>
  );
}

export default App;
