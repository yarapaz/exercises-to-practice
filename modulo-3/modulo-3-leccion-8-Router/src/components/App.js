import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './Overview';
import Repositories from './Repositories';
import PageNotFound from './PageNotFound';
import Header from './Header';
import ToolTip from './ToolTip';

function App() {
  const [html, setHtml] = useState('');

  function handleHover() {
    setHtml(
      <ToolTip>
        <h1>Hello</h1>
      </ToolTip>
    );
  }

  function handleOut() {
    setHtml('');
  }

  return (
    <>
      <main>
        <section>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <Header />
                  <p>'Hola mundo'</p>
                </>
              }
            />
            <Route
              path='/overview'
              element={
                <>
                  <Header />
                  <Overview />
                </>
              }
            />
            <Route
              path='/repositories'
              element={
                <>
                  <div>Zona no apta para manazas</div>
                  <Header />
                  <Repositories />
                </>
              }
            />
            <Route
              path='*'
              element={
                <>
                  <Header />
                  <PageNotFound />
                </>
              }
            />
          </Routes>
        </section>
        <section
          className='section'
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          {html}
        </section>
      </main>
    </>
  );
}

export default App;
